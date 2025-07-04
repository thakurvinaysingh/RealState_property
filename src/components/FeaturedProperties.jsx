// src/components/FeaturedProperties.jsx
import React from "react";
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaLock } from "react-icons/fa";

const featuredProps = [
  {
    title: "Los Angeles",
    image: "/assets/images/property/los.png",
    location: "8706 Herrick Ave, Los Angeles",
    investors: 119,
    invested: "4,94,196",
    percent: 54.73,
    goal: "1,00,000",
    returnRate: "7.5% + 3%",
    term: "26 Months",
    type: "Commercial",
    distribution: "Monthly",
  },
  {
    title: "San Francisco, CA",
    image: "/assets/images/property/san.png",
    location: "3335 21 St, San Francisco",
    investors: 179,
    invested: "1,64,296",
    percent: 64.73,
    goal: "5,00,000",
    returnRate: "3.5% + 6%",
    term: "48 Months",
    type: "Commercial",
    distribution: "Monthly",
  },
];

const FeaturedProperties = () => (
  <section className="featured__properties section__space bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-blue-900">Featured Properties</h2>
        <a
          href="/properties"
          className="px-6 py-3 bg-white shadow-lg rounded-lg text-blue-900 font-semibold hover:shadow-xl transition"
        >
          Browse All Properties
        </a>
      </div>

      <div className="space-y-8">
        {featuredProps.map((p) => (
          <div
            key={p.title}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-8 relative flex flex-col justify-between">
              {/* Title + Location + Timer */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">{p.title}</h3>
                  <p className="flex items-center text-gray-600 mt-1">
                    <FaMapMarkerAlt className="mr-2 text-gray-500" />
                    {p.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="flex items-center text-gray-500 text-sm">
                    <FaClock className="mr-2" />
                    Left to invest
                  </p>
                  <p className="mt-1 text-xl font-bold text-purple-600">
                    00D : 00H : 00M
                  </p>
                </div>
              </div>

              {/* Progress Bar + Stats */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-green-500"
                    style={{ width: `${p.percent}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-gray-700">
                  <span>
                    {p.investors} Investors |{" "}
                    <FaDollarSign className="inline-block" /> {p.invested} (
                    {p.percent}%)
                  </span>
                  <span>
                    <FaDollarSign className="inline-block" /> {p.goal} Goal
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-b py-6 text-center text-gray-700">
                <div>
                  <p className="text-sm">Annual Return</p>
                  <p className="font-semibold text-purple-600">{p.returnRate}</p>
                </div>
                <div>
                  <p className="text-sm">Maximum Term</p>
                  <p className="font-semibold text-purple-600">{p.term}</p>
                </div>
                <div>
                  <p className="text-sm">Property Type</p>
                  <p className="font-semibold text-purple-600">{p.type}</p>
                </div>
                <div>
                  <p className="text-sm">Distribution</p>
                  <p className="font-semibold text-purple-600">
                    {p.distribution}
                  </p>
                </div>
              </div>

              {/* Security & CTAs */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mt-6">
                <div className="flex items-center bg-blue-50 p-4 rounded-lg mb-4 md:mb-0">
                  <div className="p-2 bg-white rounded-full mr-4">
                    <FaLock className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Security</p>
                    <p className="font-semibold text-green-800">
                      1st-Rank Mortgage
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="/registration"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
                  >
                    Invest Now
                  </a>
                  <a
                    href="/property-details"
                    className="px-6 py-3 bg-white shadow rounded-lg font-semibold text-gray-800 hover:shadow-md transition"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;

