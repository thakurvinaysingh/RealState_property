// src/pages/InvestmentPage.jsx
import React, { useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Chart from 'react-apexcharts'         

export default function InvestmentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
 // ↓↓↓ Add these chart configuration objects ↓↓↓
 const chartOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: '#64748B' } }
    },
    yaxis: {
      min: 70,
      max: 420,
      labels: {
        formatter: (val) => `$${val}`,
        style: { colors: '#64748B' }
      }
    },
    grid: {
      strokeDashArray: 4,
      borderColor: '#E5E7EB'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.6,
        opacityTo: 0.1
      }
    },
    colors: ['#34D399']
  }

  const chartSeries = [
    { name: 'Income', data: [380, 350, 330, 300, 320, 150, 200] }
  ]
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with mobile “hamburger” */}
      <DashboardHeader onToggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex flex-1 bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 xl:pl-100">
          {/* On mobile, show a collapse button if you’d like */}
          <div className="xl:hidden mb-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 bg-white rounded-md shadow"
            >
              <i className="fa-solid fa-bars-staggered text-gray-600"></i>
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="breadcrumb-dashboard mb-6">
            <h5 className="text-xl font-semibold">Investments</h5>
            <div className="flex items-center space-x-2 text-gray-600">
              <a href="/" className="hover:underline">Home</a>
              <i className="fa-solid fa-arrow-right-long"></i>
              <span>Investments</span>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Transactions table */}
            <div className="lg:col-span-8">
              <div className="investment-table bg-white rounded-2xl shadow p-6">
                <div className="intro mb-4">
                  <h5 className="text-lg font-bold">Transactions</h5>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Project</th>
                        <th className="px-4 py-2">Amount Invested</th>
                        <th className="px-4 py-2">Date Invested</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array(5).fill(0).map((_, i) => (
                        <tr key={i} className={`${i % 2 ? 'bg-gray-50' : ''}`}>
                          <td className="px-4 py-3 flex items-center space-x-3">
                            <img
                              src="/assets/images/table-img.png"
                              alt="Investment"
                              className="h-10 w-10 rounded"
                            />
                            <span>A19, Vilnius</span>
                          </td>
                          <td className="px-4 py-3">$500.00</td>
                          <td className="px-4 py-3">18.03.2022</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right: Sidebar widgets */}
            <div className="lg:col-span-4 space-y-6">
              {/* Statistics box */}
              <div className="investment-sidebar bg-white rounded-2xl shadow p-6 space-y-4">
                <div className="statistics">
                  <h5 className="text-lg font-bold mb-2">Statistics</h5>
                  <hr />
                  <div className="flex items-center space-x-4 mt-4">
                    <img
                      src="/assets/images/icons/wallet.png"
                      alt="Wallet"
                      className="h-10 w-10"
                    />
                    <div>
                      <h4 className="text-2xl font-semibold">€537,00</h4>
                      <p className="text-gray-600">Monthly Income</p>
                    </div>
                  </div>
                </div>

                <div className="explore flex items-center space-x-4">
                  <img
                    src="/assets/images/icons/explore.png"
                    alt="Explore"
                    className="h-12 w-12"
                  />
                  <div>
                    <h6 className="font-semibold mb-1">Explore More</h6>
                    <p className="text-gray-500 mb-3">Investment opportunities</p>
                    <a
                      href="/registration"
                      className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Investment Chart */}
          <div className="investment-single-box bg-white rounded-2xl shadow p-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-lg font-bold">Investment Chart</h5>
              <a href="#!" className="text-purple-600 hover:underline">
                Generate Report
              </a>
            </div>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={300}
            />
            {/* You can hook this up to ApexCharts / Chart.js as before */}
            <div id="investmentChartTwo" style={{ height: 300 }} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
