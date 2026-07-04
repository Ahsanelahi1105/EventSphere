import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPlayCircle,
} from "react-icons/fa";

const Home = () => {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            {/* Left */}

            <div className="col-lg-6">

              <span className="hero-badge">

                🎉 Pakistan's Modern Expo Management Platform

              </span>

              <h1 className="hero-title mt-4">

                Discover Amazing

                <span className="text-primary">
                  {" "}Events
                </span>

                <br />

                Connect with

                <span className="text-primary">
                  {" "}Businesses
                </span>

              </h1>

              <p className="hero-text mt-4">

                EventSphere helps exhibitors, attendees and
                organizers manage expos from one modern platform.

                Register for events, reserve booths, attend
                live sessions and grow your business network.

              </p>

              <div className="hero-buttons mt-5">

                <Link
                  to="/register"
                  className="btn btn-primary btn-lg px-5"
                >

                  Get Started

                  <FaArrowRight className="ms-2" />

                </Link>

                <button
                  className="btn btn-light btn-lg ms-3 px-4"
                >

                  <FaPlayCircle className="me-2 text-primary" />

                  Watch Demo

                </button>

              </div>

              {/* Stats */}

              <div className="row mt-5">

                <div className="col-4">

                  <h2 className="fw-bold text-primary">
                    120+
                  </h2>

                  <small>
                    Events
                  </small>

                </div>

                <div className="col-4">

                  <h2 className="fw-bold text-primary">
                    500+
                  </h2>

                  <small>
                    Exhibitors
                  </small>

                </div>

                <div className="col-4">

                  <h2 className="fw-bold text-primary">
                    20K+
                  </h2>

                  <small>
                    Visitors
                  </small>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="col-lg-6 text-center">

              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
                alt="Event"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURED EVENTS ================= */}

      <section className="py-5 bg-white">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">

              Upcoming Expos

            </h2>

            <p className="text-muted fs-5">

              Discover the biggest exhibitions and business events.

            </p>

          </div>

          <div className="row">

            {[
              {
                title: "AI Technology Expo",
                date: "12 Jan 2026",
                location: "Karachi Expo Center",
                image:
                  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
              },
              {
                title: "Startup Innovation Summit",
                date: "25 Feb 2026",
                location: "Lahore Expo Center",
                image:
                  "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
              },
              {
                title: "Healthcare Exhibition",
                date: "15 Mar 2026",
                location: "Islamabad Convention Center",
                image:
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
              },
            ].map((event, index) => (

              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
              >

                <div className="event-card">

                  <img
                    src={event.image}
                    alt={event.title}
                  />

                  <div className="event-content">

                    <span className="event-date">

                      {event.date}

                    </span>

                    <h4>

                      {event.title}

                    </h4>

                    <p>

                      📍 {event.location}

                    </p>

                    <button className="btn btn-primary w-100">

                      View Details

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED EXHIBITORS ================= */}

      <section className="py-5" style={{ background: "#F8FAFC" }}>

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">
              Featured Exhibitors
            </h2>

            <p className="text-muted fs-5">
              Meet leading companies participating in EventSphere.
            </p>

          </div>

          <div className="row">

            {[
              {
                name: "Microsoft",
                category: "Technology",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              },
              {
                name: "Google",
                category: "Technology",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "OpenAI",
                category: "Artificial Intelligence",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
              },
              {
                name: "Tesla",
                category: "Innovation",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
              },
            ].map((company, index) => (

              <div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
              >

                <div className="exhibitor-card text-center">

                  <img
                    src={company.logo}
                    alt={company.name}
                    className="company-logo"
                  />

                  <h4 className="mt-4 fw-bold">
                    {company.name}
                  </h4>

                  <p className="text-muted">
                    {company.category}
                  </p>

                  <button className="btn btn-outline-primary mt-2">
                    View Profile
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-5 bg-white">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">
              Why Choose EventSphere?
            </h2>

            <p className="text-muted fs-5">
              Everything you need to manage and attend modern expos.
            </p>

          </div>

          <div className="row">

            {[
              {
                icon: "🚀",
                title: "Easy Registration",
                text: "Register for expos within seconds with a smooth and secure process.",
              },
              {
                icon: "🏢",
                title: "Smart Booth Management",
                text: "Exhibitors can reserve and manage booths with ease.",
              },
              {
                icon: "🎤",
                title: "Live Sessions",
                text: "Attend seminars, workshops and keynote sessions effortlessly.",
              },
              {
                icon: "🤝",
                title: "Business Networking",
                text: "Connect exhibitors, attendees and organizers on one platform.",
              },
            ].map((item, index) => (

              <div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
              >

                <div className="feature-card text-center">

                  <div className="feature-icon">
                    {item.icon}
                  </div>

                  <h4 className="fw-bold mt-3">
                    {item.title}
                  </h4>

                  <p className="text-muted mt-3">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section
        className="py-5"
        style={{ background: "#F8FAFC" }}
      >

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">
              What People Say
            </h2>

            <p className="text-muted fs-5">
              Trusted by exhibitors, organizers and attendees.
            </p>

          </div>

          <div className="row">

            {[
              {
                name: "Ali Raza",
                role: "Exhibitor",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                review:
                  "EventSphere made booth booking incredibly easy. The whole experience was smooth and professional.",
              },
              {
                name: "Sara Ahmed",
                role: "Attendee",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                review:
                  "I loved the event discovery and session booking experience. Everything was organized beautifully.",
              },
              {
                name: "Usman Khan",
                role: "Organizer",
                image: "https://randomuser.me/api/portraits/men/52.jpg",
                review:
                  "Managing exhibitors and attendees from one dashboard saved us a lot of time during our expo.",
              },
            ].map((item, index) => (

              <div
                className="col-lg-4 mb-4"
                key={index}
              >

                <div className="testimonial-card">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img"
                  />

                  <h4 className="fw-bold mt-3">
                    {item.name}
                  </h4>

                  <small className="text-primary fw-semibold">
                    {item.role}
                  </small>

                  <p className="text-muted mt-3">
                    "{item.review}"
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SPONSORS ================= */}

      <section className="py-5 bg-white">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">
              Our Sponsors
            </h2>

            <p className="text-muted fs-5">
              Proudly supported by leading global brands.
            </p>

          </div>

          <div className="row justify-content-center align-items-center">

            {[
              {
                name: "Microsoft",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              },
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "OpenAI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
              },
              {
                name: "Tesla",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "Meta",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
              },
            ].map((item, index) => (

              <div
                className="col-lg-2 col-md-4 col-6 mb-4"
                key={index}
              >

                <div className="sponsor-card">

                  <img
                    src={item.logo}
                    alt={item.name}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section
        className="newsletter-section py-5"
      >

        <div className="container">

          <div className="newsletter-box">

            <div className="row align-items-center">

              <div className="col-lg-7">

                <h2 className="fw-bold text-white">

                  Never Miss an Event!

                </h2>

                <p className="text-light mt-3">

                  Subscribe to EventSphere and receive the latest expo,
                  exhibition and business networking updates directly
                  in your inbox.

                </p>

              </div>

              <div className="col-lg-5">

                <div className="input-group">

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                  />

                  <button className="btn btn-light">

                    Subscribe

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          <div className="row">

            <div className="col-lg-4 mb-4">

              <h3 className="fw-bold text-white">

                EventSphere

              </h3>

              <p className="text-light mt-3">

                Modern Expo & Event Management Platform
                connecting organizers, exhibitors and
                attendees in one place.

              </p>

            </div>

            <div className="col-lg-2 mb-4">

              <h5 className="text-white">
                Quick Links
              </h5>

              <ul className="footer-links">

                <li><a href="/">Home</a></li>

                <li><a href="/about">About</a></li>

                <li><a href="/contact">Contact</a></li>

              </ul>

            </div>

            <div className="col-lg-3 mb-4">

              <h5 className="text-white">

                Contact

              </h5>

              <p className="text-light">

                Karachi, Pakistan

              </p>

              <p className="text-light">

                info@eventsphere.com

              </p>

              <p className="text-light">

                +92 300 1234567

              </p>

            </div>

            <div className="col-lg-3">

              <h5 className="text-white">

                Follow Us

              </h5>

              <div className="d-flex gap-3 mt-3">

                <button className="social-btn">
                  F
                </button>

                <button className="social-btn">
                  X
                </button>

                <button className="social-btn">
                  I
                </button>

                <button className="social-btn">
                  L
                </button>

              </div>

            </div>

          </div>

          <hr className="border-secondary" />

          <div className="text-center text-light">

            © 2026 EventSphere. All Rights Reserved.

          </div>

        </div>

      </footer>

    </>
  );
};

export default Home;