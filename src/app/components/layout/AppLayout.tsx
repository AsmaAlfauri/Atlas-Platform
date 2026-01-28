// File: src/components/layout/AppLayout.tsx
'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TenantSwitcher from './TenantSwitcher';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar ثابت على الجهة اليسرى */}
      <Sidebar />

      {/* المحتوى الرئيسي */}
      <main style={{ flex: 1, padding: 24 }}>
        {/* Tenant Switcher فوق المحتوى لتغيير الشركة بشكل ديناميكي */}
        <TenantSwitcher />

        {/* المحتوى الخاص بالصفحة */}
        {children}
      </main>
    </div>
  );
}
