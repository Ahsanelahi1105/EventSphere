const Booth = require("../../models/Booth");

// ================= CREATE BOOTH =================

const createBooth = async (req, res) => {
  try {
    const booth = await Booth.create(req.body);

    res.status(201).json({
      success: true,
      message: "Booth Created Successfully",
      booth,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL BOOTHS =================

const getAllBooths = async (req, res) => {
  try {
    const booths = await Booth.find()
      .populate("expo", "title")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      booths,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE BOOTH =================

const getBoothById = async (req, res) => {
  try {
    const booth = await Booth.findById(req.params.id).populate(
      "expo",
      "title"
    );

    if (!booth) {
      return res.status(404).json({
        success: false,
        message: "Booth Not Found",
      });
    }

    res.status(200).json({
      success: true,
      booth,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE BOOTH =================

const updateBooth = async (req, res) => {
  try {
    const booth = await Booth.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booth Updated Successfully",
      booth,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE BOOTH =================

const deleteBooth = async (req, res) => {
  try {
    await Booth.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Booth Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooth,
  getAllBooths,
  getBoothById,
  updateBooth,
  deleteBooth,
};
