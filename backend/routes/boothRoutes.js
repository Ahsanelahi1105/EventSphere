const express = require("express");

const router = express.Router();

const {
  createBooth,
  getAllBooths,
  getBoothById,
  updateBooth,
  deleteBooth,
} = require("../controllers/booth/boothController");

router.post("/", createBooth);

router.get("/", getAllBooths);

router.get("/:id", getBoothById);

router.put("/:id", updateBooth);

router.delete("/:id", deleteBooth);

module.exports = router;
