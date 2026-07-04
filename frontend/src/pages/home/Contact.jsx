import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>

      {/* Hero */}

      <section className="contact-hero">

        <div className="container text-center">

          <h1 className="display-3 fw-bold">

            Contact Us

          </h1>

          <p className="lead mt-3">

            We'd love to hear from you. Get in touch with our team.

          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="py-5">

        <div className="container">

          <div className="row">

            {/* Left */}

            <div className="col-lg-5 mb-4">

              <div className="custom-card h-100">

                <h2 className="fw-bold mb-4">

                  Contact Information

                </h2>

                <div className="mb-4 d-flex">

                  <FaPhoneAlt
                    className="text-primary me-3 mt-1"
                    size={22}
                  />

                  <div>

                    <h6>Phone</h6>

                    <p className="text-muted">

                      +92 300 1234567

                    </p>

                  </div>

                </div>

                <div className="mb-4 d-flex">

                  <FaEnvelope
                    className="text-primary me-3 mt-1"
                    size={22}
                  />

                  <div>

                    <h6>Email</h6>

                    <p className="text-muted">

                      info@eventsphere.com

                    </p>

                  </div>

                </div>

                <div className="mb-4 d-flex">

                  <FaMapMarkerAlt
                    className="text-primary me-3 mt-1"
                    size={22}
                  />

                  <div>

                    <h6>Address</h6>

                    <p className="text-muted">

                      Karachi, Pakistan

                    </p>

                  </div>

                </div>

                <div className="d-flex">

                  <FaClock
                    className="text-primary me-3 mt-1"
                    size={22}
                  />

                  <div>

                    <h6>Working Hours</h6>

                    <p className="text-muted">

                      Mon - Fri | 9:00 AM - 6:00 PM

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="col-lg-7">

              <div className="custom-card">

                <h2 className="fw-bold mb-4">

                  Send us a Message

                </h2>

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />

                    </div>

                    <div className="col-md-6 mb-3">

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />

                    </div>

                  </div>

                  <div className="mb-3">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />

                  </div>

                  <div className="mb-4">

                    <textarea
                      rows="6"
                      className="form-control"
                      placeholder="Write your message..."
                    ></textarea>

                  </div>

                  <button className="btn btn-primary btn-lg">

                    <FaPaperPlane className="me-2" />

                    Send Message

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-5">

        <div className="container">

          <div
            className="rounded-4 overflow-hidden shadow"
            style={{ height: "420px" }}
          >

            <iframe
              title="map"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>

          </div>

        </div>

      </section>

    </>
  );
};

export default Contact;