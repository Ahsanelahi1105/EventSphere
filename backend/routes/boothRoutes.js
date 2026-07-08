const express = require("express");

const router = express.Router();

const {
  createBooth,
  getAllBooths,
  getBoothById,
  updateBooth,
  deleteBooth,
  getAvailableBooths,
  bookBooth,
  getMyBooth,
  downloadBoothPass,
} = require("../controllers/booth/boothController");

// Admin CRUD
router.post("/", createBooth);

router.get("/", getAllBooths);

router.get("/:id", getBoothById);

router.put("/:id", updateBooth);

router.delete("/:id", deleteBooth);

// Exhibitor
router.get("/expo/:expoId", getAvailableBooths);

router.put("/book/:id", bookBooth);

router.get("/my-booth/:exhibitorId", getMyBooth);

router.get(
    "/pass/:exhibitorId",
    downloadBoothPass
);

module.exports = router;