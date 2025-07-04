import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { name: 'Home', to: '/', dropdown: true },
    { name: 'Properties', to: '/properties', dropdown: true },
    // { name: 'Loan', to: '/loan', dropdown: true },
    { name: 'List your property', to: '/list-property', dropdown: false },
    { name: 'About', to: '/about', dropdown: true },
    { name: 'Contact', to: '/contact-us', dropdown: false }
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/assets/images/logo.png" alt="Revest" className="h-8 w-auto mr-2" />
          <span className="text-2xl font-bold text-[#0E1B3B]">Revest</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.to}
                className="text-[#0E1B3B] font-medium hover:text-purple-600 flex items-center"
              >
                {item.name}
                {item.dropdown && <i className="fa-solid fa-chevron-down text-xs ml-1" />}
              </Link>
              {/* Dropdown placeholder */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Populate dropdown links here */}
                  <ul className="py-2">
                    <li><Link to={item.to} className="block px-4 py-2 hover:bg-gray-100">Option 1</Link></li>
                    <li><Link to={item.to} className="block px-4 py-2 hover:bg-gray-100">Option 2</Link></li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center space-x-4 z-10">
          <Link to="/login" className="text-[#0E1B3B] font-medium hover:text-purple-600">
            Log In
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Join Now <i className="fa-solid fa-arrow-right-long ml-2" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMobile} className="xl:hidden text-[#0E1B3B] text-xl focus:outline-none">
          <i className="fa-solid fa-bars" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white shadow-inner">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="block text-[#0E1B3B] font-medium py-2">
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-200 mt-2 pt-2">
              <Link to="/login" className="block text-[#0E1B3B] font-medium py-2">
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center font-medium py-2 rounded-lg mt-2"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
