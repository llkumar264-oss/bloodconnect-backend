const Request = require("../models/request");
const smartAssign = require("../utils/smartAssign");

exports.createRequest = async (req, res) => {
  try {
    const { patientName, bloodGroup, city, priority } = req.body;

    const volunteer = await smartAssign(city);

    const request = new Request({
      patientName,
      bloodGroup,
      city,
      priority,
      assignedVolunteer: volunteer ? volunteer._id : null
    });

    await request.save();

    res.json({
      message: "Request created",
      request
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate("assignedVolunteer");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
