'use client';

import PermissionGuard from "../components/guards/PermissionGuard";


export default function UsersPage() {
  return (
    <PermissionGuard permission="viewUsers">
      <h1>Users Management</h1>
    </PermissionGuard>
  );
}
