// src/pages/RegistrationPage.jsx
import React from 'react';

function ScrollToTop() {
  const handleClick = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-30 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition"
      aria-label="Scroll to top"
    >
      <i className="fas fa-angles-up"></i>
    </button>
  );
}

export default function RegistrationPage() {
  return (
    <div
      className="min-h-screen relative bg-indigo-50 flex flex-col items-center"
      style={{
        backgroundImage: 'url(/assets/images/registration-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     

      <main className="relative z-10 w-full flex-grow flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8">
          {/* Title */}
          <h4 className="text-3xl font-extrabold text-blue-900 mb-2">
            Registration
          </h4>
          <p className="text-gray-700 mb-6">
            Already Registered?{' '}
            <a href="/login" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* You are? */}
            <div>
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                You are?
              </label>
              <div className="relative">
                <select
                  id="userType"
                  className="w-full appearance-none border border-gray-200 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <option>Particular</option>
                  <option>Individual</option>
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-900 mb-1"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="passwordConfirm"
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  Password Confirmation*
                </label>
                <input
                  id="passwordConfirm"
                  type="password"
                  placeholder="Password Confirm"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                id="agreePolicy"
                type="checkbox"
                className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label
                htmlFor="agreePolicy"
                className="text-gray-700 text-sm flex-1"
              >
                I have read and I agree to the{' '}
                <a href="/privacy-policy" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl py-4 shadow-lg transition"
            >
              Create My Account
            </button>
          </form>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
}
