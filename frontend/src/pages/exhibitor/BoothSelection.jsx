import React, { useState, useEffect } from "react";
import axios from "axios";

// const booths = [
//   { id: "A1", status: "available" },
//   { id: "A2", status: "reserved" },
//   { id: "A3", status: "available" },
//   { id: "A4", status: "reserved" },

//   { id: "B1", status: "available" },
//   { id: "B2", status: "available" },
//   { id: "B3", status: "reserved" },
//   { id: "B4", status: "available" },

//   { id: "C1", status: "available" },
//   { id: "C2", status: "reserved" },
//   { id: "C3", status: "available" },
//   { id: "C4", status: "available" },
// ];

const BoothSelection = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [booths, setBooths] = useState([]);

  const [selected, setSelected] = useState("");

  const [exhibitorId, setExhibitorId] = useState("");

  const [loading, setLoading] = useState(true);

  const loadBooths = async () => {

    try {

      // Logged in Exhibitor

      const { data: exhibitorData } = await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      setExhibitorId(exhibitorData.exhibitor._id);

      // My Applications

      const { data: applicationData } = await axios.get(
        `http://localhost:5000/api/applications/${exhibitorData.exhibitor._id}`
      );

      const approvedApplication =
        applicationData.applications.find(
          (a) => a.status === "Approved"
        );

      if (!approvedApplication) {
        alert("Your application is not approved yet.");
        return;
      }

      // Available Booths

      const { data } = await axios.get(
        `http://localhost:5000/api/booths/expo/${approvedApplication.expo._id}`
      );

      if (data.success) {
        setBooths(data.booths);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    loadBooths();
  }, []);

  const reserveBooth = async () => {

    if (!selected) return;

    try {

      const { data } = await axios.put(
        `http://localhost:5000/api/booths/book/${selected}`,
        {
          exhibitorId,
        }
      );

      alert(data.message);

      loadBooths();

      setSelected("");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

    }

  };

  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Booth Selection
        </h2>

        <p className="text-muted">
          Choose your preferred booth.
        </p>

      </div>

      {/* Legend */}

      <div className="d-flex gap-4 mb-4">

        <div>
          🟢 Available
        </div>

        <div>
          🔴 Reserved
        </div>

        <div>
          🔵 Selected
        </div>

      </div>

      <div
        className="card border-0 shadow-sm"
        style={{
          borderRadius: "15px",
        }}
      >

        <div className="card-body">

          <div className="row">

            {booths.map((booth) => (

              <div
                className="col-lg-3 col-md-4 col-6 mb-4"
                key={booth._id}
              >

                <div
                  onClick={() => {
                    if (booth.status === "Available") {
                      setSelected(booth._id);
                    }
                  }}
                  style={{
                    cursor:
                      booth.status === "Booked"
                        ? "not-allowed"
                        : "pointer",

                    background:
                      selected === booth._id
                        ? "#3B82F6"
                        : booth.status === "Available"
                          ? "#22C55E"
                          : "#EF4444",

                    color: "#fff",

                    height: "110px",

                    borderRadius: "15px",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    flexDirection: "column",

                    transition: ".3s",
                  }}
                >

                  <h3>{booth.boothNumber}</h3>

                  <small>

                    {selected === booth._id
                      ? "Selected"
                      : booth.status}

                  </small>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="text-end mt-4">

        <button
          className="btn btn-primary px-5"
          disabled={!selected}
          onClick={reserveBooth}
        >
          Book Booth
        </button>

      </div>

    </div>
  );
};

export default BoothSelection;