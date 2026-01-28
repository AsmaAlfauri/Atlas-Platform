import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PermissionState {
  permissions: string[];
}

const initialState: PermissionState = {
  permissions: [],
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setPermissions: (state, action: PayloadAction<string[]>) => {
      state.permissions = action.payload;
    },
    resetPermissions: (state) => {
      state.permissions = [];
    },
  },
});

export const { setPermissions, resetPermissions } = permissionSlice.actions;
export default permissionSlice.reducer;
