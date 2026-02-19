const Volunteer = require("../models/Volunteer");

// Add volunteer
exports.addVolunteer = async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all volunteers
exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
