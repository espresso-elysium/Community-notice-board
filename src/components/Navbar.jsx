import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/events', label: 'Events' },
  { to: '/buy-sell', label: 'Buy/Sell' },
  { to: '/contacts', label: 'Contacts' },
  { to: '/post', label: 'Post Notice' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/admin', label: 'Admin' },
];

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <span className="font-bold text-xl tracking-wide">Community Notice Board</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded hover:bg-blue-800 transition ${isActive ? 'bg-blue-900 font-semibold' : ''}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 