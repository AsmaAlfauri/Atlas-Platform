'use client';
import { useFeature } from '../../../hooks/useFeature';
import UsersPageContent from './UsersPageContent';

export default function UsersPageWrapper() {
  const showUsers = useFeature('users');

  if (!showUsers) return <p style={{ padding: 24 }}>Feature disabled for this tenant.</p>;

  return <UsersPageContent />;
}
