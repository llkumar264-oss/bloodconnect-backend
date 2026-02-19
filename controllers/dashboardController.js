const Volunteer = require("../models/Volunteer");
const Donor = require("../models/donor");
const Request = require("../models/request");

exports.getStats = async (req, res) => {
  try {
    const totalVolunteers = await Volunteer.countDocuments();
    const totalDonors = await Donor.countDocuments();
    const totalRequests = await Request.countDocuments();
    const activeRequests = await Request.countDocuments({ status: "pending" });
    const completedRequests = await Request.countDocuments({ status: "completed" });

    res.json({
      totalVolunteers,
      totalDonors,
      totalRequests,
      activeRequests,
      completedRequests
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
