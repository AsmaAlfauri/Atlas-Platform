// src/store/configureStore.ts
import { configureStore } from '@reduxjs/toolkit';
import tenantReducer from './slices/tenantSlice';
import userReducer from './slices/userSlice';
import permissionReducer from './slices/permissionSlice';
import featureReducer from './slices/featureSlice';
import { tenantMiddleware } from './middleware/tenantMiddleware';

export const store = configureStore({
  reducer: {
    tenant: tenantReducer,
    user: userReducer,
    permissions: permissionReducer, 
    feature: featureReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tenantMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
