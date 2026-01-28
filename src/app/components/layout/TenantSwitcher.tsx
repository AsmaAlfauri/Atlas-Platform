'use client';

import { switchTenant } from '@/app/store/slices/tenantSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector, useDispatch } from 'react-redux';

const TENANTS = [
  { id: 't1', name: 'Acme Corp' },
  { id: 't2', name: 'Globex Ltd' },
  { id: 't3', name: 'Initech' },
];

export default function TenantSwitcher() {
  const dispatch = useDispatch();
  const currentTenantId = useSelector((state: RootState) => state.tenant.tenantId);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tenant = TENANTS.find(t => t.id === event.target.value);
    if (tenant) {
      dispatch(
        switchTenant({ tenantId: tenant.id, tenantName: tenant.name, features: [] })
      );
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor="tenant-select" style={{ marginRight: 8 }}>Select Tenant:</label>
      <select id="tenant-select" value={currentTenantId || ''} onChange={handleChange}>
        <option value="">--Choose Tenant--</option>
        {TENANTS.map((t) => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>
    </div>
  );
}
