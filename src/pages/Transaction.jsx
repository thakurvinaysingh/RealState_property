// src/pages/TransactionPage.jsx
import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const transactions = [
  { project: 'A19, Vilnius', img: '/assets/images/table-img.png', amount: '$500.00', type: 'Paypal', date: '18.03.2022' },
  { project: 'A19, Vilnius', img: '/assets/images/table-img.png', amount: '$500.00', type: 'Visa', date: '18.03.2022' },
  { project: 'A19, Vilnius', img: '/assets/images/table-img.png', amount: '$500.00', type: 'American Express', date: '18.03.2022' },
  { project: 'A19, Vilnius', img: '/assets/images/table-img.png', amount: '$500.00', type: 'Maestro', date: '18.03.2022' },
  { project: 'A19, Vilnius', img: '/assets/images/table-img.png', amount: '$500.00', type: 'Paypal', date: '18.03.2022' },
]

export default function TransactionPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <DashboardHeader onToggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex flex-1 bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 xl:pl-100">
          {/* Mobile toggle */}
          <div className="xl:hidden mb-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 bg-white rounded-md shadow"
            >
              <i className="fa-solid fa-bars-staggered text-gray-600"></i>
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="mb-6">
            <h5 className="text-2xl font-semibold mb-2">Transactions</h5>
            <nav className="flex items-center text-gray-600 space-x-2">
              <a href="/" className="hover:underline">Home</a>
              <i className="fa-solid fa-arrow-right-long"></i>
              <span>Transactions</span>
            </nav>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-lg font-bold">Transactions</h5>
              <h6 className="text-gray-500">
                Total Number of Transactions <span className="text-indigo-600">({transactions.length})</span>
              </h6>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 font-medium text-gray-700">Project</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Amount Invested</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Payment Type</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Date / Time</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-4 py-3 flex items-center space-x-3">
                        <img
                          src={tx.img}
                          alt="Investment"
                          className="h-10 w-10 rounded"
                        />
                        <span className="text-gray-800">{tx.project}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-800">{tx.amount}</td>
                      <td className="px-4 py-3 text-gray-800">{tx.type}</td>
                      <td className="px-4 py-3 text-gray-800">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
