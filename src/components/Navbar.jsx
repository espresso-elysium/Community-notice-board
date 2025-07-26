import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 text-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold text-xl tracking-wide">Community Notice Board</span>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-blue-800 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-4">
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded hover:bg-blue-800 transition ${isActive ? 'bg-blue-900 font-semibold' : ''}`
                  }
                  end={item.to === '/'}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 