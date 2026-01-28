import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PermissionState {
  role: 'Admin' | 'Manager' | 'Viewer';
  permissions: string[];
}

const rolePermissionsMap: Record<string, string[]> = {
  Admin: ['view_users', 'edit_users', 'view_dashboard'],
  Manager: ['view_users', 'view_dashboard'],
  Viewer: ['view_dashboard'],
};

const initialState: PermissionState = {
  role: 'Viewer',
  permissions: rolePermissionsMap['Viewer'],
};

const permissionSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    // لتغيير role تلقائياً
    setRole(state, action: PayloadAction<'Admin' | 'Manager' | 'Viewer'>) {
      state.role = action.payload;
      state.permissions = rolePermissionsMap[action.payload];
    },
    // لتعيين صلاحيات مباشرة (مثلاً من tenantMiddleware)
    setPermissions(state, action: PayloadAction<string[]>) {
      state.permissions = action.payload;
    },
    // إعادة تهيئة الصلاحيات للوضع الافتراضي
    resetPermissions(state) {
      state.role = 'Viewer';
      state.permissions = rolePermissionsMap['Viewer'];
    },
  },
});

export const { setRole, setPermissions, resetPermissions } = permissionSlice.actions;
export default permissionSlice.reducer;
