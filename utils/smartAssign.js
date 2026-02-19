const Volunteer = require("../models/volunteer");

const smartAssign = async (city) => {
  try {
    const volunteers = await Volunteer.find({
      city: city,
      status: "active"
    });

    if (!volunteers.length) return null;

    // Sort by highest score
    volunteers.sort((a, b) => b.score - a.score);

    return volunteers[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = smartAssign;
