const Exhibitor = require("../../models/Exhibitor");

const Booth = require("../../models/Booth");
const PDFDocument = require("pdfkit");

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

// ================= GET AVAILABLE BOOTHS BY EXPO =================

const getAvailableBooths = async (req, res) => {
  try {

    const booths = await Booth.find({
      expo: req.params.expoId,
      status: "Available",
    });

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

// ================= BOOK BOOTH =================

const bookBooth = async (req, res) => {
  try {

    const { exhibitorId } = req.body;

    const booth = await Booth.findById(req.params.id);

    if (!booth) {
      return res.status(404).json({
        success: false,
        message: "Booth Not Found",
      });
    }

    if (booth.status !== "Available") {
      return res.status(400).json({
        success: false,
        message: "Booth Already Booked",
      });
    }

    booth.status = "Booked";

    await booth.save();

    booth.status = "Booked";
    booth.exhibitor = exhibitorId;

    await booth.save();

    res.status(200).json({
      success: true,
      message: "Booth Booked Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getMyBooth = async (req, res) => {
  try {

    const booth = await Booth.findOne({
      exhibitor: req.params.exhibitorId,
    }).populate("expo");

    if (!booth) {
      return res.status(404).json({
        success: false,
        message: "No Booth Reserved",
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

// ================= DOWNLOAD BOOTH PASS =================

const downloadBoothPass = async (req, res) => {
  try {

    const booth = await Booth.findOne({
      exhibitor: req.params.exhibitorId,
    })
      .populate("expo")
      .populate("exhibitor");

    if (!booth) {
      return res.status(404).json({
        success: false,
        message: "No Booth Found",
      });
    }

    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=BoothPass.pdf"
    );

    doc.pipe(res);

    // Header

    doc
      .fontSize(26)
      .fillColor("#2563EB")
      .text("EventSphere", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(18)
      .fillColor("black")
      .text("Booth Pass", {
        align: "center",
      });

    doc.moveDown(2);

    doc.fontSize(14);

    doc.text(`Expo : ${booth.expo.title}`);

    doc.text(`Venue : ${booth.expo.venue}`);

    doc.text(`Booth Number : ${booth.boothNumber}`);

    doc.text(`Booth Name : ${booth.boothName}`);

    doc.text(`Booth Size : ${booth.boothSize}`);

    doc.text(`Price : ${booth.price}`);

    doc.text(`Status : ${booth.status}`);

    doc.moveDown();

    doc.text(
      `Issued Date : ${new Date().toLocaleDateString()}`
    );

    doc.moveDown(2);

    doc
      .fontSize(12)
      .fillColor("gray")
      .text(
        "Please carry this Booth Pass during the Expo.",
        {
          align: "center",
        }
      );

    doc.end();

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
    getAvailableBooths,
    bookBooth,
    getMyBooth,
    downloadBoothPass,
};