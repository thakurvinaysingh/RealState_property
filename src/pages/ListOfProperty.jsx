import React, { useEffect ,useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const stats = [
    {
      icon: '/assets/images/icons/successs.png',
      value: '940+',
      label: 'Successful High-Value Transactions',
    },
    {
      icon: '/assets/images/icons/served.png',
      value: '4800+',
      label: 'Number of clients served',
    },
    {
      icon: '/assets/images/icons/exp.png',
      value: '43 Year+',
      label: 'Real estate investment experience',
    },
  ];

  const features = [
    {
      icon: '/assets/images/icons/attractive.png',
      title: 'Attractive conditions',
      text: 'With us you sell your property without paying a brokerage commission.',
    },
    {
      icon: '/assets/images/icons/fast.png',
      title: 'Fast processing',
      text: 'Receive an initial offer and a property assessment within 48&nbsp;hours.',
    },
    {
      icon: '/assets/images/icons/innovation.png',
      title: 'Innovation',
      text: 'Sell your property online through an innovative business model.',
    },
  ];
  const steps = [
    {
      number: '1',
      title: 'Fill out the online form',
      text: 'Answer a few questions and attach a summary file to help us evaluate your property.',
    },
    {
      number: '2',
      title: 'Analysis of the property',
      text: 'Answer a few questions and attach a summary file to help us evaluate your property.',
    },
    {
      number: '3',
      title: 'Receive a first offer',
      text: 'Answer a few questions and attach a summary file to help us evaluate your property.',
    },
  ];
  const faqs = [
    {
      question: 'Who may apply for investment ?',
      answer:
        'combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or',
    },
    {
      question: 'How long does it take to collect the amount necessary for my project?',
      answer: 'Your answer text here...',
    },
    {
      question: 'What will happen if the full amount required for the project is not collected?',
      answer: 'Your answer text here...',
    },
    {
      question:
        'Is it possible to change the term of the project, the schedule of repayment of the received investments?',
      answer: 'Your answer text here...',
    },
    {
      question:
        'Do I need to present any documents on the use of the collected investments?',
      answer: 'Your answer text here...',
    },
    {
      question:
        'What should I do if the project is unsuccessful and I am unable to repay the sum borrowed?',
      answer: 'Your answer text here...',
    },
  ];
const ListYourProperty = () => {
    const [openIndex, setOpenIndex] = useState(0);
  useEffect(() => {
    // Set page title
    document.title = 'Revest – Real Estate Investment For Everyone';

    // Initialize Bootstrap collapse, plugins, and data-background images if needed
    const setBackgrounds = () => {
      document.querySelectorAll('[data-background]').forEach(el => {
        const bg = el.getAttribute('data-background');
        if (bg) el.style.backgroundImage = `url(${bg})`;
      });
    };

    setBackgrounds();

    // Optionally initialize other jQuery plugins (if used)
    // e.g., nice-select, magnific-popup, slick, etc.
    // Ensure jQuery is loaded globally if you rely on these.
  }, []);

  return (
    <>
      <Header />

  {/* Hero Section */}
<section
  className="
    relative
    bg-[url('../public/assets/images/hero/list-bg.png')] bg-cover bg-center
    pt-24 pb-40
    overflow-hidden
  "
>
  <div className="container mx-auto px-6 lg:px-8 flex items-center">
    {/* Left Text Block */}
    <div className="w-full lg:w-1/2 text-white">
      <h5 className="text-[#53E2A0] uppercase tracking-wide text-sm md:text-base font-medium mb-4">
        List Your Property and sell instantly
      </h5>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
        Sell your property,
        <br />
        Online &amp; hassle-free
      </h1>
      <p className="text-base md:text-lg lg:text-xl max-w-xl mb-8">
        Receiving rent from a commercial property and now want to sell it instantly? 
        List your property and convert the lakhs of annual rent you are receiving 
        into Crores by selling to 5000+ real estate investors on Revest.
      </p>
      <a
        href="/registration"
        className="
          inline-block
          bg-white text-purple-800 font-semibold
          px-8 py-3 md:px-10 md:py-4
          rounded-lg
          shadow-lg hover:shadow-xl
          transition-shadow duration-200
        "
      >
        List Your Property
      </a>
    </div>

    {/* (Optional) Right Illustration */}
    {/* 
      If you have a React component or <img> for the illustration,
      you can uncomment and drop it here in lg:w-1/2.
    */}
    {/* 
    <div className="hidden lg:block lg:w-1/2">
      <img src="/assets/images/hero/illustration.png" alt="Hero Illustration" />
    </div>
    */}
  </div>
</section>

     

      {/* List Overview Section */}
      <section className="relative -mt-24 px-4 xl:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="mx-auto w-16 h-16 mb-4"
              />
              <h3 className="text-3xl font-extrabold text-indigo-900 mb-2">
                {item.value}
              </h3>
              <p className="text-sm text-indigo-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    

{/* Why Sell Through Revest Section */}
<section className="py-40 bg-white overflow-hidden">
  <div className="container mx-auto px-4 lg:flex lg:items-start">
    {/* Left Text Column */}
    <div className="lg:w-1/2">
      <h5 className="text-purple-600 font-semibold mb-2">
        Your success is our success.
      </h5>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Why sell through Revest?
      </h2>
      <p className="text-gray-700 mb-4">
        Revest enables real estate owners to sell their properties through its platform. 
        Submit your property quickly and easily!
      </p>
      <p className="mb-6">
        <a
          href="/contact-us"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Let us know about your property
        </a>
      </p>
      <a
        href="/login"
        className="
          inline-block
          bg-purple-600 text-white font-semibold
          py-3 px-6 rounded-lg
          shadow-lg hover:bg-purple-700
          transition
        "
      >
        Submit Your Property
      </a>
    </div>

    {/* Right 3-Card Grid */}
    <div className="lg:w-1/2 mt-12 lg:mt-0">
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        {features.map((f, i) => {
          // position cards: skip top-left, then bottom-left, bottom-right
          const posClass =
            i === 0
              ? 'row-start-1 col-start-2'
              : i === 1
              ? 'row-start-2 col-start-1'
              : 'row-start-2 col-start-2';

          return (
            <div
              key={i}
              className={`${posClass} bg-white rounded-2xl shadow-xl p-8 text-center`}
            >
              <img
                src={f.icon}
                alt={f.title}
                className="mx-auto w-16 h-16 mb-4"
              />
              <h5 className="text-xl font-bold text-indigo-900 mb-2">
                {f.title}
              </h5>
              <p
                className="text-gray-600"
                // preserve the “&nbsp;” in your source text
                dangerouslySetInnerHTML={{ __html: f.text }}
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* Additional sections (Work Two, FAQ, Testimonial, Market) follow similar structure... */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-purple-600 font-semibold mb-2">How it works</h5>
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4">
          It's Easy to Get Started.
        </h2>
        <p className="text-gray-700 text-lg">
          Submit your property quickly and easily!
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-indigo-200 rounded-full flex items-center justify-center mb-6">
                <span className="text-indigo-900 text-xl font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-center text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-900">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = idx === openIndex;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center p-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-50 rounded-full shadow-sm mr-4">
                  <img
                    src="/assets/images/icons/message.png"
                    alt="FAQ icon"
                    className="w-6 h-6"
                  />
                </div>

                {/* Question */}
                <span className="flex-1 text-left text-lg font-semibold text-indigo-900">
                  {faq.question}
                </span>

                {/* Arrow */}
                <svg
                  className={`w-6 h-6 text-indigo-400 transform transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-16 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
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



{/* Market / “You Invest. Revest Does the Rest.” Section */}
<section className="relative py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {/* Image slider (single slide shown) */}
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src="/assets/images/market-illustration.png"
            alt="Market Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        {/* pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
        </div>
      </div>

      {/* Text */}
      <div className="space-y-6 text-center lg:text-left">
        <h5 className="text-purple-600 font-semibold">
          Real exposure to the real estate market
        </h5>
        <h2 className="text-5xl font-extrabold text-blue-900 leading-tight">
          You Invest. Revest Does the Rest
        </h2>
        <p className="text-gray-700">
          Transparent real estate investing through Revest. Join us and experience a smarter, better way to invest in real estate.
        </p>
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <a
            href="/properties"
            className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Start Exploring
          </a>
          {/* curved arrow graphic */}
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 64 64"
          >
            <path
              d="M10 32 C20 12, 44 12, 54 32"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 28 L54 32 L50 36"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
};

export default ListYourProperty;
