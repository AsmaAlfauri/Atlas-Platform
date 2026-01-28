'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import Link from 'next/link';

export default function Sidebar() {
  const role = useSelector((state: RootState) => state.permissions.role);

  const links = [
    { label: 'Dashboard', path: '/dashboard', roles: ['Admin', 'Manager', 'Viewer'] },
    { label: 'Users', path: '/users', roles: ['Admin', 'Manager'] },
    { label: 'Settings', path: '/settings', roles: ['Admin'] },
  ];

  return (
    <nav style={{ width: 200, padding: 24, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links
          .filter((link) => link.roles.includes(role))
          .map((link) => (
            <li key={link.path} style={{ marginBottom: 16 }}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
