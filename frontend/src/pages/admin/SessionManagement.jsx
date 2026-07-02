import React, { useEffect, useState } from "react";
import axios from "axios";

import SessionModal from "../../components/admin/SessionModal";

import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";


const SessionManagement = () => {

  const [sessions, setSessions] = useState([]);

  const [expos, setExpos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    speakerName: "",
    expo: "",
    sessionDate: "",
    startTime: "",
    endTime: "",
    hall: "",
    description: "",
    status: "Upcoming",
  });

  // ================= GET SESSIONS =================

  const getSessions = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/sessions"
      );

      setSessions(data.sessions);

    } catch (error) {

      console.log(error);

    }
  };

  // ================= GET EXPOS =================

  const getExpos = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/expos"
      );

      setExpos(data.expos);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    getSessions();

    getExpos();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // ================= ADD / UPDATE =================

  const handleSubmit = async () => {
    try {

      if (editingId) {

        await axios.put(
          `http://localhost:5000/api/sessions/${editingId}`,
          formData
        );

        alert("Session Updated Successfully");

      } else {

        await axios.post(
          "http://localhost:5000/api/sessions",
          formData
        );

        alert("Session Created Successfully");

      }

      setShowModal(false);

      setEditingId(null);

      setFormData({
        title: "",
        speakerName: "",
        expo: "",
        sessionDate: "",
        startTime: "",
        endTime: "",
        hall: "",
        description: "",
        status: "Upcoming",
      });

      getSessions();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  // ================= EDIT =================

  const handleEdit = (item) => {

    setEditingId(item._id);

    setFormData({
      title: item.title,
      speakerName: item.speakerName,
      expo: item.expo?._id || "",
      sessionDate: item.sessionDate?.split("T")[0] || "",
      startTime: item.startTime,
      endTime: item.endTime,
      hall: item.hall,
      description: item.description,
      status: item.status,
    });

    setShowModal(true);

  };

  // ================= DELETE =================

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this session?")) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/sessions/${id}`
      );

      alert("Session Deleted Successfully");

      getSessions();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Delete Failed"
      );

    }

  };



  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Session Management</h2>

        <button
          className="btn btn-primary"
          onClick={() => {

            setEditingId(null);

            setFormData({
              title: "",
              speakerName: "",
              expo: "",
              sessionDate: "",
              startTime: "",
              endTime: "",
              hall: "",
              description: "",
              status: "Upcoming",
            });

            setShowModal(true);

          }}
        >
          + Add Session
        </button>

      </div>

      <input
        className="form-control mb-3"
        style={{ width: "35%" }}
        placeholder="Search Session..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card shadow border-0">

        <div className="card-body">

          <table className="table table-hover align-middle">

            <thead>

              <tr>

                <th>Title</th>
                <th>Speaker</th>
                <th>Expo</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {sessions
                .filter((item) =>
                  item.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((item) => (

                  <tr key={item._id}>

                    <td>{item.title}</td>

                    <td>{item.speakerName}</td>

                    <td>{item.expo?.title}</td>

                    <td>
                      {new Date(item.sessionDate).toLocaleDateString()}
                    </td>

                    <td>

                      <span
                        className={`badge ${item.status === "Upcoming"
                            ? "bg-primary"
                            : item.status === "Live"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item._id)}
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>

                ))}

              {sessions.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-5"
                  >
                    No Sessions Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      <SessionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        expos={expos}
      />

    </div>
  );


};

export default SessionManagement;
