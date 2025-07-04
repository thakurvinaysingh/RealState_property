// src/pages/PropertyDetailsPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PropertyDetailsPage() {
  const { id } = useParams()
  // TODO: fetch your property by `id` here

  return (
    <>
      {/* if your Header supports a “secondary” style, pass a prop */}
      <Header secondary />

      {/* banner */}
      <div
        className="property__details__banner bg-cover bg-center clear__top h-64"
        style={{ backgroundImage: "url('/assets/images/banner/property-details-banner.png')" }}
      />

      {/* details area */}
      <section className="p__details faq section__space__bottom py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* left column */}
            <div className="lg:col-span-7 space-y-8">
              {/* browse gallery */}
              <a
                href="#gallery"
                className="button button--effect button--secondary inline-flex items-center"
              >
                <i className="fa-solid fa-images mr-2" /> Browse Gallery
              </a>

              {/* intro */}
              <div className="intro">
                <h3>Los Angeles</h3>
                <p className="flex items-center text-gray-600">
                  <i className="fa-solid fa-location-dot mr-1" /> 8706 Herrick Ave, Los Angeles
                </p>
              </div>

              {/* project description */}
              <div className="group__one">
                <h4>Project Description</h4>
                <p>
                  The “Revest“ team is introducing a new buy to let investment opportunity: A19,
                  Vilnius I. The investment offer consists of administrative premises, which are
                  currently being converted into studio apartments/lofts. In this way, the aim is to
                  increase the rental income of this real estate project.
                </p>
              </div>

              {/* reasons to invest */}
              <div className="group__two">
                <h5>Reasons to invest in the project A19, Vilnius:</h5>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {[
                    'Lofts in an attractive area - in the center of Vilnius;',
                    'Fixed, attractive annual rental income;',
                    'The fixed interest is indexed to inflation;',
                    'Variable capital gains;',
                    'Appraised by an independent valuer at 347 000 EUR;',
                    'The project owner is an experienced real estate administrator.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <img
                        src="/assets/images/check.png"
                        alt="Check"
                        className="h-5 w-5 mr-2 mt-1"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* financial terms */}
              <div className="terms space-y-6">
                <h5>Financial terms of the investment:</h5>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: 'loan.png', label: 'Maximum loan term', value: '36 Months' },
                    { icon: 'charge.png', label: 'Security', value: '1st charge Mortgage' },
                    { icon: 'project.png', label: 'Annual Return', value: '7%' },
                  ].map((t, i) => (
                    <div key={i} className="terms__single text-center">
                      <img
                        src={`/assets/images/icons/${t.icon}`}
                        alt={t.label}
                        className="mx-auto mb-2 h-10"
                      />
                      <p className="text-gray-600">{t.label}</p>
                      <h5 className="mt-1">{t.value}</h5>
                    </div>
                  ))}
                </div>
              </div>

              {/* tiered return */}
              <div className="group__two">
                <h5>When investing:</h5>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {[
                    'Up to 4999 € - the annual return is 7%.',
                    '5000 € – 14999 € - the annual return is 7.1%.',
                    '15000 € – 29999 € - the annual return is 7.2%.',
                    '30000 € – 49999 € - the annual return is 7.35%.',
                    '50000 € and more - the annual return is 7.5%.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <img
                        src="/assets/images/check.png"
                        alt="Check"
                        className="h-5 w-5 mr-2 mt-1"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* capital growth split */}
              <div className="terms space-y-6">
                <h5>The capital growth distribution:</h5>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: 'investor.png', label: 'Investors', value: '40% - 60%' },
                    { icon: 'project.png', label: 'Project', value: '40%' },
                    { icon: 'revest.png', label: 'Revest', value: 'Up to 20%' },
                  ].map((t, i) => (
                    <div key={i} className="terms__single text-center">
                      <img
                        src={`/assets/images/icons/${t.icon}`}
                        alt={t.label}
                        className="mx-auto mb-2 h-10"
                      />
                      <p className="text-gray-600">{t.label}</p>
                      <h5 className="mt-1">{t.value}</h5>
                    </div>
                  ))}
                </div>
              </div>

              {/* owner */}
              <div className="owner flex items-start space-x-4">
                <img
                  src="/assets/images/owner.png"
                  alt="Owner"
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <h5>The project owner (borrower)</h5>
                  <p className="text-gray-700">
                    MB „Rego Properties“ is a company serving as a special vehicle for revest
                    investments. The CEO – Andrius Rimdeika – is a former investment banker who worked
                    at Morgan Stanley and Prime Investment.
                  </p>
                </div>
              </div>

              {/* FAQ accordion (you can wire up collapse behavior later) */}
              <div className="faq__group space-y-4">
                <h5 className="atr">Frequently asked questions</h5>
                <div className="accordion" id="accordionExampleFund">
                  {[
                    {
                      question: 'What is Revest?',
                      answer:
                        'Revest is a platform that … Lorem Ipsum text here …',
                      id: 'FundOne',
                      expanded: true,
                    },
                    {
                      question: 'What are the benefits of investing via Revest?',
                      answer:
                        'By investing through Revest, you get … Lorem Ipsum text here …',
                      id: 'FundTwo',
                      expanded: false,
                    },
                    {
                      question: 'What makes Revest different?',
                      answer:
                        'Revest differs because … Lorem Ipsum text here …',
                      id: 'FundThree',
                      expanded: false,
                    },
                  ].map(({ question, answer, id: qid, expanded }) => (
                    <div key={qid} className="accordion-item">
                      <h5 className="accordion-header" id={`heading${qid}`}>
                        <button
                          className={`accordion-button ${!expanded ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${qid}`}
                          aria-expanded={expanded}
                          aria-controls={`collapse${qid}`}
                        >
                          <span className="icon_box mr-2">
                            <img src="/assets/images/icons/message.png" alt="Q" />
                          </span>
                          {question}
                        </button>
                      </h5>
                      <div
                        id={`collapse${qid}`}
                        className={`accordion-collapse collapse ${expanded ? 'show' : ''}`}
                        aria-labelledby={`heading${qid}`}
                        data-bs-parent="#accordionExampleFund"
                      >
                        <div className="accordion-body">{answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* risks + map */}
              <div className="group__one">
                <h4>Key investment risks:</h4>
                <p className="text-gray-700">
                  Risk of falling prices… liquidity risk… tenant risk… etc.
                </p>
                <div className="map__wrapper mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3…"
                    width="100%"
                    height="312"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* right sidebar */}
            <aside className="lg:col-span-5 space-y-8">
              {/* countdown + progress */}
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <div className="countdown__wrapper">
                  <p className="flex items-center text-gray-500">
                    <i className="fa-solid fa-clock mr-2" /> Left to invest
                  </p>
                  <div className="countdown font-mono text-2xl">00:00:00</div>
                </div>
                <h5 className="text-lg">
                  Available for funding: <span className="font-semibold">€134 514</span>
                </h5>

                <div className="progress__type space-y-2">
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-2" style={{ width: '64.73%' }} />
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">159 Investors</span> |{' '}
                    <span className="font-semibold">
                      <i className="fa-solid fa-dollar-sign"></i> 1,94,196
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    <i className="fa-solid fa-dollar-sign"></i> 3,00,000 Goal
                  </p>
                </div>
              </div>

              {/* occupancy selector + calculator */}
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h5>Occupancy</h5>
                <div className="flex flex-wrap gap-2">
                  {['0%', '20%', '40%', '60%', '80%', '100%'].map((pct, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1 rounded-full ${
                        i === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                      }`}
                    >
                      {pct}
                    </button>
                  ))}
                </div>

                {/* simple calculator */}
                <form className="space-y-4">
                  <div className="input">
                    <label htmlFor="anNum" className="block text-gray-600">
                      Annual return rate:
                    </label>
                    <input
                      id="anNum"
                      type="number"
                      placeholder="7.00%"
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="anNumIn" className="block text-gray-600">
                      Invest
                    </label>
                    <input
                      id="anNumIn"
                      type="number"
                      placeholder="€ 500"
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="anNumInTwo" className="block text-gray-600">
                      Earn
                    </label>
                    <input
                      id="anNumInTwo"
                      type="number"
                      placeholder="€ 35.00"
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                  <div className="item__security flex items-center space-x-3">
                    <img
                      src="/assets/images/home.png"
                      alt="Security"
                      className="h-6 w-6"
                    />
                    <div>
                      <p className="text-gray-500 text-xs">Security</p>
                      <h6>1st-Rank Mortgage</h6>
                    </div>
                  </div>
                  <button type="submit" className="button button--effect w-full py-2">
                    Invest Now
                  </button>
                </form>

                <p className="text-center">
                  <a href="/contact-us" className="underline text-sm">
                    Request a free callback
                  </a>
                </p>
              </div>

              {/* investment overview */}
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h5>Investment Overview</h5>
                <hr />
                <p className="text-gray-700">
                  Purpose of the loan: To increase the company’s working capital… Lorem Ipsum…
                </p>
                <a href="/blog" className="underline">
                  Read More
                </a>
              </div>

              {/* share */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h6>Share via Social</h6>
                <div className="flex space-x-4 mt-2 text-gray-600">
                  {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((net) => (
                    <a key={net} href="#" className="hover:text-blue-600">
                      <i className={`fab fa-${net}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* key updates */}
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h5>
                  Key Updates <i className="fa-solid fa-bell"></i>
                </h5>
                <hr />
                {[
                  { date: '30-Aug-2022', text: 'Term Sheet Signed', link: '/terms-conditions' },
                  { date: '30-Aug-2022', text: 'Listing Live', link: '/privacy-policy' },
                ].map((u, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <img src="/assets/images/check.png" alt="Check" className="h-6 w-6 mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">{u.date}</p>
                      <a href={u.link} className="text-blue-600">
                        {u.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* reports */}
              <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
                <h5>Reports</h5>
                <hr />
                {[
                  {
                    title: 'Investment Note',
                    desc: "Property Share's Detailed Investment Note",
                    label: 'DOWNLOAD INVESTMENT NOTE',
                  },
                  {
                    title: 'Legal Title Report',
                    desc:
                      'Detailed Report on the Title diligence of the property by Amarchand Mangaldas',
                    label: 'DOWNLOAD TITLE REPORT',
                  },
                ].map((r, i) => (
                  <div key={i} className="space-y-1">
                    <h6 className="font-semibold">{r.title}</h6>
                    <p className="text-gray-700">{r.desc}</p>
                    <button className="button button--effect">
                      {r.label} <i className="fa-solid fa-download ml-2"></i>
                    </button>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="p__gallery py-16 bg-gray-50" id="gallery">
        <div className="container mx-auto px-4 space-y-8">
          <hr />
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Property Gallery</h2>
            <a href="/contact-us" className="button button--secondary">
              Request info
            </a>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].map(
              (img, i) => (
                <a key={i} href={`/assets/images/gallery/${img}.png`}>
                  <img
                    src={`/assets/images/gallery/${img}.png`}
                    alt="Property Image"
                    className="w-full rounded-lg shadow-lg"
                  />
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* similar properties */}
      <section className="properties__grid section__space py-16 bg-white">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Browse Similar Properties</h2>
            <a href="/properties" className="button button--secondary">
              Browse All Properties
            </a>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/*
              You can reuse the same PROPERTY_DATA array from your list page,
              or fetch & slice it here. For now we’ll hard-code three cards:
            */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <a href="/properties/1" className="block overflow-hidden">
                <img
                  src="/assets/images/property/los.png"
                  alt="Los Angeles"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </a>
              <div className="p-4 space-y-3">
                <h4 className="font-semibold">Los Angeles</h4>
                <p className="text-gray-600 text-sm flex items-center">
                  <i className="fa-solid fa-location-dot mr-1"></i> 8706 Herrick Ave, Los Angeles
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-2" style={{ width: '64.73%' }} />
                </div>
                <p className="text-gray-600 text-sm">
                  159 Investors · €194,196 (64.73%)
                </p>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-500 text-xs">Annual Return</p>
                    <h6>7.5% + 2%</h6>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Property Type</p>
                    <h6>Commercial</h6>
                  </div>
                </div>
                <a
                  href="/properties/1"
                  className="button button--effect block text-center py-2"
                >
                  Invest Now
                </a>
              </div>
            </div>

            {/* repeat two more cards similarly… */}
          </div>
        </div>
      </section>

      {/* final market CTA */}
      <section className="market section__space py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="/assets/images/market-illustration.png"
              alt="Explore the Market"
              className="w-full"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h5 className="text-purple-600">
              Real exposure to the real estate market
            </h5>
            <h2 className="text-3xl font-extrabold">
              You Invest. Revest Does the Rest
            </h2>
            <p>
              Transparent Real Estate Investing Through Revest. Join us and
              experience a smarter, better way to invest in real estate.
            </p>
            <a href="/properties" className="button button--effect">
              Start Exploring
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
