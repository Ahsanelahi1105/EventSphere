import React, { useState } from "react";

const booths = [
  { id: "A1", status: "available" },
  { id: "A2", status: "reserved" },
  { id: "A3", status: "available" },
  { id: "A4", status: "reserved" },

  { id: "B1", status: "available" },
  { id: "B2", status: "available" },
  { id: "B3", status: "reserved" },
  { id: "B4", status: "available" },

  { id: "C1", status: "available" },
  { id: "C2", status: "reserved" },
  { id: "C3", status: "available" },
  { id: "C4", status: "available" },
];

const BoothSelection = () => {

  const [selected, setSelected] = useState("");

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
                key={booth.id}
              >

                <div
                  onClick={() => {

                    if (
                      booth.status === "available"
                    ) {
                      setSelected(booth.id);
                    }

                  }}
                  style={{
                    cursor:
                      booth.status === "reserved"
                        ? "not-allowed"
                        : "pointer",

                    background:
                      selected === booth.id
                        ? "#3B82F6"
                        : booth.status === "available"
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

                  <h3>

                    {booth.id}

                  </h3>

                  <small>

                    {selected === booth.id
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
        >

          Reserve Booth

        </button>

      </div>

    </div>
  );
};

export default BoothSelection;