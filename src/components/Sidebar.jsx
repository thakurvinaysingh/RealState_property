import React from 'react';
import { IoCloseSharp } from "react-icons/io5";


export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 ease-in-out
        xl:translate-x-0 xl:static xl:shadow-none z-30
      `}
    >
      <div className="p-4 flex items-center justify-between xl:hidden">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark text-gray-600"></i>
          <IoCloseSharp /> 
        </button>
      </div>

      <nav className="px-4 space-y-2">
        <ul className="space-y-1">
          {[
            { href: '/dashboard', icon: 'dashboard.png', label: 'Dashboard', active: true },
            { href: '/investment', icon: 'investments.png', label: 'Investments' },
            { href: '/transactions', icon: 'transactions.png', label: 'Transactions' },
            { href: '/withdraw', icon: 'withdraw.png', label: 'Withdraw' },
            { href: '/account', icon: 'account.png', label: 'Account' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`
                  flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition
                  ${item.active ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-gray-700'}
                `}
              >
                <img
                  src={`/assets/images/icons/${item.icon}`}
                  alt={item.label}
                  className="h-5 w-5 mr-3"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <hr className="my-4" />

        <ul>
          <li>
            <a
              href="/login"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              <img src="/assets/images/icons/logout.png" alt="Logout" className="h-5 w-5 mr-3" />
              Logout
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto p-4 border-t">
        <h6 className="font-semibold mb-2">Last Login</h6>
        <div className="text-gray-600 text-sm space-y-1">
          <div className="flex items-center">
            <img
              src="/assets/images/icons/calendar.png"
              alt=""
              className="h-4 w-4 mr-1"
            />
            <span>02.01.2022</span>
          </div>
          <div>15:48:13</div>
        </div>
      </div>
    </aside>
  );
}

