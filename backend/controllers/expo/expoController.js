const Expo = require("../../models/Expo");

// ================= CREATE EXPO =================

const createExpo = async (req, res) => {
  try {

    const expo = await Expo.create(req.body);

    res.status(201).json({
      success: true,
      message: "Expo Created Successfully",
      expo,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= GET ALL EXPOS =================

const getAllExpos = async (req, res) => {
  try {

    const expos = await Expo.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      expos,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= GET SINGLE EXPO =================

const getExpoById = async (req, res) => {
  try {

    const expo = await Expo.findById(req.params.id);

    if (!expo) {
      return res.status(404).json({
        success: false,
        message: "Expo Not Found",
      });
    }

    res.status(200).json({
      success: true,
      expo,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= UPDATE EXPO =================

const updateExpo = async (req, res) => {
  try {

    const expo = await Expo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Expo Updated Successfully",
      expo,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= DELETE EXPO =================

const deleteExpo = async (req, res) => {
  try {

    await Expo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Expo Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= ACTIVE EXPOS =================

const getActiveExpos = async (req, res) => {
  try {

    const expos = await Expo.find({
      status: "Active",
    }).sort({
      startDate: 1,
    });

    res.status(200).json({
      success: true,
      expos,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createExpo,
  getAllExpos,
  getExpoById,
  updateExpo,
  deleteExpo,
  getActiveExpos,
};
