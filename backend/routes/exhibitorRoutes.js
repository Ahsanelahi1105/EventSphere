const express = require("express");

const router = express.Router();

const {
  createExhibitor,
  getAllExhibitors,
  getExhibitorById,
  updateExhibitor,
  deleteExhibitor,
} = require("../controllers/exhibitor/exhibitorController");

router.post("/", createExhibitor);

router.get("/", getAllExhibitors);

router.get("/:id", getExhibitorById);

router.put("/:id", updateExhibitor);

router.delete("/:id", deleteExhibitor);

module.exports = router;
