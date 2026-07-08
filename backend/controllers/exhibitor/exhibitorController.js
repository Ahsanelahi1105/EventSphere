const Exhibitor = require("../../models/Exhibitor");
const Application = require("../../models/Application");

// ======================================================
// CREATE EXHIBITOR PROFILE
// ======================================================

const createExhibitor = async (req, res) => {
  try {

    const {
      user,
      companyName,
      ownerName,
      email,
      phone,
      website,
      logo,
      businessCategory,
      address,
      description,
      products,
    } = req.body;

    // Check Existing Profile

    const existingExhibitor = await Exhibitor.findOne({ user });

    if (existingExhibitor) {
      return res.status(400).json({
        success: false,
        message: "Exhibitor profile already exists.",
      });
    }

    const exhibitor = await Exhibitor.create({
      user,
      companyName,
      ownerName,
      email,
      phone,
      website,
      logo,
      businessCategory,
      address,
      description,
      products,
    });

    res.status(201).json({
      success: true,
      message: "Exhibitor profile created successfully.",
      exhibitor,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================================
// GET ALL EXHIBITORS
// ======================================================

const getAllExhibitors = async (req, res) => {
  try {

    const exhibitors = await Exhibitor.find()
      .populate("user", "firstName lastName email phone")
      .populate("expo", "title")
      .populate("booth", "boothNumber boothName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: exhibitors.length,
      exhibitors,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================================
// GET SINGLE EXHIBITOR (BY USER ID)
// ======================================================

const getExhibitorById = async (req, res) => {
  try {

    const exhibitor = await Exhibitor.findOne({
      user: req.params.id,
    })
      .populate("user", "firstName lastName email phone")
      .populate("expo", "title")
      .populate("booth", "boothNumber boothName");

    if (!exhibitor) {

      return res.status(404).json({
        success: false,
        message: "Exhibitor profile not found.",
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

// ======================================================
// UPDATE EXHIBITOR PROFILE
// ======================================================

const updateExhibitor = async (req, res) => {
  try {

    const exhibitor = await Exhibitor.findOneAndUpdate(
      {
        user: req.params.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!exhibitor) {

      return res.status(404).json({
        success: false,
        message: "Exhibitor profile not found.",
      });

    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      exhibitor,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================================
// DELETE EXHIBITOR
// ======================================================

const deleteExhibitor = async (req, res) => {
  try {

    const exhibitor = await Exhibitor.findOneAndDelete({
      user: req.params.id,
    });

    if (!exhibitor) {

      return res.status(404).json({
        success: false,
        message: "Exhibitor profile not found.",
      });

    }

    res.status(200).json({
      success: true,
      message: "Profile deleted successfully.",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ================= APPROVED EXHIBITORS =================

const getApprovedExhibitors = async (req, res) => {
  try {

    const applications = await Application.find({
      status: "Approved",
    })
      .populate({
        path: "exhibitor",
        populate: [
          {
            path: "booth",
          },
          {
            path: "expo",
            select: "title",
          },
        ],
      });

    const exhibitors = [
      ...new Map(
        applications.map((item) => [
          item.exhibitor._id.toString(),
          item.exhibitor,
        ])
      ).values(),
    ];

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

module.exports = {
  createExhibitor,
  getAllExhibitors,
  getExhibitorById,
  updateExhibitor,
  deleteExhibitor,
  getApprovedExhibitors,
};
