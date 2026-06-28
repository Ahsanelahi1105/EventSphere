const express = require("express");

const router = express.Router();

const {
  createExpo,
  getAllExpos,
  getExpoById,
  updateExpo,
  deleteExpo,
} = require("../controllers/expo/expoController");

router.post("/", createExpo);

router.get("/", getAllExpos);

router.get("/:id", getExpoById);

router.put("/:id", updateExpo);

router.delete("/:id", deleteExpo);

module.exports = router;
