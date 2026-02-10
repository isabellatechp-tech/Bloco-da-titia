"use client";
import { CartProvider } from '../contexts/CartContext';
import Sidebar from './Sidebar';
import Logo from './Logo';

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <Sidebar />
      <div className="main-content">
        <Logo />
        <main className="content-wrapper">
          {children}
        </main>
      </div>
    </CartProvider>
  );
}

