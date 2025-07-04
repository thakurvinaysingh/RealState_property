import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SECTIONS = [
  {
    title: "We're always looking for new ways to provide privacy for our customers.",
    paragraphs: [
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat."
    ],
    list: [
      "Blandit dignissim nulla varius tristique a sed integer ut tempor.",
      "Augue interdum semper bibendum amet sed.",
      "Dis in at ultricies tortor sit tellus.",
      "Habitant ornare aenean maecenas pretium"
    ]
  },
  {
    title: "Your data is safe with us, we will not share any information with external sources.",
    paragraphs: [
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat."
    ],
    list: [
      "Blandit dignissim nulla varius tristique a sed integer ut tempor.",
      "Augue interdum semper bibendum amet sed.",
      "Dis in at ultricies tortor sit tellus.",
      "Habitant ornare aenean maecenas pretium"
    ]
  },
  {
    title: "We're always looking for new ways to provide privacy for our customers.",
    paragraphs: [
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.",
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa."
    ],
    list: [
      "Blandit dignissim nulla varius tristique a sed integer ut tempor.",
      "Augue interdum semper bibendum amet sed.",
      "Dis in at ultricies tortor sit tellus.",
      "Habitant ornare aenean maecenas pretium"
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header secondary />

      {/* Banner Section */}
      <section className="relative bg-[#BFD5FF] bg-opacity-30 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Privacy Policy</h1>
          <nav className="text-sm text-blue-900 flex space-x-2 items-center">
            <a href="/" className="hover:underline">Home</a>
            <span>→</span>
            <span>Pages</span>
            <span>→</span>
            <span className="font-semibold">Privacy Policy</span>
          </nav>
        </div>
        <img
          src="/assets/images/banner/key-illustration.png"
          alt="Privacy Illustration"
          className="absolute bottom-0 right-0 w-1/3 hidden md:block"
        />
      </section>

      {/* Content Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {SECTIONS.map((sec, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-extrabold text-blue-900 mb-6">{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={pi} className="text-gray-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <ul className="space-y-3 mt-4 text-blue-900 font-semibold list-decimal list-inside">
                {sec.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {idx < SECTIONS.length - 1 && (
                <hr className="mt-12 border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
