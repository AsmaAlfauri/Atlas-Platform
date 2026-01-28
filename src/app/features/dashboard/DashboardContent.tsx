'use client';
import { useState } from 'react';
import { DataTable } from '../../components/ui/DataTable';
import Toast from '../../components/ui/Toast';
import { dashboardMock } from './dashboardMock';

export default function DashboardContent() {
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const columns = [
    { key: 'metric', label: 'Metric' },
    { key: 'value', label: 'Value' },
  ];

  const data = dashboardMock;

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToastMessage('Dashboard refreshed successfully');
    }, 1000);
  };

  return (
    <div style={{ padding: 24 }}>
      <button onClick={handleRefresh} style={{ marginBottom: 16 }}>
        Refresh Dashboard
      </button>
      <DataTable columns={columns} data={data} loading={loading} />
      {toastMessage && <Toast message={toastMessage} type="success" />}
    </div>
  );
}
