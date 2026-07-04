import React from "react";
import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <>

      {/* Hero */}

      <section className="about-hero">

        <div className="container text-center">

          <h1 className="display-3 fw-bold">
            About EventSphere
          </h1>

          <p className="lead mt-4">

            EventSphere is a modern Event & Expo Management
            System designed to connect organizers,
            exhibitors and attendees on one smart platform.

          </p>

        </div>

      </section>

      {/* Story */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
                className="img-fluid rounded-4 shadow"
                alt=""
              />

            </div>

            <div className="col-lg-6">

              <h2 className="fw-bold mb-4">

                Our Story

              </h2>

              <p className="text-muted">

                EventSphere was built to simplify expo
                management for organizers while providing
                exhibitors and attendees with a seamless
                digital experience.

              </p>

              <p className="text-muted">

                From booth reservation to session
                management and networking, everything
                is managed through one modern platform.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row">

            <div className="col-lg-4 mb-4">

              <div className="feature-card text-center">

                <FaBullseye
                  className="display-4 text-primary"
                />

                <h4 className="mt-3">
                  Mission
                </h4>

                <p className="text-muted">
                  Simplify event management through
                  innovation.
                </p>

              </div>

            </div>

            <div className="col-lg-4 mb-4">

              <div className="feature-card text-center">

                <FaEye
                  className="display-4 text-success"
                />

                <h4 className="mt-3">
                  Vision
                </h4>

                <p className="text-muted">
                  Become the leading Expo Management
                  Platform.
                </p>

              </div>

            </div>

            <div className="col-lg-4 mb-4">

              <div className="feature-card text-center">

                <FaAward
                  className="display-4 text-warning"
                />

                <h4 className="mt-3">
                  Excellence
                </h4>

                <p className="text-muted">
                  Deliver premium experiences to
                  organizers and visitors.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Team */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">

              Meet Our Team

            </h2>

          </div>

          <div className="row">

            {[1,2,3,4].map((item)=>(

              <div
                className="col-lg-3 col-md-6 mb-4"
                key={item}
              >

                <div className="testimonial-card">

                  <img
                    src={`https://randomuser.me/api/portraits/men/${20+item}.jpg`}
                    className="testimonial-img"
                    alt=""
                  />

                  <h5 className="mt-3 fw-bold">
                    Team Member {item}
                  </h5>

                  <small className="text-primary">
                    Developer
                  </small>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default About;