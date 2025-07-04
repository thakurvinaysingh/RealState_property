// src/pages/AboutPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ==== banner section start ==== */}
     <section
       className="relative bg-cover bg-center pt-32 pb-36"
       style={{ backgroundImage: "url('/assets/images/banner/banner-bg.png')" }}
     >
        <div className="container mx-auto px-4">
          <div className="pt-8">
            <h1 className="text-6xl font-extrabold text-blue-900 mb-2">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="flex items-center space-x-2 text-gray-800">
               <li><a href="/" className="hover:underline">Home</a></li>
                <li>→</li>
                <li>Pages</li>
                <li>→</li>
                <li className="font-semibold">About Us</li>
            </ol>
           </nav>
         </div>
        </div>
      </section>
      {/* ==== #banner section end ==== */}

      {/* ==== about overview section start ==== */}
      <section className="about__overview py-20 bg-white">
      
      <div className="-mt-32 lg:-mt-40 pb-16">
    <div className="container mx-auto px-4">
      <div className="relative">
        <img
          src="/assets/images/about-video-illustration.png"
          alt="Video Illustration"
          className="w-full rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://www.youtube.com/watch?v=LCihLrSehCo"
            target="_blank"
            rel="noreferrer"
            className="text-6xl text-white"
          >
            <i className="fa-solid fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
        <div className="container mx-auto px-4">
          <div className="about__overview__area text-center max-w-3xl mx-auto mb-12">
            <h5 className="text-purple-600 font-semibold mb-2">Investing in real estate is now easier than buying stocks</h5>
            <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
              Make property Investing simple, accessible and transparent
            </h2>
            <p className="text-gray-700">
              Our mission is to empower the world to build wealth through modern real estate investing.
            </p>
          </div>

          <div className="portfolio__overview grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: '/assets/images/icons/investors.png', value: '6738', label: 'Investors' },
              { img: '/assets/images/icons/completed.png', value: '61316', label: 'Investments Completed' },
              { img: '/assets/images/icons/annual-return.png', value: '10.36%', label: 'Average Annual Return' },
            ].map(({ img, value, label }) => (
              <div key={label} className="portfolio__overview__single bg-white rounded-2xl shadow-lg p-6 text-center">
                <img src={img} alt={label} className="mx-auto mb-4" />
                <h2 className="text-4xl font-extrabold text-blue-900 mb-1">{value}</h2>
                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==== #about overview section end ==== */}

      {/* ==== image gallery section start ==== */}
      <div className="image__gallery section__space bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="image__gallery__area grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['one.png','two.png','three.png','one.png','two.png','three.png'].map((f, i) => (
              <div key={i} className="gallery__single overflow-hidden rounded-xl shadow-lg">
                <a href={`/assets/images/${f}`}>
                  <img
                    src={`/assets/images/${f}`}
                    alt="Project Image"
                    className="w-full h-full object-cover transform hover:scale-105 transition"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ==== #image gallery section end ==== */}

      {/* ==== team section start ==== */}
      <section className="team section__space__bottom py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h5 className="text-purple-600 font-semibold mb-2">Meet Our Incredible Team</h5>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Built by a Diverse Team With Deep Expertise in Investing
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We're on a mission to build a better financial system by empowering the individual.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: 'paul.png', name: 'Paul Smith', role: 'Founder & CEO' },
            { img: 'ryan.png', name: 'Ryan Jackson', role: 'Head of Business Operations' },
            { img: 'rosen.png', name: 'Brittany Rosen', role: 'VP, Finance and Strategy' },
            { img: 'robert.png', name: 'Robert Henriks', role: 'Senior Developer' },
          ].map(({ img, name, role }) => (
            <div key={name} className="team__single bg-white rounded-2xl shadow-lg p-6">
              <div className="team__thumb relative mb-4">
                <img
                  src={`/assets/images/team/${img}`}
                  alt={name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <a
                  href="#0"
                  className="absolute top-2 right-2 text-white text-xl bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <h5 className="text-xl font-semibold text-blue-900 mb-1">{name}</h5>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ==== #team section end ==== */}

      {/* ==== market section start ==== */}
      <section className="market market--two market--three section__space__bottom py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="market__area market__area--two section__space bg__img rounded-2xl overflow-hidden relative"
            data-background="/assets/images/light-two.png"
          >
            <div className="row lg:flex lg:items-center">
              <div className="col-lg-6 p-8">
                <h5 className="text-purple-600 font-semibold mb-2">
                  Real exposure to the real estate market
                </h5>
                <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
                  You Invest. Revest Does the Rest
                </h2>
                <p className="text-gray-700 mb-6">
                  Transparent Real Estate Investing Through Revest. Join us and experience a smarter,
                  better way to invest in real estate
                </p>
                <a href="/properties" className="button button--effect mr-4">
                  Start Exploring
                </a>
                <img
                  src="/assets/images/arrow.png"
                  alt="Go to"
                  className="inline-block ml-2 align-middle"
                />
              </div>
              <img
                src="/assets/images/market-two-illustration.png"
                alt="Explore the Market"
                className="hidden lg:block absolute top-0 right-0 h-full"
              />
            </div>
          </div>

          <div className="market__features grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { img: 'gain.png', title: 'Gain Instant', text: 'Revest performs deep due diligence on sponsors, giving investors peace of mind.' },
              { img: 'noticed.png', title: 'Get Noticed', text: 'REVEST VERIFIED sponsor profiles are available to accredited real estate investment investors.' },
              { img: 'focus.png', title: 'Focus on Deals', text: 'Spend less time researching and dialing and more time doing what you love.' },
            ].map(({ img, title, text }) => (
              <div key={title} className="market__features__single bg-white rounded-2xl shadow-lg p-6 text-center">
                <img src={`/assets/images/icons/${img}`} alt={title} className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-blue-900 mb-2">{title}</h4>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==== #market section end ==== */}

      {/* ==== open job section start ==== */}
      <section className="open__job section__space py-20 bg-white">
        <div className="container mx-auto px-8 text-center mb-8">
          <h2 className="text-4xl font-extrabold text-blue-900">Join Us</h2>
        </div>
        <div className="container mx-auto px-4 space-y-6">
          {[
            { icon: 'sales.png', title: 'Director of Sales', tags: ['Sales','Remote','Full Time'] },
            { icon: 'marketing.png', title: 'Product Marketing Lead', tags: ['Marketing','Remote','Full Time'] },
            { icon: 'business.png', title: 'Business Development Representative', tags: ['Business','Remote','Full Time'] },
            { icon: 'development.png', title: 'Business Development Representative', tags: ['Business','Remote','Full Time'] },
          ].map(({ icon, title, tags }) => (  
            <div key={title} className="job__single flex items-center justify-between bg-white rounded-2xl shadow-lg p-6">
              <div className="open__job__inner flex items-center space-x-4">
                <img
                  src={`/assets/images/icons/${icon}`}
                  alt={title}
                  className="h-12 w-12"
                />
                <div>
                  <h5 className="text-lg font-semibold">
                    <a href="/career-details">{title}</a>
                  </h5>
                  <ul className="flex space-x-4 text-gray-600 mt-1">
                    {tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </div>
              <a href="/career-details" className="text-2xl text-blue-600 hover:text-blue-700">
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </div>
          ))}

          <div className="text-center mt-8">
            <a href="/career" className="button button--effect">
              See all open roles <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
        </div>
      </section>
      {/* ==== #open job section end ==== */}

      <Footer />
    </>
  )
}
