"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './Sidebar.css';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const menuItems = [
    { path: '/', label: '🏠 Início', icon: '🏠' },
    { path: '/loja', label: '🛒 Loja', icon: '🛒' },
    { path: '/agenda', label: '📅 Agenda', icon: '📅' },
    { path: '/fotos', label: '📸 Fotos', icon: '📸' },
    { path: '/orcamento', label: '📝 Orçamento', icon: '📝' },
    { path: '/patrocinadores', label: '🤝 Patrocinadores', icon: '🤝' },
  ];

  return (
    <>
      {/* Botão mobile */}
      <button 
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay mobile */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <div className="sidebar-header">
            <h2>🎭 Menu</h2>
          </div>
          
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`sidebar-link ${pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                  {item.path === '/loja' && cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

