const express = require("express");
const router = express.Router();

const {
  addDonor,
  getDonors
} = require("../controllers/donorController");

router.post("/", addDonor);
router.get("/", getDonors);

module.exports = router;
