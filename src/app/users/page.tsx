'use client';
import { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
// import DataTable from '../components/ui/DataTable';
import Modal from '../components/ui/Modal';
import Toast from '../components/ui/Toast';
import TenantSwitcher from '../components/layout/TenantSwitcher';
import { DataTable } from '../components/ui/DataTable';
// import UserForm from '../components/forms/UserForm'; // مثال لو عندك form

const userColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
];

const users = [
  { id: 1, name: 'Asma Alfauri', role: 'Admin' },
  { id: 2, name: 'John Doe', role: 'Viewer' },
];

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const loading = false;

  return (
    <AppLayout>
      <TenantSwitcher />
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      <DataTable columns={userColumns} data={users} loading={loading} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* <UserForm /> */}
      </Modal>
      {showToast && <Toast message="User added successfully" type="success" />}
    </AppLayout>
  );
}
