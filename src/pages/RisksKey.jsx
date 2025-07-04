// src/pages/KeyRisksPage.jsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const KEY_RISKS = [
  {
    q: 'Risk of falling prices',
    a: 'The price of the property might fall due to the increase in supply or decrease in demand in the area or other economic factors.'
  },
  {
    q: 'Liquidity risk',
    a: 'The borrower might be unable to find a buyer in order to sell the property quickly at market value.'
  },
  {
    q: 'Tenant risk',
    a: 'There is a risk that the asset can lose a tenant and it can take time to find replacements, which can impact the property’s cash-flow.'
  },
  {
    q: 'Interest rate risk',
    a: 'Changes in market interest rates may affect the fixed returns of some investments or the value of the property.'
  },
  {
    q: 'Regulatory risk',
    a: 'New regulations or changes in tax law can affect rental yields and property values.'
  },
  {
    q: 'Force majeure',
    a: 'Events outside of anyone’s control (natural disasters, pandemics) can negatively impact occupancy and property income.'
  },
]

export default function KeyRisksPage() {
  return (
    <>
      <Header secondary />

      {/* Banner */}
      <section
        className="banner key-banner banner--secondary clear__top bg__img relative"
        style={{ backgroundImage: "url('/assets/images/banner/banner-bg.png')" }}
      >
        <div className="container mx-auto px-4 py-20">
          <h1 className="neutral-top text-5xl font-extrabold text-blue-900">Key Risks</h1>
          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="breadcrumb flex space-x-2 text-gray-600">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li>/ Pages</li>
              <li>/ Key Risks</li>
            </ol>
          </nav>
        </div>
        <img
          src="/assets/images/banner/key-illustration.png"
          alt="Key illustration"
          className="banner__thumb absolute right-0 bottom-0 w-1/3"
        />
      </section>

      {/* Key Risks Accordion */}
      <section className="faq key-faq section__space py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="section__header mb-10 text-center">
            <h2 className="neutral-top text-3xl font-semibold mb-4">Key Risks</h2>
            <p className="neutral-bottom text-gray-700 max-w-2xl mx-auto">
              Investing in property can be rewarding but, as with any investment, there are risks.
              The Info Packs and the Investment Terms and Conditions cover the risks specific to a
              particular investment but it is also important that, before investing, you understand
              the following general risks.
            </p>
          </div>

          <div className="faq__group space-y-4">
            {KEY_RISKS.map((risk, idx) => (
              <details
                key={idx}
                className="accordion-item content__space border rounded-lg overflow-hidden"
                open={idx === 0}
              >
                <summary className="accordion-header flex items-center p-4 cursor-pointer bg-gray-100">
                  <span className="icon_box mr-3">
                    <img
                      src="/assets/images/icons/message.png"
                      alt="icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <span className="font-medium">{risk.q}</span>
                </summary>
                <div className="accordion-body p-4 text-gray-800">
                  {risk.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
