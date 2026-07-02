import React from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const Notifications = () => {

  const notifications = [
    {
      id: 1,
      title: "Upcoming Event Reminder",
      message:
        "AI & Technology Expo will start tomorrow at 9:00 AM.",
      time: "10 minutes ago",
      icon: <FaCalendarAlt />,
      color: "primary",
    },
    {
      id: 2,
      title: "Session Registration Confirmed",
      message:
        "You have successfully registered for Future of AI session.",
      time: "1 hour ago",
      icon: <FaCheckCircle />,
      color: "success",
    },
    {
      id: 3,
      title: "New Exhibitor Joined",
      message:
        "Microsoft has joined AI & Technology Expo 2026.",
      time: "Today",
      icon: <FaInfoCircle />,
      color: "warning",
    },
    {
      id: 4,
      title: "System Notification",
      message:
        "Welcome to EventSphere. Explore upcoming events now!",
      time: "Yesterday",
      icon: <FaBell />,
      color: "danger",
    },
  ];

  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Notifications
        </h2>

        <p className="text-muted">
          Stay updated with the latest announcements
        </p>

      </div>

      <div className="card border-0 shadow-sm">

        <div className="card-body">

          {notifications.map((item) => (

            <div
              key={item.id}
              className="d-flex align-items-start p-3 border-bottom"
            >

              <div
                className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3`}
                style={{
                  width: 55,
                  height: 55,
                  fontSize: 22,
                }}
              >
                {item.icon}
              </div>

              <div className="flex-grow-1">

                <h5 className="fw-bold mb-1">
                  {item.title}
                </h5>

                <p className="text-muted mb-1">
                  {item.message}
                </p>

                <small className="text-secondary">
                  {item.time}
                </small>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Notifications;