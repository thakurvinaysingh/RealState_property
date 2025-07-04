// src/pages/AffiliateProgram.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AffiliateProgram = () => {
  return (
    <>
      <Header />

    {/* Affiliate Program Banner */}
<section
  className="relative bg-[#F3ECFE] py-20 overflow-hidden"
  style={{ backgroundImage: "url('/assets/images/banner/program-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
    {/* Text Content */}
    <div className="w-full md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Affiliate Program</h1>
      <nav aria-label="breadcrumb">
        <ol className="flex space-x-2 text-blue-900 font-medium">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li>→</li>
          <li>Pages</li>
          <li>→</li>
          <li className="font-semibold">Affiliate Program</li>
        </ol>
      </nav>
    </div>

    {/* Right Side Illustration */}
    <div className="w-full md:w-1/2 flex justify-end">
      <img
        src="/assets/images/banner/affi-thumb.png"
        alt="Affiliate Program"
        className="w-full max-w-[500px] h-auto object-contain"
      />
    </div>
  </div>
</section>


     
{/* Affiliate Program Feature Section */}
<section className="py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    
    {/* Left Side: Large Thumb Image */}
    <div className="relative w-full md:w-1/2 flex justify-center items-center">
      <img
         src="/assets/images/affiliate-illustration.png"
        alt="Affiliate Program Visual"
        className="w-full max-w-[500px] h-auto object-contain drop-shadow-lg"
      />
    </div>

    {/* Right Side: Text & Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h5 className="text-purple-600 font-bold text-lg mb-2">Earn Money</h5>
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Affiliate Program</h2>
      <p className="text-gray-700 mb-6">
        Earn commission from every Revest new user you help to bring. Join our affiliate program, refer your audience, and earn revenue.
      </p>
      <a href="/registration" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition">
        Join As a Affiliate
      </a>
    </div>
  </div>
</section>

    {/* Three Steps Section */}
<section
  className="py-20 bg-white"
  style={{ backgroundImage: "url('/assets/images/step-two-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <h5 className="text-purple-600 font-bold text-lg mb-2">How the program Works</h5>
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Start to make money in 3 easy steps</h2>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {[
        {
          icon: 'join.png',
          title: 'Join',
          text: 'It’s free to get started. Access marketing materials, tools, and more!',
        },
        {
          icon: 'promote.png',
          title: 'Promote',
          text: 'Share with your target audience. There’s a match for every need.',
        },
        {
          icon: 'earn.png',
          title: 'Earn',
          text: 'Rake in the moment your traffic converts. Check our commission plans.',
        },
      ].map((step, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-md p-8 text-center transition hover:shadow-lg">
          <img
            src={`/assets/images/icons/${step.icon}`}
            alt={step.title}
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h4>
          <p className="text-gray-600">{step.text}</p>
        </div>
      ))}
    </div>

    {/* Video Illustration */}
    <div className="flex justify-center">
      <div className="relative max-w-4xl w-full overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/assets/images/video-illustration.png"
          alt="Video Illustration"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://www.youtube.com/watch?v=LCihLrSehCo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white text-purple-600 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            <i className="fa-solid fa-play text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
<section
  className="relative bg-white py-20 overflow-hidden"
  style={{ backgroundImage: 'url(/assets/images/testimonial/dot-map.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
>
  <div className="container mx-auto px-4 text-center">
    {/* Heading */}
    <div className="mb-12">
      <h5 className="text-blue-900 font-bold text-sm mb-2">
        <span className="bg-blue-900 text-white px-2 py-1 rounded">Investors</span>
        <span className="text-purple-600 ml-1">Trust Us</span>
      </h5>
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
        Trusted by Over 40,000 Worldwide <br /> Customer since 2022
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        We divide each property into shares so anyone can get started. Kindly check out what our Investors say about revest.
      </p>
    </div>

    {/* Testimonial Slider */}
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.next-arrow',
          prevEl: '.prev-arrow'
        }}
        slidesPerView={1}
        loop={true}
        className="w-full max-w-3xl mx-auto"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-2xl rounded-4xl p-8 md:p-10 text-center relative z-10">
              <div className="text-yellow-400 mb-4">
                {[...Array(5)].map((_, s) => (
                  <i key={s} className="fa-solid fa-star text-xl"></i>
                ))}
              </div>
              <p className="text-lg font-medium text-blue-900 leading-relaxed mb-6">
                “Very trustworthy and clearly platform to invest in real state.
                Safe investment with monthly payouts. Really recommended!”
              </p>
              <div className="flex items-center justify-center mt-6">
                <img
                  src="/assets/images/testimonial/avatar.png"
                  alt="Allan Murphy"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="mt-4">
                <h5 className="text-xl font-bold text-blue-900">Allan Murphy</h5>
                <p className="text-purple-600">United States</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <button className="prev-arrow bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <button className="next-arrow bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default AffiliateProgram;
