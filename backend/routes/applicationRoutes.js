
const express = require("express");

const router = express.Router();

const {
  applyExpo,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus,
} = require("../controllers/exhibitor/applicationController");

// Apply Expo
router.post("/", applyExpo);
router.get("/", getAllApplications);

// Get My Applications
router.get("/:id", getMyApplications);
router.put("/:id", updateApplicationStatus);

module.exports = router;
