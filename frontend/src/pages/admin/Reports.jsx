import React, { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {

  const [report, setReport] = useState({});

  const getReport = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/reports"
      );

      setReport(data.report);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    getReport();
  }, []);

  const cards = [
    {
      title: "Total Expos",
      value: report.totalExpos,
      color: "primary",
    },
    {
      title: "Total Booths",
      value: report.totalBooths,
      color: "success",
    },
    {
      title: "Total Exhibitors",
      value: report.totalExhibitors,
      color: "warning",
    },
    {
      title: "Total Sessions",
      value: report.totalSessions,
      color: "info",
    },
    {
      title: "Upcoming Expos",
      value: report.upcomingExpos,
      color: "secondary",
    },
    {
      title: "Approved Exhibitors",
      value: report.approvedExhibitors,
      color: "dark",
    },
    {
      title: "Available Booths",
      value: report.availableBooths,
      color: "success",
    },
    {
      title: "Occupied Booths",
      value: report.occupiedBooths,
      color: "danger",
    },
  ];

  return (

    <div className="container-fluid">

      <h2 className="mb-4">
        Reports Dashboard
      </h2>

      <div className="row">

        {cards.map((card, index) => (

          <div
            className="col-lg-3 col-md-6 mb-4"
            key={index}
          >

            <div
              className={`card border-0 shadow bg-${card.color} text-white`}
            >

              <div className="card-body text-center">

                <h6>{card.title}</h6>

                <h2 className="fw-bold mt-3">
                  {card.value || 0}
                </h2>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Reports;
