'use client';

import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
}

export default function PermissionGuard({ permission, children }: PermissionGuardProps) {
  const permissions = useSelector(
    (state: RootState) => state.permission.permissions
  );

  if (!permissions.includes(permission)) {
    return (
      <div style={{ padding: 24 }}>
        ❌ You do not have permission to access this section.
      </div>
    );
  }

  return <>{children}</>;
}
