import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCalendarAlt,
  FaStore,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
  const [totalExpos, setTotalExpos] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/expos"
      );

      setTotalExpos(data.expos.length);

    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Total Expos",
      value: totalExpos,
      icon: <FaCalendarAlt />,
      color: "primary",
    },
    {
      title: "Total Booths",
      value: 0,
      icon: <FaStore />,
      color: "success",
    },
    {
      title: "Exhibitors",
      value: 0,
      icon: <FaUsers />,
      color: "warning",
    },
    {
      title: "Applications",
      value: 0,
      icon: <FaClipboardList />,
      color: "danger",
    },
  ];

  return (
    <div className="container-fluid">

      <h2 className="fw-bold mb-4">
        Dashboard
      </h2>

      <div className="row">

        {cards.map((card, index) => (

          <div
            className="col-lg-3 col-md-6 mb-4"
            key={index}
          >

            <div className="card shadow border-0">

              <div className="card-body d-flex justify-content-between align-items-center">

                <div>

                  <h6 className="text-muted">
                    {card.title}
                  </h6>

                  <h2 className="fw-bold">
                    {card.value}
                  </h2>

                </div>

                <div
                  className={`bg-${card.color} text-white rounded-circle d-flex align-items-center justify-content-center`}
                  style={{
                    width: 60,
                    height: 60,
                    fontSize: 24,
                  }}
                >
                  {card.icon}
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="card shadow border-0">

        <div className="card-body">

          <h4>
            Welcome to EventSphere Admin Dashboard 👋
          </h4>

          <p className="text-muted mb-0">
            Manage expos, booths, exhibitors, attendees,
            reports and analytics from one place.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
