import React, { useState } from 'react';

const Footer = () => {
  const [language, setLanguage] = useState('EN');

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0E1B3B] text-white overflow-hidden pt-16">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/footer/footer__left__circle.png"
          alt=""
          className="absolute left-0 top-0 w-96 opacity-20"
        />
        <img
          src="/assets/images/footer/footer__right__circle.png"
          alt=""
          className="absolute right-0 bottom-0 w-96 opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold">Subscribe for updates</h2>
            <p className="mt-2 text-gray-300">
              Stay on top of the latest blog posts, news and announcements
            </p>
          </div>
          <form className="flex gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="flex-grow bg-[#192648]/50 border border-gray-700 rounded-lg placeholder-gray-500 text-white py-3 px-5 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#6E33F8] hover:bg-[#5027B0] text-white font-medium rounded-lg px-6 py-3"
            >
              Subscribe
            </button>
          </form>
        </div>

        <hr className="border-gray-700 mb-12" />

        {/* Main Links */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo & Social */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <div className="flex items-center mb-4">
              <img
                src="/assets/images/logo-light.png"
                alt="Revest"
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-semibold">Revest</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revest is a platform offering anyone the ability to invest and potentially earn money from property at the click of a button
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#192648] p-3 rounded-full hover:bg-[#1F2C4E]">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="bg-[#192648] p-3 rounded-full hover:bg-[#1F2C4E]">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="bg-[#192648] p-3 rounded-full hover:bg-[#1F2C4E]">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="bg-[#192648] p-3 rounded-full hover:bg-[#1F2C4E]">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto">
            <h5 className="text-xl font-semibold mb-6">Company</h5>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-1"><a href="about" className="hover:text-white">About Us</a></li>
              <li className="border-b border-gray-700 pb-1"><a href="career" className="hover:text-white">Careers</a></li>
              {/* <li className="border-b border-gray-700 pb-1"><a href="blog" className="hover:text-white">Blog</a></li> */}
              <li className="border-b border-gray-700 pb-1"><a href="contact-us" className="hover:text-white">Contact Us</a></li>
              <li><a href="affiliate-program" className="hover:text-white">Affiliate</a></li>
            </ul>
          </div>

          {/* Invest Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto">
            <h5 className="text-xl font-semibold mb-6">Invest</h5>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-1"><a href="properties" className="hover:text-white">Browse Properties</a></li>
              <li className="border-b border-gray-700 pb-1"><a href="how-it-works" className="hover:text-white">How it works</a></li>
              {/* <li className="border-b border-gray-700 pb-1"><a href="loan-application" className="hover:text-white">Loan Application</a></li> */}
              {/* <li className="border-b border-gray-700 pb-1"><a href="property-alert" className="hover:text-white">Property Alerts</a></li> */}
              <li><a href="support" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Insights Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto">
            <h5 className="text-xl font-semibold mb-6">Insights</h5>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-1"><a href="support" className="hover:text-white">Help Center</a></li>
              <li className="border-b border-gray-700 pb-1"><a href="list-your-property" className="hover:text-white">List Your Property</a></li>
              <li><a href="loyality-program" className="hover:text-white">Loyality program</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto">
            <h5 className="text-xl font-semibold mb-6">Legal</h5>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-1"><a href="privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li className="border-b border-gray-700 pb-1"><a href="terms-conditions" className="hover:text-white">Term & Conditions</a></li>
              <li className="border-b border-gray-700 pb-1"><a href="cookie-policy" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="key-risks" className="hover:text-white">Key Risks</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8">
          <p className="text-gray-400">
            Copyright © Revest | Designed by <a href="https://themeforest.net/user/pixelaxis" className="text-[#6E33F8] hover:underline">Pixelaxis</a>
          </p>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-[#192648] text-white text-sm py-2 px-4 rounded-lg"
            >
              <option>EN</option>
              <option>ARG</option>
            </select>
            <a href="#" onClick={handleScrollToTop} className="bg-[#6E33F8] p-3 rounded-full hover:bg-[#5027B0]">
              <i className="fa-solid fa-angles-up text-white"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Home Illustration */}
      <img
        src="/assets/images/footer/footer__home___illustration.png"
        alt="Home Decoration"
        className="absolute left-0 bottom-0 w-80 pointer-events-none"
      />
    </footer>
  );
};

export default Footer;
