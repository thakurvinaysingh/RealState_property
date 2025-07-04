import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedProperties from '../components/FeaturedProperties'
import AllProperties from '../components/AllProperties'

const Home1 = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-50 via-white to-white overflow-hidden">
        {/* decorative skew */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-indigo-100 transform -skew-x-12 origin-top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div>
              <h5 className="text-purple-600 font-semibold mb-2">
                A smarter, better way to invest
              </h5>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-4">
                Real Estate <br />
                Investment For <span className="text-purple-600">Everyone</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Buy shares of rental properties, earn monthly income, and watch your money grow
              </p>
              <div className="flex gap-4">
                <a
                  href="/properties"
                  className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
                >
                  Start Exploring
                </a>
                <a
                  href="/business-loan"
                  className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition"
                >
                  Get Funding
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/images/hero/hero-illustration.png"
                alt="Hero Illustration"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </section>
{/* Property Filter */}
<div className="container mx-auto px-4 -mt-12 relative z-20">
  <div className="bg-white rounded-2xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
    {/* 1) Search input */}
    <div className="relative md:col-span-2">
      <input
        type="text"
        placeholder="Search for properties"
        className="w-full h-14 pl-12 pr-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <i className="fas fa-search"></i>
      </span>
    </div>

    {/* 2) Search button */}
    <button className="w-full h-14 bg-purple-600 text-white font-medium rounded-xl shadow hover:bg-purple-700 transition">
      Search
    </button>

    {/* 3) Location dropdown */}
    <div className="relative">
      <select className="w-full h-14 appearance-none pl-12 pr-6 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300">
        <option value="">Location</option>
        <option>Los Angeles</option>
        <option>San Francisco, CA</option>
        <option>The Weldon</option>
        <option>San Diego</option>
      </select>
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <i className="fas fa-map-marker-alt"></i>
      </span>
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <i className="fas fa-chevron-down"></i>
      </span>
    </div>

    {/* 4) Property dropdown */}
    <div className="relative">
      <select className="w-full h-14 appearance-none pl-12 pr-6 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300">
        <option value="">Property</option>
        <option>Commercial</option>
        <option>Residential</option>
      </select>
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <i className="fas fa-home"></i>
      </span>
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <i className="fas fa-chevron-down"></i>
      </span>
    </div>
  </div>
</div>


      {/* Featured & All Properties */}
      <div className="container mx-auto px-4 pt-16">
        <FeaturedProperties />
        <AllProperties />
      </div>

      {/* Profit Overview */}
      <section className="pt-16 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h5 className="text-purple-600 font-semibold mb-2">
              Built to help smart investors invest smarter
            </h5>
            <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
              We handle the heavy lifting so you<br/>
              can sit back, relax, and profit.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We make institutional quality real estate accessible to investors, in a simple
              and transparent way.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Passive Income",
                img: "/assets/images/overview/passive-income.png",
                bg: "bg-green-50",
                text: "Earn rental income and receive deposits quarterly",
              },
              {
                title: "Secure & Cost-efficient",
                img: "/assets/images/overview/secure.png",
                bg: "bg-purple-100",
                text:
                  "Digital security is legally compliant and tangible for qualified investors",
              },
              {
                title: "Transparency",
                img: "/assets/images/overview/transparency.png",
                bg: "bg-rose-50",
                text: "Easily consult the full documentation for each property.",
              },
              {
                title: "Support",
                img: "/assets/images/overview/support.png",
                bg: "bg-teal-50",
                text: "Earn rental income and receive deposits quarterly",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6"
              >
                <div className={`flex-shrink-0 p-4 ${item.bg} rounded-full`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Start Step Section */}
<section className="relative py-20 bg-indigo-50 overflow-hidden">
  {/* left gradient accent */}
  <div className="hidden lg:block absolute inset-y-0 left-0 w-48 bg-gradient-to-b from-indigo-100 to-transparent" />

  <div className="container mx-auto px-4 relative z-10 text-center">
    <h5 className="text-purple-600 font-semibold mb-2">
      We’re changing the way you invest.
    </h5>
    <h2 className="text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
      It’s Easy to Get Started.
    </h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-12">
      Signing up with Revest is simple and only takes a few minutes. We can
      automatically connect with more than 3,500 banks, so no complicated
      paperwork is required to fund your account.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* STEP 1 */}
      <div className="relative flex flex-col items-center mx-6">
        <div className="w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center">
          <img
            src="/assets/images/step/browse.png"
            alt="Browse Properties"
            className="w-24 h-24"
          />
        </div>
        {/* badge: shifted right of center */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6
                     bg-purple-600 text-white w-12 h-12 rounded-full
                     flex items-center justify-center font-bold text-lg"
        >
          01
        </div>
        <h4 className="mt-6 text-xl font-semibold text-blue-900">
          Browse Properties
        </h4>
        <p className="mt-2 text-gray-700 max-w-xs">
          Select a property that fits your goal from our huge variety of
          hand-picked properties.
        </p>
      </div>

      {/* arrow between 1 & 2 */}
      <div className="hidden md:flex items-center mx-2">
        <i className="fas fa-long-arrow-alt-right text-blue-200 text-4xl"></i>
      </div>

      {/* STEP 2 */}
      <div className="relative flex flex-col items-center mx-6">
        <div className="w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center">
          <img
            src="/assets/images/step/invest.png"
            alt="View Details & Invest"
            className="w-24 h-24"
          />
        </div>
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6
                     bg-purple-600 text-white w-12 h-12 rounded-full
                     flex items-center justify-center font-bold text-lg"
        >
          02
        </div>
        <h4 className="mt-6 text-xl font-semibold text-blue-900">
          View Details & Invest
        </h4>
        <p className="mt-2 text-gray-700 max-w-xs">
          View detailed metrics for that property like Rental Yield, etc.
          and invest like institutions.
        </p>
      </div>

      {/* arrow between 2 & 3 */}
      <div className="hidden md:flex items-center mx-2">
        <i className="fas fa-long-arrow-alt-right text-blue-200 text-4xl"></i>
      </div>

      {/* STEP 3 */}
      <div className="relative flex flex-col items-center mx-6">
        <div className="w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center">
          <img
            src="/assets/images/step/earn.png"
            alt="Earn and Track"
            className="w-24 h-24"
          />
        </div>
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6
                     bg-purple-600 text-white w-12 h-12 rounded-full
                     flex items-center justify-center font-bold text-lg"
        >
          03
        </div>
        <h4 className="mt-6 text-xl font-semibold text-blue-900">
          Earn and Track
        </h4>
        <p className="mt-2 text-gray-700 max-w-xs">
          You have full visibility into the performance of your investment.
          Track your total current.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Video Popup Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block mx-auto">
            <img
              src="/assets/images/video-illustration.png"
              alt="Video Illustration"
              className="rounded-xl shadow-2xl"
            />
            <a
              href="https://www.youtube.com/watch?v=LCihLrSehCo"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition">
                <i className="fas fa-play text-blue-900 text-3xl"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Numbers Section */}
      <section className="py-20 bg-gradient-to-l from-white to-indigo-50 overflow-hidden">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-b from-indigo-100 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div>
              <h5 className="text-purple-600 font-semibold mb-2">
                With Revest anyone can invest!
              </h5>
              <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
                Numbers Said More Than Words
              </h2>
              <p className="text-gray-700 mb-6">
                Our low minimums give you the flexibility to invest the right amount, at the right time,
                to meet your goals.
              </p>
              <a
                href="/properties"
                className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
              >
                Start Exploring
              </a>
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  value: "3000+",
                  label: "Investors Using Platform",
                  img: "/assets/images/platforms.png",
                },
                {
                  value: "18%",
                  label: "Returns upto",
                  img: "/assets/images/returns.png",
                },
                {
                  value: "45",
                  label: "Years Experience",
                  img: "/assets/images/experience.png",
                },
                {
                  value: "9%",
                  label: "Something Else",
                  img: "/assets/images/experience.png",
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="bg-white rounded-2xl shadow-2xl p-8 text-center"
                >
                  <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <img src={stat.img} alt={stat.label} className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-extrabold text-blue-900">{stat.value}</h3>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
<section
  className="relative py-20 overflow-hidden bg-indigo-50"
>
  {/* dot-map background */}
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-cover"
    style={{
      backgroundImage: "url('/assets/images/testimonial/dot-map.png')"
    }}
  />
  <div className="relative z-10 container mx-auto px-4 text-center">
    <h5 className="text-purple-600 font-semibold mb-2">Investors Trust Us</h5>
    <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
      Trusted by Over 40,000 Worldwide Customers since 2022
    </h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-12">
      We divide each property into shares so anyone can get started. Kindly check out what our investors say about Revest.
    </p>

    <div className="relative max-w-3xl mx-auto">
      {/* Left arrow */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-3 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition">
        <i className="fas fa-arrow-left"></i>
      </button>

      {/* Slide */}
      <div className="bg-white rounded-2xl shadow-2xl p-12">
        {/* Quote */}
        <blockquote className="text-xl italic text-gray-800 leading-relaxed mb-8">
          “Very trustworthy and clearly platform to invest in real estate. Safe investment with monthly payouts. Really recommended!”
        </blockquote>

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full ring-4 ring-purple-100 overflow-hidden mb-4">
            <img
              src="/assets/images/testimonial/allan.jpg"
              alt="Allan Murphy"
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-semibold text-blue-900">Allan Murphy</h4>
          <p className="text-purple-600">United States</p>
        </div>
      </div>

      {/* Right arrow */}
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-3 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</section>


{/* Market / “You Invest. Revest Does the Rest.” Section */}
<section className="relative py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {/* Image slider (single slide shown) */}
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src="/assets/images/market-illustration.png"
            alt="Market Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        {/* pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
        </div>
      </div>

      {/* Text */}
      <div className="space-y-6 text-center lg:text-left">
        <h5 className="text-purple-600 font-semibold">
          Real exposure to the real estate market
        </h5>
        <h2 className="text-5xl font-extrabold text-blue-900 leading-tight">
          You Invest. Revest Does the Rest
        </h2>
        <p className="text-gray-700">
          Transparent real estate investing through Revest. Join us and experience a smarter, better way to invest in real estate.
        </p>
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <a
            href="/properties"
            className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Start Exploring
          </a>
          {/* curved arrow graphic */}
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 64 64"
          >
            <path
              d="M10 32 C20 12, 44 12, 54 32"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 28 L54 32 L50 36"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  )
}

export default Home1

