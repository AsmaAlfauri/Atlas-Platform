'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    feature: 'dashboard',
    roles: ['Admin', 'Manager', 'Viewer'],
  },
  {
    label: 'Users',
    path: '/users',
    feature: 'users',
    roles: ['Admin', 'Manager'],
  },
  {
    label: 'Settings',
    path: '/settings',
    feature: 'settings',
    roles: ['Admin'],
  },
];

export default function Sidebar() {
  const role = useSelector((state: RootState) => state.user.role);
  const enabledFeatures = useSelector(
    (state: RootState) => state.feature.enabledFeatures
  );

  const visibleItems = NAV_ITEMS.filter(
    (item) =>
      enabledFeatures.includes(item.feature) &&
      item.roles.includes(role)
  );

  return (
    <aside style={{ width: 220, padding: 16 }}>
      <ul>
        {visibleItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
