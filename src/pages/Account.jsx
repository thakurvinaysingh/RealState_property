// src/pages/AccountPage.jsx
import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function AccountPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('general')
  const [notifications, setNotifications] = useState({
    announcements: true,
    feedback: true,
  })

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <DashboardHeader onToggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex flex-1 bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main */}
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
            <h5 className="text-2xl font-semibold mb-2">Account</h5>
            <nav className="flex items-center text-gray-600 space-x-2">
              <a href="/" className="hover:underline">Home</a>
              <i className="fa-solid fa-arrow-right-long"></i>
              <span>Account</span>
            </nav>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex space-x-4">
            {[
              { key: 'general', label: 'General' },
              { key: 'billing', label: 'Billing' },
              { key: 'security', label: 'Security' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === tab.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div>
            {/* General */}
            {activeTab === 'general' && (
              <div className="space-y-8">
                {/* Avatar */}
                <div className="flex items-center space-x-6">
                  <div>
                    <img
                      src="/assets/images/team/ryan.png"
                      alt="Avatar"
                      className="w-24 h-24 rounded-full shadow"
                    />
                  </div>
                  <form className="flex items-center space-x-4">
                    <input
                      type="file"
                      id="avatarUpload"
                      className="hidden"
                    />
                    <label
                      htmlFor="avatarUpload"
                      className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition"
                    >
                      Upload new avatar
                    </label>
                  </form>
                </div>

                {/* Profile Form */}
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        placeholder="First Name"
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        placeholder="Last Name"
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Enter Your Email"
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="345-323-1234"
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
                  >
                    Save Changes
                  </button>
                </form>

                {/* Notifications */}
                <div className="space-y-4">
                  <h5 className="text-lg font-bold">Notifications</h5>
                  {[
                    { key: 'announcements', label: 'Announcements', desc: 'Occasional announcements of new features' },
                    { key: 'feedback',    label: 'Feedback requests', desc: 'Occasional requests for feedback' },
                  ].map((opt) => (
                    <div key={opt.key} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                      <div>
                        <h6 className="font-medium">{opt.label}</h6>
                        <p className="text-gray-600 text-sm">{opt.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[opt.key]}
                          onChange={() => toggleNotification(opt.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-checked:bg-purple-600 rounded-full peer transition" />
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition" />
                      </label>
                    </div>
                  ))}
                  {/* Billing & account is legally required */}
                  <div className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
                    <div>
                      <h6 className="font-medium">Billing and account</h6>
                      <p className="text-gray-600 text-sm">Transactional emails and account notifications</p>
                    </div>
                    <span className="text-gray-500 text-sm">Legally Obligated</span>
                  </div>
                </div>

                {/* Delete Account */}
                <div className="flex items-start p-4 bg-red-50 rounded-lg">
                  <div className="flex-1">
                    <h6 className="font-semibold text-red-700">Delete your account</h6>
                    <p className="text-red-600 text-sm">
                      Before deleting your account, please note that if you delete your account, Revest cannot recover it.
                    </p>
                  </div>
                  <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    Delete
                  </button>
                </div>
              </div>
            )}

            {/* Billing */}
            {activeTab === 'billing' && (
              <div className="space-y-8">
                {/* Payment Methods */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-bold">Payment Methods</h5>
                    <a href="#!" className="text-purple-600 hover:underline">Add Method</a>
                  </div>
                  {[
                    { img: 'visa.png', label: 'Visa ending in 1234', sub: 'Expires 1/2025', default: true },
                    { img: 'mastercard.png', label: 'Mastercard ending in 1234', sub: 'Expires 1/2025' },
                  ].map((pm, i) => (
                    <div key={i} className={`flex justify-between items-center p-4 bg-white rounded-lg shadow ${pm.default ? '' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <img
                          src={`/assets/images/${pm.img}`}
                          alt={pm.label}
                          className="h-10 w-10"
                        />
                        <div>
                          <h6 className="font-medium">{pm.label}</h6>
                          <p className="text-gray-600 text-sm">{pm.sub}</p>
                        </div>
                      </div>
                      {pm.default && (
                        <span className="text-purple-600 font-semibold">Default</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Invoices */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h5 className="text-lg font-bold mb-4">Invoices</h5>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">INVOICE ID</th>
                          <th className="px-4 py-2">AMOUNT</th>
                          <th className="px-4 py-2">DATE</th>
                          <th className="px-4 py-2">STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array(5).fill(0).map((_, i) => (
                          <tr key={i} className={i % 2 ? 'bg-gray-50' : ''}>
                            <td className="px-4 py-3">Invoice #123</td>
                            <td className="px-4 py-3">$500.00</td>
                            <td className="px-4 py-3">18.03.2022</td>
                            <td className="px-4 py-3">
                              <span className={i % 2 ? 'inline-block w-2 h-2 bg-green-500 rounded-full mr-2' : 'inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2'} />
                              {i % 2 ? 'Paid' : 'Processing'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {activeTab === 'security' && (
              <div className="space-y-8">
                {/* Two Factor */}
                <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow">
                  <div>
                    <h6 className="font-semibold">Two Factor Authentication</h6>
                    <p className="text-gray-600 text-sm">
                      Two-Factor Authentication (2FA) can be used to help protect your account
                    </p>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                    Enable
                  </button>
                </div>

                {/* Change Password */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <h5 className="text-lg font-bold mb-4">Change Password</h5>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="currentPass" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="currentPass"
                        required
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="newPass" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="newPass"
                        required
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPass" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirmPass"
                        required
                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition">
                      Update Password
                    </button>
                  </form>
                </div>

                {/* Additional Security */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <div>
                      <h6 className="font-medium">SMS recovery</h6>
                      <p className="text-gray-600 text-sm">Number ending with 1234</p>
                    </div>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
                      Disable SMS
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <div>
                      <h6 className="font-medium">Authenticator App</h6>
                      <p className="text-gray-600 text-sm">Google Authenticator</p>
                    </div>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
                      Configure
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <div>
                      <h6 className="font-medium">SSL Certificate</h6>
                      <p className="text-gray-600 text-sm">Secure Sockets Layer</p>
                    </div>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
                      Configure
                    </button>
                  </div>
                </div>

                {/* Your Devices */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-lg font-bold">Your devices</h5>
                    <a href="#!" className="text-purple-600 hover:underline">
                      Log out on all devices
                    </a>
                  </div>
                  {[
                    { icon: 'mobile.png', title: 'iPhone 13 Pro Max', desc: 'New York City · June 20 at 14:00' },
                    { icon: 'tablet.png', title: 'iPad Pro',         desc: 'New York City · June 20 at 14:00' },
                    { icon: 'desktop.png', title: 'iMac OSX',         desc: 'New York City · June 20 at 14:00' },
                  ].map((dev, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={`/assets/images/icons/${dev.icon}`}
                          alt={dev.title}
                          className="h-10 w-10"
                        />
                        <div>
                          <h6 className="font-medium">{dev.title}</h6>
                          <p className="text-gray-600 text-sm">{dev.desc}</p>
                        </div>
                      </div>
                      <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
                        Log Out
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
