'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TenantSwitcher from './TenantSwitcher';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <TenantSwitcher />
      <main style={{ padding: 24, flex: 1 }}>{children}</main>
    </div>
  );
}
