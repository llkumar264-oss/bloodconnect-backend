const Donor = require("../models/donor");

// Add donor
exports.addDonor = async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.json(donor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get donors
exports.getDonors = async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;

    let filter = {};
    if (bloodGroup) filter.bloodGroup = bloodGroup;
    if (city) filter.city = city;

    const donors = await Donor.find(filter);
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
