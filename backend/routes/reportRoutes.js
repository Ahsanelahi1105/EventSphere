const express = require("express");

const router = express.Router();

const {
  getDashboardReport,
} = require("../controllers/report/reportController");

router.get("/", getDashboardReport);

module.exports = router;
