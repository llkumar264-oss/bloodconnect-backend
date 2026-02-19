const express = require("express");
const router = express.Router();

const {
  addVolunteer,
  getVolunteers
} = require("../controllers/volunteerController");

router.post("/", addVolunteer);
router.get("/", getVolunteers);

module.exports = router;
