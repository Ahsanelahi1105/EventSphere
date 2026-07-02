import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCalendarAlt,
  FaStore,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
  const [report, setReport] = useState({});

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/reports"
      );

      setReport(data.report);

    } catch (error) {

      console.log(error);

    }

  };

  const cards = [

    {
      title: "Total Expos",
      value: report.totalExpos || 0,
      icon: <FaCalendarAlt />,
      color: "primary",
    },

    {
      title: "Total Booths",
      value: report.totalBooths || 0,
      icon: <FaStore />,
      color: "success",
    },

    {
      title: "Exhibitors",
      value: report.totalExhibitors || 0,
      icon: <FaUsers />,
      color: "warning",
    },

    {
      title: "Sessions",
      value: report.totalSessions || 0,
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

            <div
              className="card border-0"
              style={{
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >

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
        <div className="row mt-4">

          <div className="col-lg-6">

            <div className="dashboard-box">

              <h5>System Overview</h5>

              <hr />

              <p>Total Expos : {report.totalExpos}</p>

              <p>Total Booths : {report.totalBooths}</p>

              <p>Total Exhibitors : {report.totalExhibitors}</p>

              <p>Total Sessions : {report.totalSessions}</p>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="dashboard-box">

              <h5>Statistics</h5>

              <hr />

              <p>Upcoming Expos : {report.upcomingExpos}</p>

              <p>Approved Exhibitors : {report.approvedExhibitors}</p>

              <p>Available Booths : {report.availableBooths}</p>

              <p>Occupied Booths : {report.occupiedBooths}</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
