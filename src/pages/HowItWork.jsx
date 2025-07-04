// src/pages/HowItWorks.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
    {
      img: 'browse.png',
      title: 'Browse Properties',
      text:
        'Select a property that fits your goal from our huge variety of hand-picked properties.',
    },
    {
      img: 'invest.png',
      title: 'View Details & Invest',
      text:
        'View detailed metrics for that property like Rental Yield, etc. and invest like institutions.',
    },
    {
      img: 'earn.png',
      title: 'Earn and Track',
      text:
        'You have full visibility into the performance of your investment. Track your total current.',
    },
  ];
  
const HowItWorks = () => (
  <>
    <Header />

    {/* Banner */}
    <section className="relative h-[600px] overflow-visible">
      {/* Banner background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{ backgroundImage: "url('/assets/images/banner/banner-three-bg.png')" }}
      />

      {/* Title + Breadcrumb */}
      <div className="relative z-10 container mx-auto px-4 pt-24 text-indigo-900">
        <h1 className="text-5xl font-extrabold mb-2">How It Works</h1>
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-lg">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="select-none">→</li>
            <li>
              <a href="/pages" className="hover:underline">Pages</a>
            </li>
            <li className="select-none">→</li>
            <li className="font-semibold">How It Works</li>
          </ol>
        </nav>
      </div>

      {/* Overlapping video card */}
      <div className="absolute left-1/2 bottom-[-100px] w-11/12 max-w-4xl -translate-x-1/2 bg-indigo-100 rounded-2xl shadow-xl overflow-hidden z-20">
        <img
          src="/assets/images/video-illustration.png"
          alt="Video Illustration"
          className="w-full block"
        />
        <a
          href="https://www.youtube.com/watch?v=LCihLrSehCo"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-white rounded-full w-20 h-20 flex items-center justify-center 
                     text-3xl text-indigo-900 shadow-lg"
        >
          <i className="fa-solid fa-play" />
        </a>
      </div>
    </section>

    <section className="relative bg-white py-40 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-16 lg:space-y-0">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* icon + number */}
              <div className="relative">
                <div className="w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <img
                    src={`/assets/images/step/${step.img}`}
                    alt={step.title}
                    className="w-20 h-20"
                  />
                </div>
                <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3
                                bg-purple-600 text-white rounded-full w-10 h-10
                                flex items-center justify-center font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* arrow between steps */}
              {idx < steps.length - 1 && (
                <img
                  src="/assets/images/icons/arrow-step.svg"
                  alt=""
                  className="hidden lg:block absolute right-[-120px] top-1/2 transform -translate-y-1/2 w-24"
                />
              )}

              {/* title & text */}
              <h3 className="mt-8 text-2xl font-semibold text-blue-900">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-blue-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  {/* Community Section (Redesigned) */}
<section
  className="relative bg-no-repeat bg-center bg-cover py-20"
  style={{ backgroundImage: "url('/assets/images/community-bg.png')" }}
>
  <div className="container mx-auto px-4 relative z-10 text-center">
    {/* Header */}
    <div className="mb-12 max-w-2xl mx-auto">
      <h5 className="text-sm font-semibold text-purple-700 mb-2">Smart way to raise money</h5>
      <h2 className="text-4xl font-extrabold text-blue-900 leading-tight mb-4">
        Join Thousands of Investors
      </h2>
      <p className="text-gray-700">
        Individual and institutional investors invest $10–$100,000 per deal on Revest.
      </p>
    </div>

    {/* Main Community Card */}
    <div className="relative bg-white rounded-2xl shadow-xl p-10 overflow-hidden max-w-6xl mx-auto">
      {/* Floating Avatars */}
      <div className="relative w-full h-[400px]">
        {Array.from({ length: 22 }).map((_, i) => (
          <img
            key={i}
            src={`/assets/images/community/${i + 1}.png`}
            alt="community logo"
            className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full object-cover opacity-80"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
        {/* Center Button */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <a
            href="/registration"
            className="bg-[#5C27FE] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Become an Investor
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


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

    <Footer />
  </>
);

export default HowItWorks;
