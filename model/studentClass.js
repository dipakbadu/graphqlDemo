const mongoose = require('mongoose');

const studentClassSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    ClassId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
});

const StudentClass = mongoose.model("StudentClass", studentClassSchema)

module.exports = StudentClass;