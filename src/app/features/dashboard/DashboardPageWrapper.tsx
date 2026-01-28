'use client';
import { useFeature } from '@/app/hooks/useFeature';
import DashboardContent from './DashboardContent';

export default function DashboardPageWrapper() {
  const showDashboard = useFeature('dashboard');

  if (!showDashboard) return <p style={{ padding: 24 }}>Feature disabled for this tenant.</p>;

  return <DashboardContent />;
}