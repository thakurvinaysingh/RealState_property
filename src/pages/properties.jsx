// src/pages/PropertiesPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PROPERTY_DATA = [
  {
    id: 1,
    title: 'Los Angeles',
    address: '8706 Herrick Ave, Los Angeles',
    image: '/assets/images/property/los.png',
    investors: 159,
    raised: '1,94,196',
    goal: '3,00,000',
    percent: 64.73,
    annualReturn: '7.5% + 2%',
    term: '36 Months',
    type: 'Commercial',
    distribution: 'Monthly',
    security: '1st-Rank Mortgage',
  },
  {
    id: 2,
    title: 'San Francisco, CA',
    address: '3335 21 St, San Francisco',
    image: '/assets/images/property/lily.png',
    investors: 120,
    raised: '1,50,000',
    goal: '2,00,000',
    percent: 75,
    annualReturn: '8% + 1.5%',
    term: '24 Months',
    type: 'Residential',
    distribution: 'Quarterly',
    security: '2nd-Rank Mortgage',
  },
  {
    id: 3,
    title: 'San Diego',
    address: '356 La Jolla, San Diego',
    image: '/assets/images/property/san.png',
    investors: 200,
    raised: '2,50,000',
    goal: '4,00,000',
    percent: 62.5,
    annualReturn: '7% + 3%',
    term: '36 Months',
    type: 'Commercial',
    distribution: 'Monthly',
    security: '1st-Rank Mortgage',
  },
  // …you can keep adding more here…
];

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ==== banner section ==== */}
      <section
        className="banner__alt bg__img"
        style={{ backgroundImage: "url('/assets/images/banner/banner-two-bg.png')" }}
      >
        <div className="container mx-auto px-4">
          <div className="banner__alt__area text-center py-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">Browse Properties</h1>
          </div>
        </div>
      </section>

      {/* ==== filter section ==== */}
      <div className="property__filter py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[250px]">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for properties"
                  className="w-full border border-gray-300 rounded-full py-3 pl-4 pr-10 focus:outline-none"
                />
                <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              </div>
            </div>
            <div className="w-48">
              <select className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none">
                <option>Select Location</option>
                <option>Los Angeles</option>
                <option>San Francisco, CA</option>
                <option>San Diego</option>
              </select>
            </div>
            <div className="w-48">
              <select className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none">
                <option>Property Type</option>
                <option>Commercial</option>
                <option>Residential</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ==== properties grid ==== */}
      <section className="properties__filter flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h6 className="text-lg">
              Showing <span className="font-bold">{PROPERTY_DATA.length}</span> properties
            </h6>
            <div className="flex items-center space-x-2">
              <select className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none">
                <option>Sort By</option>
                <option>Date</option>
                <option>Price</option>
              </select>
              <button className="grid__btn p-2 bg-white rounded-full shadow">
                <i className="fa-solid fa-grip"></i>
              </button>
              <button className="grid__btn p-2 text-gray-500">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {PROPERTY_DATA.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* image */}
                <a href={`/properties/${p.id}`} className="block overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform"
                  />
                </a>

                {/* content */}
                <div className="p-6 space-y-4">
                  {/* title & countdown */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">{p.title}</h4>
                      <p className="text-gray-600 text-sm flex items-center">
                        <i className="fa-solid fa-location-dot mr-1"></i> {p.address}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs">Left to invest</p>
                      {/* placeholder for countdown */}
                      <div className="text-lg font-mono">00:00:00</div>
                    </div>
                  </div>

                  {/* progress bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-2"
                        style={{ width: `${p.percent}%` }}
                      />
                    </div>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">{p.investors} Investors</span> &middot;{' '}
                      <span className="font-semibold">
                        <i className="fa-solid fa-dollar-sign"></i> {p.raised}
                      </span>{' '}
                      <span className="text-gray-500">({p.percent}%)</span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <i className="fa-solid fa-dollar-sign"></i> {p.goal} Goal
                    </p>
                  </div>

                  {/* specs */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p className="text-gray-500">Annual Return</p>
                      <h6>{p.annualReturn}</h6>
                    </div>
                    <div>
                      <p className="text-gray-500">Maximum Term</p>
                      <h6>{p.term}</h6>
                    </div>
                    <div>
                      <p className="text-gray-500">Property Type</p>
                      <h6>{p.type}</h6>
                    </div>
                    <div>
                      <p className="text-gray-500">Distribution</p>
                      <h6>{p.distribution}</h6>
                    </div>
                  </div>

                  {/* footer actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src="/assets/images/home.png" alt="Security" className="h-6 w-6" />
                      <div>
                        <p className="text-gray-500 text-xs">Security</p>
                        <h6 className="text-sm">{p.security}</h6>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <a
                        href="/registration"
                        className="button button--effect text-sm py-2 px-4"
                      >
                        Invest Now
                      </a>
                      <a
                        href={`/properties/${p.id}`}
                        className="button button--secondary text-sm py-2 px-4"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* load more */}
          <div className="text-center mt-12">
            <button className="button button--effect px-8 py-3">
              Load More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
