import React, { useState } from 'react';

export default function DashboardHeader({ onToggleSidebar }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/assets/images/logo.png" alt="Logo" className="h-8" />
        </a>

        {/* Right controls */}
        <div className="flex items-center space-x-4">
          {/* New Investments - hidden on mobile */}
          <a
            href="/investment"
            className="hidden md:flex items-center bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition"
          >
            <img src="/assets/images/direction.png" alt="" className="h-4 w-4 mr-2" />
            New Investments
          </a>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-bell text-gray-600 text-lg md:text-base"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                03
              </span>
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                <div className="text-center py-2 border-b">
                  <p className="font-semibold">3 New</p>
                  <p className="font-semibold">Notifications</p>
                </div>
                <div className="divide-y">
                  {[1, 2].map((i) => (
                    <div key={i} className="p-4">
                      <a href="#!" className="block">
                        <h6 className="font-medium">Welcome to spoment</h6>
                        <p className="text-gray-500 text-sm">
                          We are happy to welcome you to our community spoment.
                        </p>
                      </a>
                      <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                    </div>
                  ))}
                </div>
                <div className="text-center py-2 border-t">
                  <a href="#!" className="text-purple-600 hover:underline">
                    Mark all as read
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Language Dropdown - hidden on mobile */}
          <select className="hidden md:block border-gray-300 rounded-md p-2 text-sm">
            <option>En</option>
            <option>Aus</option>
            <option>GER</option>
            <option>Arg</option>
          </select>

          {/* Profile */}
          <a href="/account">
            <img
              src="/assets/images/profile.png"
              alt="Profile"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
          </a>

          {/* Mobile sidebar toggle */}
          <button
            onClick={onToggleSidebar}
            className="xl:hidden p-2 hover:bg-gray-100 rounded-md transition"
          >
            <i className="fa-solid fa-bars-staggered text-gray-600 text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
