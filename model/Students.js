const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;