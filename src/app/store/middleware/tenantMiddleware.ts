import { setFeatures, resetFeatures } from '../slices/featureSlice';
import { setPermissions, resetPermissions } from '../slices/permissionSlice';
import { setUser, resetUser } from '../slices/userSlice';

const fetchTenantData = async (tenantId: string) => {
  // Simulated API response
  const tenantData = {
    t1: { features: ['users', 'dashboard'], permissions: ['view_users', 'edit_users'] },
    t2: { features: ['dashboard'], permissions: ['view_dashboard'] },
  };

  return tenantData[tenantId];
};

export const tenantMiddleware = (storeAPI: any) => (next: any) => async (action: any) => {
  if (action.type === 'tenant/switchTenant') {
    const tenantData = await fetchTenantData(action.payload);
    
    // Reset previous tenant state
    storeAPI.dispatch(resetUser());
    storeAPI.dispatch(resetPermissions());
    storeAPI.dispatch(resetFeatures());

    // Set new tenant state
    storeAPI.dispatch(setPermissions(tenantData.permissions));
    storeAPI.dispatch(setFeatures(tenantData.features));
  }
  return next(action);
};
