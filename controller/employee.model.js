const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    addres: {
        type: Object
    },
    dob: {
        type: String
    },
    empid: {
        type: String
    },
    company: {
        type: String
    },
    city: {
        type: String
    },
    mobile: {
        type: Number
    },
    managerId: { type: Schema.Types.ObjectId, ref: 'manager' },

}, { timestamps: true })

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee