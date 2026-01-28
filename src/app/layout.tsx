'use client';
import "./globals.css";
import { store } from "./store/configureStore";
import { Provider } from 'react-redux';
import { metadata } from './metadata';
import Sidebar from "./components/layout/Sidebar";
import TenantSwitcher from "./components/layout/TenantSwitcher";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <Provider store={store}>      <Sidebar />
               <TenantSwitcher />
               <main style={{ padding: 24, flex: 1 }}>{children}</main></Provider>
      </body>
    </html>
  );
}
