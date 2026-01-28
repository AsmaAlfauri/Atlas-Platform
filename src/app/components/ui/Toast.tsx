'use client';
import { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

export default function Toast({ message, type='info', duration=3000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div style={{
      position:'fixed', bottom:16, right:16, padding:12,
      background: type==='success'?'green':type==='error'?'red':'blue',
      color:'#fff', borderRadius:4
    }}>
      {message}
    </div>
  );
}
