'use client';
import { useState } from 'react';
import { DataTable } from '../../components/ui/DataTable';
import Modal from '../../components/ui/Modal';
import Toast from '../../components/ui/Toast';
import { usersMock } from './usersMock';
import UserForm from '@/app/components/forms/UserForm';

export default function UsersPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const users = usersMock;
  const userColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
  ];

  const handleAddUser = () => {
    setIsModalOpen(false);
    setToastMessage('User added successfully');
  };

  return (
    <div style={{ padding: 24 }}>
      <button onClick={() => setIsModalOpen(true)} style={{ marginBottom: 16 }}>
        Add User
      </button>
      <DataTable columns={userColumns} data={users} loading={false} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UserForm onSubmit={handleAddUser} />
      </Modal>
      {toastMessage && <Toast message={toastMessage} type="success" />}
    </div>
  );
}
