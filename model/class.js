const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    grade:{
        type: String,
        require: true
    },
});

const Class = mongoose.model("Class", classSchema)

module.exports = Class;