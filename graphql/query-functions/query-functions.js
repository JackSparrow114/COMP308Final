const visit = require("../../models/visit");


var addVisit = function (args) {
    const { nurseId, patientId } = args;
    console.log(nurseId, patientId);
    const newVisit = new visit.Visit({nurseId: nurseId, patientId: patientId});
    newVisit.save(function (err, visit) {
        if (err) return console.error(err);
        console.log("Visit added successfully.");
        return visit;
    });
}

module.exports = { addVisit }