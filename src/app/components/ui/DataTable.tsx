'use client';
import React, { memo } from 'react';

interface DataTableProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
  loading?: boolean;
}

function DataTableComponent<T>({ columns, data, loading }: DataTableProps<T>) {
  if (loading) return (
    <tbody>
      {Array(5).fill(0).map((_, i) => (
        <tr key={i}>
          {columns.map(col => <td key={String(col.key)} style={{ padding:8 }}>Loading...</td>)}
        </tr>
      ))}
    </tbody>
  );

  if (!data || data.length === 0) return <div>No data available</div>;

  return (
    <table style={{ width:'100%', borderCollapse:'collapse' }}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)} style={{ border:'1px solid #ddd', padding:8 }}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map(col => (
              <td key={String(col.key)} style={{ border:'1px solid #ddd', padding:8 }}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const DataTable = memo(DataTableComponent) as typeof DataTableComponent;
