import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TABS = [
  { id: 'start', label: 'Getting Started' },
  { id: 'funds', label: 'Adding Funds' },
  { id: 'investing', label: 'Investing' },
  { id: 'security', label: 'Security' },
  { id: 'taxes', label: 'Taxes' },
];

const FAQ_DATA = {
  start: [
    {
      q: 'What is Revest?',
      a: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
    },
    {
      q: 'What are the benefits of investing via Revest?',
      a: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable…',
    },
    {
      q: 'What makes Revest different?',
      a: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable…',
    },
    {
      q: 'What happens to my investments if Revest goes into bankruptcy?',
      a: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum…',
    },
    {
      q: 'What regulations apply to Revest?',
      a: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum…',
    },
    {
      q: 'How do I start investing in Revest?',
      a: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum…',
    },
  ],
  funds: [
    {
      q: 'How do I add funds?',
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
    },
    {
      q: 'Accepted payment methods?',
      a: 'We accept bank transfers, credit cards, and ACH.',
    },
  ],
  investing: [
    {
      q: 'How do I place an investment?',
      a: 'Navigate to a property detail and click Invest Now.',
    },
  ],
  security: [
    {
      q: 'How secure is my data?',
      a: 'We use industry-standard encryption and 2FA.',
    },
  ],
  taxes: [
    {
      q: 'How are distributions taxed?',
      a: 'Distributions are treated as ordinary income.',
    },
  ],
};

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('start');
  const [search, setSearch] = useState('');

  const filteredFaqs = (FAQ_DATA[activeTab] || []).filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header secondary />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 to-blue-100 py-24 text-center">
        <div className="absolute inset-0">
          <img
            src="/assets/images/footer/footer__home___illustration.png"
            alt="Background bubbles"
            className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-8">How can we help?</h1>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl mx-auto px-6 py-4 rounded-lg border border-gray-300 shadow-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-base font-semibold">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-1 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-purple-600'
                    : 'text-blue-900 border-transparent hover:border-blue-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFaqs.length ? (
            <div className="space-y-4">
              {filteredFaqs.map((item, i) => (
                <details
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <summary className="flex items-center px-6 py-4 cursor-pointer text-lg font-semibold text-gray-800 hover:bg-gray-50 transition">
                    <img
                      src="/assets/images/icons/message.png"
                      alt="icon"
                      className="w-6 h-6 mr-4"
                    />
                    {item.q}
                  </summary>
                  <div className="px-6 py-4 text-gray-700 border-t">{item.a}</div>
                </details>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No results found for “{search}”</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
