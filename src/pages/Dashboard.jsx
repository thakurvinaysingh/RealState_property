import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Chart from 'react-apexcharts'; // or react-chartjs-2, whichever you prefer
import { VscThreeBars } from "react-icons/vsc";
export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [balanceMonth, setBalanceMonth] = useState('last');

  // Example chart data
  const chartOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: 'smooth' },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yaxis: { min: 70, max: 420 },
    colors: ['#34D399'], // green
  };
  const chartSeries = [{ name: 'Income', data: [350, 300, 280, 330, 210, 140, 190] }];

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader onToggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex flex-1 bg-gray-50">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-y-auto p-6 xl:pl-100">
          {/* Collapse sidebar button on mobile */}
          <div className="xl:hidden mb-6">
            <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white rounded-md shadow">
              {/* <i className="fa-solid fa-bars-staggered text-gray-600"></i> */}
              <VscThreeBars />
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Left Top: Balance */}
            <div className="bg-purple-600 text-white rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-bold">€537,00</h4>
                  <p className="text-sm">Monthly Income</p>
                </div>
                <select
                  value={balanceMonth}
                  onChange={(e) => setBalanceMonth(e.target.value)}
                  className="bg-purple-700 px-2 py-1 rounded"
                >
                  <option value="last">Last Month</option>
                  <option>January</option>
                  <option>February</option>
                  {/* … */}
                </select>
              </div>
              <hr className="border-purple-400" />
              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Amount Invested</p>
                  <h6 className="flex items-center">
                    <img src="/assets/images/icons/invested.png" alt="" className="h-4 w-4 mr-1" />
                    €108.934,00
                  </h6>
                </div>
                <div>
                  <p className="text-sm">Total Earnings</p>
                  <h6 className="flex items-center">
                    <img src="/assets/images/icons/earned.png" alt="" className="h-4 w-4 mr-1" />
                    €12.606,00
                  </h6>
                </div>
              </div>
            </div>

            {/* Right Top: Bank / Credit Card Tabs */}
            <div className="bg-white rounded-2xl p-6 shadow space-y-4">
              <div className="flex space-x-4 border-b pb-2">
                {['Bank Account', 'Credit Card'].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`
                      flex-1 text-center py-2
                      ${idx === 1
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-600'}
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex space-x-4 items-center">
                    <button className="p-2 border-2 border-gray-200 rounded-lg">
                      <i className="fa-solid fa-plus text-gray-400"></i>
                    </button>
                    <div className="flex-1 space-y-1">
                      <p className="text-gray-500 text-xs">Card No.</p>
                      <p className="font-medium">**** **** **** 4567</p>
                      <div className="flex justify-between text-gray-500 text-xs">
                        <span>Expiry: 09/24</span>
                        <span>USD</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Left Bottom: Chart & My Investments */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h5 className="text-lg font-bold mb-4">Investment Chart</h5>
                <Chart
                  options={chartOptions}
                  series={chartSeries}
                  type="area"
                  height={200}
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-lg font-bold">My Investments</h5>
                  <a href="/investment" className="text-purple-600 hover:underline">
                    Show All <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                <div>
                  <img
                    src="/assets/images/los-two.png"
                    alt="Los Angeles"
                    className="rounded-lg w-full mb-4"
                  />
                  <h4 className="text-lg font-semibold">Los Angeles</h4>
                  <p className="text-gray-500 text-sm flex items-center">
                    <i className="fa-solid fa-location-dot mr-1"></i>
                    8706 Herrick Ave, Los Angeles
                  </p>
                </div>
              </div>
            </div>

            {/* Right Bottom: Last Income & New Investments */}
            <div className="space-y-6">
              {/* Last Income */}
              <div className="bg-white rounded-2xl p-6 shadow space-y-4">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-bold">Last Income</h5>
                  <a href="/withdraw" className="text-purple-600 hover:underline">
                    Show All <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/assets/images/income.png"
                        alt="Income"
                        className="h-10 w-10 rounded-lg"
                      />
                      <div>
                        <h6 className="font-medium">
                          Gerolstein | Am Rasbach 1-17
                        </h6>
                        <p className="text-gray-500 text-sm">18.03.2022</p>
                      </div>
                    </div>
                    <h6 className="font-semibold">€302,50</h6>
                  </div>
                ))}
              </div>

              {/* New Investments */}
              <div className="bg-white rounded-2xl p-6 shadow space-y-4">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-bold">New Investments</h5>
                  <a href="/properties" className="text-purple-600 hover:underline">
                    Show All <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <img
                      src="/assets/images/san-two.png"
                      alt="San Francisco"
                      className="h-20 w-28 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="font-semibold">Los Angeles</h6>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden my-2">
                        <div
                          className="h-full bg-green-400"
                          style={{ width: '54.73%' }}
                        />
                      </div>
                      <p className="text-gray-500 text-sm">
                        119 Investors | $4,94,196 (54.73%)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
