
import React, { useEffect, useState } from "react";
import axios from "axios";

import ExhibitorModal from "../../components/admin/ExhibitorModal";

import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const ExhibitorManagement = () => {

  const [exhibitors, setExhibitors] = useState([]);
  const [expos, setExpos] = useState([]);
  const [booths, setBooths] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    category: "",
    expo: "",
    booth: "",
    status: "Pending",
    description: "",
  });


  // ================= GET EXHIBITORS =================

  const getExhibitors = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/exhibitors"
      );

      setExhibitors(data.exhibitors);
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

  useEffect(() => {
    getExhibitors();
    getExpos();
    getBooths();
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
          `http://localhost:5000/api/exhibitors/${editingId}`,
          formData
        );

        alert("Exhibitor Updated Successfully");

      } else {

        await axios.post(
          "http://localhost:5000/api/exhibitors",
          formData
        );

        alert("Exhibitor Created Successfully");

      }

      setShowModal(false);

      setEditingId(null);

      setFormData({
        companyName: "",
        ownerName: "",
        email: "",
        phone: "",
        category: "",
        expo: "",
        booth: "",
        status: "Pending",
        description: "",
      });

      getExhibitors();

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
      companyName: item.companyName,
      ownerName: item.ownerName,
      email: item.email,
      phone: item.phone,
      category: item.category,
      expo: item.expo?._id || "",
      booth: item.booth?._id || "",
      status: item.status,
      description: item.description,
    });

    setShowModal(true);

  };

  // ================= DELETE =================

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this exhibitor?")) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/exhibitors/${id}`
      );

      alert("Exhibitor Deleted Successfully");

      getExhibitors();

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

        <h2>Exhibitor Management</h2>

        <button
          className="btn btn-primary"
          onClick={() => {

            setEditingId(null);

            setFormData({
              companyName: "",
              ownerName: "",
              email: "",
              phone: "",
              category: "",
              expo: "",
              booth: "",
              status: "Pending",
              description: "",
            });

            setShowModal(true);

          }}
        >
          + Add Exhibitor
        </button>

      </div>

      <input
        className="form-control mb-3"
        style={{ width: "35%" }}
        placeholder="Search Exhibitor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card shadow border-0">

        <div className="card-body">

          <table className="table table-hover">

            <thead>

              <tr>

                <th>Company</th>

                <th>Owner</th>

                <th>Expo</th>

                <th>Booth</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {exhibitors
                .filter((item) =>
                  item.companyName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((item) => (

                  <tr key={item._id}>

                    <td>{item.companyName}</td>

                    <td>{item.ownerName}</td>

                    <td>{item.expo?.title}</td>

                    <td>
                      {item.booth
                        ? `${item.booth.boothNumber} - ${item.booth.boothName}`
                        : "-"}
                    </td>

                    <td>

                      <span
                        className={`badge ${item.status === "Approved"
                            ? "bg-success"
                            : item.status === "Rejected"
                              ? "bg-danger"
                              : "bg-warning text-dark"
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

              {exhibitors.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-5"
                  >
                    No Exhibitors Found
                  </td>

                </tr>

              )}

            </tbody>


          </table>

        </div>

      </div>

      <ExhibitorModal
        show={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        expos={expos}
        booths={booths}
      />

    </div>
  );

};


export default ExhibitorManagement;
