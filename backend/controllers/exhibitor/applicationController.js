
const Application = require("../../models/Application");

// ===============================================
// APPLY FOR EXPO
// POST /api/applications
// ===============================================

const applyExpo = async (req, res) => {
  try {
    const { exhibitor, expo } = req.body;

    // Check duplicate application

    const existingApplication = await Application.findOne({
      exhibitor,
      expo,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this expo.",
      });
    }

    const application = await Application.create({
      exhibitor,
      expo,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      application,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================================
// GET MY APPLICATIONS
// GET /api/applications/:id
// ===============================================

const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      exhibitor: req.params.id,
    })
      .populate("expo")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// GET ALL APPLICATIONS (ADMIN)
// ==============================

const getAllApplications = async (req, res) => {
  try {

    const applications = await Application.find()
      .populate("expo")
      .populate("exhibitor")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      applications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// UPDATE APPLICATION STATUS
// ==============================

const updateApplicationStatus = async (req, res) => {

  try {

    const application =
      await Application.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          new: true,
        }
      );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application Updated Successfully",
      application,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  applyExpo,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus,
};
