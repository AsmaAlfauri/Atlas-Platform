'use client';
import { useState, FormEvent } from 'react';
import Toast from '../ui/Toast';

interface UserFormProps {
  onSubmit: (data: { name: string; role: string }) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Viewer');
  const [error, setError] = useState(''); // state للخطأ
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Name is required');
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000); // يغلق تلقائياً
      return;
    }

    onSubmit({ name, role });
    setName('');
    setRole('Viewer');
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
            style={{ padding: 8, width: '100%', marginTop: 4 }}
          />
        </label>

        <label>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ padding: 8, width: '100%', marginTop: 4 }}
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Viewer">Viewer</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            padding: 10,
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: 4,
            marginTop: 8,
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      {showErrorToast && <Toast message={error} type="error" />}
    </>
  );
}
