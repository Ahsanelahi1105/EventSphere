import React, { useEffect, useState } from "react";
import axios from "axios";

import BoothModal from "../../components/admin/BoothModal";

import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";


const BoothManagement = () => {

  const [booths, setBooths] = useState([]);

  const [expos, setExpos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    expo: "",
    boothNumber: "",
    boothName: "",
    boothSize: "",
    price: "",
    status: "Available",
    description: "",
  });


  // ================= GET BOOTHS =================

  const getBooths = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/booths"
      );

      setBooths(data.booths);

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

  // ================= LOAD DATA =================

  useEffect(() => {
    getBooths();
    getExpos();
  }, []);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= ADD / UPDATE BOOTH =================

  const handleSubmit = async () => {
    try {

      if (editingId) {

        await axios.put(
          `http://localhost:5000/api/booths/${editingId}`,
          formData
        );

        alert("Booth Updated Successfully");

      } else {

        await axios.post(
          "http://localhost:5000/api/booths",
          formData
        );

        alert("Booth Created Successfully");

      }

      setShowModal(false);

      setEditingId(null);

      setFormData({
        expo: "",
        boothNumber: "",
        boothName: "",
        boothSize: "",
        price: "",
        status: "Available",
        description: "",
      });

      getBooths();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }
  };

  // ================= EDIT BOOTH =================

  const handleEdit = (booth) => {

    setEditingId(booth._id);

    setFormData({
      expo: booth.expo?._id || "",
      boothNumber: booth.boothNumber,
      boothName: booth.boothName,
      boothSize: booth.boothSize,
      price: booth.price,
      status: booth.status,
      description: booth.description,
    });

    setShowModal(true);

  };

  // ================= DELETE BOOTH =================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booth?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/booths/${id}`
      );

      alert("Booth Deleted Successfully");

      getBooths();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Delete failed"
      );

    }

  };



  return (

    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Booth Management</h2>

        <button
          className="btn btn-primary"
          onClick={() => {
            setEditingId(null);

            setFormData({
              expo: "",
              boothNumber: "",
              boothName: "",
              boothSize: "",
              price: "",
              status: "Available",
              description: "",
            });

            setShowModal(true);
          }}
        >
          + Add Booth
        </button>

      </div>

      <div
        className="input-group mb-3"
        style={{ width: "35%" }}
      >

        <span className="input-group-text">
          🔍
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Search Booth..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="card shadow border-0">

        <div className="card-body">

          <table className="table table-hover align-middle">

            <thead>

              <tr>

                <th>Booth No</th>

                <th>Name</th>

                <th>Expo</th>

                <th>Size</th>

                <th>Price</th>

                <th>Status</th>

                <th className="text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {booths
                .filter((booth) =>
                  booth.boothName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((booth) => (

                  <tr key={booth._id}>

                    <td>{booth.boothNumber}</td>

                    <td>{booth.boothName}</td>

                    <td>{booth.expo?.title}</td>

                    <td>{booth.boothSize}</td>

                    <td>Rs. {booth.price}</td>

                    <td>
                      <span
                        className={`badge ${booth.status === "Available"
                            ? "bg-success"
                            : booth.status === "Reserved"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                          }`}
                      >
                        {booth.status}
                      </span>
                    </td>

                    <td className="text-center">

                      <button
                        className="btn btn-outline-warning btn-sm me-2"
                        onClick={() => handleEdit(booth)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(booth._id)}
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>

                ))}

              {booths.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-5"
                  >
                    No Booths Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      <BoothModal
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

export default BoothManagement;
