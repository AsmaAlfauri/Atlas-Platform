import { Middleware } from '@reduxjs/toolkit';
import { switchTenant } from '../slices/tenantSlice';
import { setUser, resetUser } from '../slices/userSlice';
// import { setPermissions, resetPermissions } from '../slices/permissionSlice';
import { setFeatures, resetFeatures } from '../slices/featureSlice';
import { setPermissions ,resetPermissions } from '../slices/permissionSlice';

// fake mock API
const fetchTenantData = async (tenantId: string) => {
  // simulate API
  return {
    features: ['dashboard', 'users'],
    users: [
      { id: 'u1', name: 'Alice', role: 'Admin' },
      { id: 'u2', name: 'Bob', role: 'Manager' },
    ],
  };
};

export const tenantMiddleware: Middleware = (store) => (next) => async (action) => {
  if (action.type === switchTenant.type) {
    // reset dependent slices
    store.dispatch(resetUser());
    store.dispatch(resetPermissions());
    store.dispatch(resetFeatures());

    // load tenant data
    const data = await fetchTenantData(action.payload.tenantId);

    // set features
    store.dispatch(setFeatures(data.features));

    // set first user as current (demo)
    store.dispatch(setUser(data.users[0]));

    // resolve permissions based on role
    let perms: string[] = [];
    if (data.users[0].role === 'Admin') perms = ['viewUsers', 'editUsers', 'accessDashboard'];
    if (data.users[0].role === 'Manager') perms = ['viewUsers', 'accessDashboard'];
    if (data.users[0].role === 'Viewer') perms = ['viewUsers'];

    store.dispatch(setPermissions(perms));
  }
  return next(action);
};
