const mongoose = require('mongoose');
const { Schema } = mongoose;

const managerSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    addres: {
        type: Object
    },
    dob: {
        type: String
    },
    company: {
        type: String
    }
})

const manager = mongoose.model('manager', managerSchema);

module.exports = manager