import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TenantState {
  tenantId: string | null;
  tenantName: string;
  enabledFeatures: string[];
}

const initialState: TenantState = {
  tenantId: null,
  tenantName: '',
  enabledFeatures: [],
};

export const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    switchTenant: (state, action: PayloadAction<{ tenantId: string; tenantName: string; features: string[] }>) => {
      state.tenantId = action.payload.tenantId;
      state.tenantName = action.payload.tenantName;
      state.enabledFeatures = action.payload.features;
    },
    resetTenant: (state) => {
      state.tenantId = null;
      state.tenantName = '';
      state.enabledFeatures = [];
    },
  },
});

export const { switchTenant, resetTenant } = tenantSlice.actions;
export default tenantSlice.reducer;
