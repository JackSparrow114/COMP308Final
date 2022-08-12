const mongoose = require("mongoose");

const VitalSignsSchema = new mongoose.Schema({
  bt: {
    type: String,
    required: true,
  },
  hr: {
    type: String,
    required: true,
  },
  bp: {
    type: String,
    required: true,
  },
  rr: {
    type: String,
    required: true,
  }
});

const VitalSigns = mongoose.model("VitalSigns", VitalSignsSchema);

module.exports = VitalSigns;