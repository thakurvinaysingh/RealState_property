import React from 'react';

const allProps = [
  { title: "Los Angeles", img: "/assets/images/property/grid-one.jpg", location:"8706 Herrick Ave, Los Angeles", investors:17, invested:"794,196", percent:"14.73", returnRate:"2.5% + 4%", type:"Commercial" },
  { title: "San Francisco, CA", img: "/assets/images/property/grid-two.jpg", location:"3335 21 St, San Francisco", investors:179, invested:"294,196", percent:"54.73", returnRate:"5.5% + 4%", type:"Commercial" },
  { title: "San Diego", img: "/assets/images/property/grid-three.jpg", location:"356 La Jolla, San Diego", investors:199, invested:"894,196", percent:"64.73", returnRate:"3.5% + 2%", type:"Commercial" },
  { title: "Grand Avenue, San Diego", img: "/assets/images/property/grid-four.jpg", location:"90071, Grand Avenue, San Diego", investors:59, invested:"894,196", percent:"54.73", returnRate:"7.5% + 9%", type:"Commercial" },
  { title: "The Lily", img: "/assets/images/property/grid-five.jpg", location:"Colorado Springs, CO", investors:559, invested:"994,196", percent:"84.73", returnRate:"7.5% + 5%", type:"Commercial" },
  { title: "The Weldon", img: "/assets/images/property/grid-six.jpg", location:"Gastonia, NC", investors:139, invested:"114,196", percent:"44.73", returnRate:"5.5% + 2%", type:"Commercial" }
];

const AllProperties = () => (
  <section className="properties__grid section__space py-12">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">All Properties</h2>
        <a href="/properties" className="button button--secondary button--effect">
          Browse All Properties
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allProps.map((prop) => (
          <div key={prop.title} className="property__grid__single bg-white rounded shadow">
            <div className="img__effect">
              <a href="/property-details">
                <img src={prop.img} alt={prop.title} className="rounded-t" />
              </a>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">{prop.title}</h4>
              <p className="sub__info text-sm text-gray-600 mb-2">
                <i className="fa-solid fa-location-dot mr-1"></i>{prop.location}
              </p>
              <div className="progress__type mb-2">
                <div className="progress mb-1">
                  <div
                    className="progress-bar bg-purple-600"
                    role="progressbar"
                    style={{ width: `${prop.percent}%` }}
                    aria-valuenow={prop.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <p className="project__has text-sm text-gray-600">
                  <span className="project__has__investors">{prop.investors} Investors</span> |
                  <i className="fa-solid fa-dollar-sign mx-1"></i>{prop.invested} ({prop.percent}%)
                </p>
              </div>
              <div className="item__info grid grid-cols-2 gap-2 text-sm mb-4">
                <div>
                  <p>Annual Return</p>
                  <h6>{prop.returnRate}</h6>
                </div>
                <div>
                  <p>Property Type</p>
                  <h6>{prop.type}</h6>
                </div>
              </div>
              <div className="invest__cta__wrapper flex justify-center">
                <a href="/property-details" className="button button--effect">
                  Invest Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AllProperties;
