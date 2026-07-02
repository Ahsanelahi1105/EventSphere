const Exhibitor = require("../../models/Exhibitor");

// ================= CREATE EXHIBITOR =================

const createExhibitor = async (req, res) => {
  try {
    const exhibitor = await Exhibitor.create(req.body);

    res.status(201).json({
      success: true,
      message: "Exhibitor Created Successfully",
      exhibitor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL EXHIBITORS =================

const getAllExhibitors = async (req, res) => {
  try {
    const exhibitors = await Exhibitor.find()
      .populate("expo", "title")
      .populate("booth", "boothNumber boothName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      exhibitors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE EXHIBITOR =================

const getExhibitorById = async (req, res) => {
  try {
    const exhibitor = await Exhibitor.findById(req.params.id)
      .populate("expo", "title")
      .populate("booth", "boothNumber boothName");

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor Not Found",
      });
    }

    res.status(200).json({
      success: true,
      exhibitor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE EXHIBITOR =================

const updateExhibitor = async (req, res) => {
  try {
    const exhibitor = await Exhibitor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Exhibitor Updated Successfully",
      exhibitor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE EXHIBITOR =================

const deleteExhibitor = async (req, res) => {
  try {
    await Exhibitor.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Exhibitor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createExhibitor,
  getAllExhibitors,
  getExhibitorById,
  updateExhibitor,
  deleteExhibitor,
};
