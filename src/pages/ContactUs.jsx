// src/pages/ContactUsPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const overviewItems = [
  {
    icon: '/assets/images/icons/email.png',
    title: 'Send Us an Email',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    contact: (
      <a href="mailto:support@revest.com" className="text-purple-600 hover:underline">
        support@revest.com
      </a>
    ),
  },
  {
    icon: '/assets/images/icons/phone.png',
    title: 'Give Us a Call',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    contact: (
      <a href="tel:+14148077478" className="text-purple-600 hover:underline">
        (414) 807 – 7478
      </a>
    ),
  },
  {
    icon: '/assets/images/icons/chat.png',
    title: 'Chat with us',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    contact: (
      <a href="#0" className="text-purple-600 hover:underline">
        Open live chat
      </a>
    ),
  },
];

const faqItems = [
  {
    question: 'What is Revest?',
    answer:
      'Combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
  },
  {
    question: 'What are the benefits of investing via Revest?',
    answer:
      'Combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
  },
  {
    question: 'What makes Revest different?',
    answer:
      'Combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
  },
  {
    question: 'What happens to my investments if Revest goes into bankruptcy?',
    answer:
      'Combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
  },
  {
    question: 'What regulations apply to Revest?',
    answer:
      'Combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
  },
  {
    question: 'How do I fund investing in Revest?',
    answer:
      'Combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or.',
  },
];

export default function ContactUsPage() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Banner */}
      <section
        className="relative bg-cover bg-no-repeat bg-center pt-32 pb-36"
        style={{ backgroundImage: 'url(/assets/images/contact-banner-bg.png)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-extrabold text-blue-900 mb-2">How can we help?</h1>
          <h5 className="text-2xl text-purple-600">Got a question?</h5>
        </div>
      </section>

      {/* Contact Overview */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* background illustration */}
        <img
          src="/assets/images/contact-overview-illustration.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {overviewItems.map((item) => (
              <div
                key={item.title}
                className="flex-1 max-w-sm bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center space-y-4"
              >
                <div className="bg-purple-50 rounded-full p-6">
                  <img src={item.icon} alt={item.title} className="h-12 w-12" />
                </div>
                <h5 className="text-xl font-semibold text-blue-900">{item.title}</h5>
                <p className="text-gray-600">{item.text}</p>
                <hr className="border-t border-gray-200 w-12 my-2" />
                {item.contact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a Question */}
      <section
        className="py-20 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/assets/images/ask-bg.png)' }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Ask a Question</h2>
          <form className="space-y-6 bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="askFirstName" className="block text-sm font-medium text-blue-900 mb-1">
                  First Name*
                </label>
                <input
                  id="askFirstName"
                  type="text"
                  required
                  placeholder="Enter Your First Name"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="askLastName" className="block text-sm font-medium text-blue-900 mb-1">
                  Last Name*
                </label>
                <input
                  id="askLastName"
                  type="text"
                  required
                  placeholder="Enter Your Last Name"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="askEmail" className="block text-sm font-medium text-blue-900 mb-1">
                Email*
              </label>
              <input
                id="askEmail"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="askPhone" className="block text-sm font-medium text-blue-900 mb-1">
                Phone*
              </label>
              <div className="flex space-x-2">
                <select className="border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none">
                  <option>+1</option>
                  <option>+2</option>
                  <option>+3</option>
                  <option>+4</option>
                </select>
                <input
                  id="askPhone"
                  type="tel"
                  required
                  placeholder="345-323-1234"
                  className="flex-1 border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="askSubject" className="block text-sm font-medium text-blue-900 mb-1">
                Subject*
              </label>
              <input
                id="askSubject"
                type="text"
                required
                placeholder="Write Subject"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="askMessage" className="block text-sm font-medium text-blue-900 mb-1">
                Message*
              </label>
              <textarea
                id="askMessage"
                required
                placeholder="Write Message"
                className="w-full border border-gray-200 rounded-xl p-4 focus:ring-purple-300 focus:outline-none h-32 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-medium rounded-xl py-4 shadow hover:bg-purple-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="flex items-center space-x-3">
                    <img src="/assets/images/icons/message.png" alt="" className="h-6 w-6" />
                    <span className="font-medium text-blue-900">{item.question}</span>
                  </span>
                  <i className={`fas fa-chevron-${openIndex === idx ? 'up' : 'down'} text-gray-500`} />
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-4 text-gray-700">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
