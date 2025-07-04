// src/pages/CareerPage.jsx
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const JOBS = [
  {
    icon: 'sales.png',
    title: 'Director of Sales',
    groups: ['all', 'sales'],
    tags: ['Sales', 'Remote', 'Full Time'],
    link: '/career-details',
  },
  {
    icon: 'business.png',
    title: 'Business Development Representative',
    groups: ['all', 'engineering'],
    tags: ['Business', 'Remote', 'Full Time'],
    link: '/career-details',
  },
  {
    icon: 'development.png',
    title: 'Business Development Representative',
    groups: ['all', 'design'],
    tags: ['Business', 'Remote', 'Full Time'],
    link: '/career-details',
  },
  {
    icon: 'marketing.png',
    title: 'Product Marketing Lead',
    groups: ['all', 'marketing'],
    tags: ['Marketing', 'Remote', 'Full Time'],
    link: '/career-details',
  },
  // …you can add more here…
]

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'sales', label: 'Sales' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'design', label: 'Design' },
]

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <>
      <Header secondary />

      {/* Banner */}
      <section
        className="banner banner--secondary clear__top bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/images/banner/banner-bg.png')" }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="banner__area">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Careers</h1>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-gray-700">
                <li>
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li>→</li>
                <li>Pages</li>
                <li>→</li>
                <li className="font-semibold">Career</li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          src="/assets/images/banner/career-banner-illustration.png"
          alt="Career"
          className="absolute bottom-0 right-0 w-1/3 hidden lg:block"
        />
      </section>

      {/* Intro Gallery */}
      <section className="image__gallery image__gallery--two section__space py-16 bg-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h5 className="text-purple-600 font-semibold">Join Our Team Today</h5>
          <h2 className="text-3xl font-extrabold">Join a Team of Passionate Tinkerers</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We wanna hear from you! Revest is a growing startup and we&apos;re always on the lookout
            for kindred spirits.
          </p>
        </div>
        <div className="image__gallery__area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto px-4 mt-8">
          {['one', 'two', 'three', 'one', 'two', 'three'].map((img, i) => (
            <div key={i} className="gallery__single overflow-hidden rounded-xl shadow-lg">
              <a href={`/assets/images/${img}.png`}>
                <img
                  src={`/assets/images/${img}.png`}
                  alt="Team"
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="open__tab__position section__space__bottom py-16 bg-gray-50">
        <div className="container mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-center">Open Positions</h2>

          {/* Tabs */}
          <div className="flex justify-center space-x-4">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full transition ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 shadow'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="open__position__tab__wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOBS.filter(job => job.groups.includes(activeTab)).map((job, idx) => (
              <div
                key={idx}
                className="job__single open__job__single bg-white rounded-2xl shadow-lg flex items-center justify-between p-6"
              >
                <div className="open__job__inner flex items-center space-x-4">
                  <img
                    src={`/assets/images/icons/${job.icon}`}
                    alt={job.title}
                    className="h-12 w-12"
                  />
                  <div className="open__job__info">
                    <h5 className="text-lg font-semibold">
                      <a href={job.link} className="hover:underline">{job.title}</a>
                    </h5>
                    <ul className="flex space-x-4 text-gray-600 mt-1">
                      {job.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href={job.link} className="text-2xl text-blue-600 hover:text-blue-700">
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
