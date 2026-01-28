import { createSlice } from '@reduxjs/toolkit';

const initialState = { tenantId: null, enabledFeatures: [] };

export const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {},
});

export default tenantSlice.reducer;
