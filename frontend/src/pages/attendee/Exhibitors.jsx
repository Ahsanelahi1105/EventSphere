import React, { useState } from "react";
import {
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Exhibitors = () => {
  const [search, setSearch] = useState("");

  const exhibitors = [
    {
      id: 1,
      company: "Microsoft",
      category: "Technology",
      booth: "A-12",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Cloud, AI and Enterprise Solutions",
    },
    {
      id: 2,
      company: "Google",
      category: "Technology",
      booth: "B-05",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Search, AI & Cloud Products",
    },
    {
      id: 3,
      company: "OpenAI",
      category: "Artificial Intelligence",
      booth: "C-02",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      description: "Generative AI & GPT Solutions",
    },
    {
      id: 4,
      company: "Tesla",
      category: "Innovation",
      booth: "D-08",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      description: "Electric Vehicles & Robotics",
    },
  ];

  const filtered = exhibitors.filter((item) =>
    item.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">Exhibitors</h2>
          <p className="text-muted">
            Browse all participating companies
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="card border-0 shadow-sm mb-4">

        <div className="card-body">

          <div className="row">

            <div className="col-lg-6">

              <div className="input-group">

                <span className="input-group-text">
                  <FaSearch />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Company..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="col-lg-3">

              <select className="form-select">
                <option>All Categories</option>
                <option>Technology</option>
                <option>AI</option>
                <option>Healthcare</option>
                <option>Business</option>
              </select>

            </div>

          </div>

        </div>

      </div>

      {/* Cards */}

      <div className="row">

        {filtered.map((company) => (

          <div
            className="col-lg-6 mb-4"
            key={company.id}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "18px",
              }}
            >

              <div className="card-body">

                <div className="d-flex">

                  <img
                    src={company.image}
                    alt={company.company}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginRight: "20px",
                    }}
                  />

                  <div className="flex-grow-1">

                    <span className="badge bg-primary mb-2">
                      {company.category}
                    </span>

                    <h4 className="fw-bold">
                      {company.company}
                    </h4>

                    <p className="text-muted">
                      {company.description}
                    </p>

                    <p className="mb-3">

                      <FaMapMarkerAlt className="text-danger me-2" />

                      Booth {company.booth}

                    </p>

                    <button className="btn btn-primary">

                      View Profile

                      <FaArrowRight className="ms-2" />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Exhibitors;