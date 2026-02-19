const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  city: String,
  lastDonationDate: Date,
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Donor", donorSchema);
