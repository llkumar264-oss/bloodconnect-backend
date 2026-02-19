const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  city: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
  tasksCompleted: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 50
  }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
