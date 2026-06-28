
import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpoModal from "../../components/admin/ExpoModal";
import { FaEdit, FaTrash } from "react-icons/fa";

const ExpoManagement = () => {
  const [expos, setExpos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState(""); const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    venue: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    registrationFee: "",
    maxExhibitors: "",
    status: "Draft",
  });

  // Temporary Admin ID
  const createdBy = "6a37ecc6bbd23a41cda05486";

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
    getExpos();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => { try { if (editingId) { await axios.put(`http://localhost:5000/api/expos/${editingId}`, formData); alert("Expo Updated Successfully"); } else { await axios.post("http://localhost:5000/api/expos", { ...formData, createdBy, }); alert("Expo Created Successfully"); } setShowModal(false); setEditingId(null); setFormData({ title: "", description: "", category: "", venue: "", city: "", country: "", startDate: "", endDate: "", startTime: "", endTime: "", registrationFee: "", maxExhibitors: "", status: "Draft", }); getExpos(); } catch (error) { alert(error.response?.data?.message); } };

  const handleEdit = (expo) => { setEditingId(expo._id); setFormData({ title: expo.title, description: expo.description, category: expo.category, venue: expo.venue, city: expo.city, country: expo.country, startDate: expo.startDate?.substring(0, 10), endDate: expo.endDate?.substring(0, 10), startTime: expo.startTime, endTime: expo.endTime, registrationFee: expo.registrationFee, maxExhibitors: expo.maxExhibitors, status: expo.status, }); setShowModal(true); };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expo?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/expos/${id}`
      );

      alert("Expo Deleted Successfully");

      getExpos();

    } catch (error) {

      alert(error.response?.data?.message);

    }

  };


  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Expo Management</h2>

        <div className="input-group mb-3" style={{ width: "35%" }}>
          <span className="input-group-text">
            🔍
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search Expo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          + Add Expo
        </button>

      </div>

      <div className="card">

        <div className="card-body">

          <table className="table">

            <thead>

              <tr>

                <th>Title</th>
                <th>Category</th>
                <th>City</th>
                <th>Status</th>
                {/* <td> <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(expo)} > <FaEdit /> </button> <button className="btn btn-danger btn-sm" > <FaTrash /> </button> </td> */}
                <th className="text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {expos.filter((expo) => expo.title.toLowerCase().includes(search.toLowerCase())).map((expo) => (

                <tr key={expo._id}>

                  <td>{expo.title}</td>

                  <td>{expo.category}</td>

                  <td>{expo.city}</td>

                  <td>
                    <span
                      className={`badge ${expo.status === "Upcoming"
                        ? "bg-success"
                        : expo.status === "Draft"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                        }`}
                    >
                      {expo.status}
                    </span>
                  </td>
                  <td className="text-center">

                    <button
                      className="btn btn-outline-warning btn-sm me-2"
                      onClick={() => handleEdit(expo)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(expo._id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <ExpoModal
        show={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

    </div>
  );
};

export default ExpoManagement;

