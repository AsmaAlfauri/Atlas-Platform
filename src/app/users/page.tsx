'use client';
import { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';

import Modal from '../components/ui/Modal';
import Toast from '../components/ui/Toast';
import UserForm from '../components/forms/UserForm'; 
import { DataTable } from '../components/ui/DataTable';

// Mock Data
const users = [
  { id: 1, name: 'Asma Alfauri', role: 'Admin' },
  { id: 2, name: 'John Doe', role: 'Viewer' },
  { id: 3, name: 'Jane Smith', role: 'Manager' },
];

const userColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
];

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const loading = false;

  const handleAddUser = () => {
    setIsModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <AppLayout>
      
      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{ padding: '8px 16px', backgroundColor: '#1976d2', color: '#fff', borderRadius: 4 }}
        >
          Add User
        </button>
      </div>

      <DataTable columns={userColumns} data={users} loading={loading} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add User">
        <UserForm onSubmit={handleAddUser} />
      </Modal>

      {showToast && <Toast message="User added successfully" type="success" />}
    </AppLayout>
  );
}
