const mongoose = require("mongoose");
const VitalSigns = require("./vital-signs");

const Visit = mongoose.Schema({
  nurseId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  }
});

module.exports.Visit = mongoose.model("Visit", Visit);