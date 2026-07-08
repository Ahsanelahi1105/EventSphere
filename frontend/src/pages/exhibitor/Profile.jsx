import React, { useEffect, useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaBuilding,
  FaSave,
} from "react-icons/fa";

import axios from "axios";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const [isProfileExist, setIsProfileExist] = useState(false);

  const [profile, setProfile] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    website: "",
    businessCategory: "",
    address: "",
    description: "",
    logo: "",
  });

  const getProfile = async () => {

    try {

      const { data } = await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      if (data.success) {
        setProfile(data.exhibitor);
        setIsProfileExist(true);
      }

    } catch (error) {

      setIsProfileExist(false);

    }

  };

  useEffect(() => {
    getProfile();
  }, []);

  const saveProfile = async () => {

    try {

      await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      // Profile Exists

      const { data } = await axios.put(
        `http://localhost:5000/api/exhibitors/${user.id}`,
        {
          ...profile,
          user: user.id,
        }
      );

      alert(data.message);

    }

    catch (error) {

      if (error.response?.status === 404) {

        const { data } = await axios.post(
          "http://localhost:5000/api/exhibitors",
          {
            ...profile,
            user: user.id,
          }
        );

        alert(data.message);

        getProfile();

      }

      else {

        alert(
          error.response?.data?.message ||
          "Something went wrong"
        );

      }

    }

  };


  return (
    <div className="container-fluid">

      <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>

        {/* Cover */}

        <div
          style={{
            height: "180px",
            background:
              "linear-gradient(135deg,#4F46E5,#7C3AED)",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        ></div>

        <div className="card-body">

          <div className="row">

            {/* Left */}

            <div className="col-lg-4 text-center">

              <div
                style={{
                  marginTop: "-90px",
                }}
              >

                <img
                  src={
                    profile.logo
                      ? profile.logo
                      : "https://ui-avatars.com/api/?name=Company"
                  }
                  alt=""
                  className="rounded-circle shadow"
                  width="170"
                  height="170"
                />

                <br />

                <button className="btn btn-outline-primary mt-3">

                  <FaCamera className="me-2" />

                  Upload Logo

                </button>

              </div>

              <h3 className="fw-bold mt-4">

                {profile.companyName}

              </h3>

              <span className="badge bg-success">

                Premium Exhibitor

              </span>

            </div>

            {/* Right */}

            <div className="col-lg-8">

              <h4 className="fw-bold mb-4">

                Company Information

              </h4>

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    Company Name

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={profile.companyName}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        companyName: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    Owner Name

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={profile.ownerName}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        ownerName: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaEnvelope className="me-2" />

                    Email

                  </label>

                  <input
                    type="email"
                    className="form-control"
                    value={profile.email}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        email: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaPhone className="me-2" />

                    Phone

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={profile.phone}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        phone: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaGlobe className="me-2" />

                    Website

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={profile.website}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        website: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaBuilding className="me-2" />

                    Business Category

                  </label>

                  <select className="form-select">

                    {/* value={profile.businessCategory}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        businessCategory: e.target.value
                      })
                    } */}

                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Business</option>

                  </select>

                </div>

                <div className="col-12 mb-3">

                  <label className="form-label">

                    <FaMapMarkerAlt className="me-2" />

                    Address

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={profile.address}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        address: e.target.value
                      })
                    }
                  />

                </div>

                <div className="col-12 mb-4">

                  <label className="form-label">

                    Company Description

                  </label>

                  <textarea
                    rows="5"
                    className="form-control"
                    value={profile.description}

                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        description: e.target.value
                      })
                    }
                  ></textarea>

                </div>

                <div className="col-12">

                  <button
                    className="btn btn-primary px-5"
                    onClick={saveProfile}
                  >

                    <FaSave className="me-2" />

                    Save Changes

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;