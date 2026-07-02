import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Analytics = () => {

  const [report, setReport] = useState({});

  useEffect(() => {

    getReport();

  }, []);

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

  const expoChart = {
    labels: ["Draft", "Upcoming", "Live", "Completed"],
    datasets: [
      {
        data: [
          report.draftExpos || 0,
          report.upcomingExpos || 0,
          report.liveExpos || 0,
          report.completedExpos || 0,
        ],
      },
    ],
  };

  const boothChart = {
    labels: ["Available", "Booked", "Occupied"],
    datasets: [
      {
        data: [
          report.availableBooths || 0,
          report.bookedBooths || 0,
          report.occupiedBooths || 0,
        ],
      },
    ],
  };

  const exhibitorChart = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        label: "Exhibitors",
        data: [
          report.pendingExhibitors || 0,
          report.approvedExhibitors || 0,
          report.rejectedExhibitors || 0,
        ],
      },
    ],
  };

  const sessionChart = {
    labels: ["Upcoming", "Live", "Completed"],
    datasets: [
      {
        label: "Sessions",
        data: [
          report.upcomingSessions || 0,
          report.liveSessions || 0,
          report.completedSessions || 0,
        ],
      },
    ],
  };

  return (

    <div className="container-fluid">

      <h2 className="mb-4">
        Analytics Dashboard
      </h2>

      <div className="row">

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-body">

              <h5 className="mb-3">
                Expo Status
              </h5>

              <Pie data={expoChart} />

            </div>

          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-body">

              <h5 className="mb-3">
                Booth Status
              </h5>

              <Pie data={boothChart} />

            </div>

          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-body">

              <h5 className="mb-3">
                Exhibitor Status
              </h5>

              <Bar data={exhibitorChart} />

            </div>

          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-body">

              <h5 className="mb-3">
                Session Status
              </h5>

              <Bar data={sessionChart} />

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Analytics;
