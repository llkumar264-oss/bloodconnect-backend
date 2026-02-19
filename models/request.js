const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    patientName: String,
    bloodGroup: String,
    city: String,
    priority: {
      type: String,
      enum: ["critical", "urgent", "normal"],
      default: "normal"
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed", "escalated"],
      default: "pending"
    },
    assignedVolunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
