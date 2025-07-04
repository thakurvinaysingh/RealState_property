// src/pages/WithdrawPage.jsx
import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function WithdrawPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: hook up your withdraw logic here
    alert('Withdraw submitted!')
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <DashboardHeader onToggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex flex-1 bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 xl:pl-100">
          {/* Mobile sidebar toggle */}
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
            <h5 className="text-2xl font-semibold mb-2">Withdraw</h5>
            <nav className="flex items-center text-gray-600 space-x-2">
              <a href="/" className="hover:underline">Home</a>
              <i className="fa-solid fa-arrow-right-long"></i>
              <span>Withdraw</span>
            </nav>
          </div>

          {/* Withdraw Funds Form */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h5 className="text-lg font-bold mb-2">Withdraw Funds</h5>
            <p className="text-gray-600 mb-4">
              Use the form below to withdraw from wallet instantly
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="withdrawAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  type="number"
                  name="withdraw_amount"
                  id="withdrawAmount"
                  placeholder="100"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="methodSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Payment Method
                </label>
                <select
                  id="methodSelect"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Payment Method</option>
                  <option value="paypal">Paypal</option>
                  <option value="maestro">Maestro</option>
                  <option value="visa">Visa</option>
                  <option value="express">American Express</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-block bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
              >
                Withdraw
              </button>
            </form>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
