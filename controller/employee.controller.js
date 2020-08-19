const express = require('express');
const Employee = require('./employee.model');
const EmployeeRouter = express.Router();



EmployeeRouter
    .get('', getEmployeeList)
    .post('', addEmployee)
    .put('', updateEmployee)
    .delete('/:id', deleteEmployee)


async function getEmployeeList(req, res) {
    try {
        const response = await Employee.find(req.body);
        res.status(200).send(response)
    } catch (error) {
        res.send(error)
    }
}


async function addEmployee(req, res) {
    const data = req.body;
    try {
        data.managerId = req.managerDetails
        const response = await Employee.create(data)
        res.status(200).send(response)
    } catch (error) {
        res.send(error)
    }
}


async function updateEmployee(req, res) {
    const data = req.body;
    try {
        let filter = { _id: data._id }
        const response = await Employee.findOneAndUpdate(filter, data, { new: true })
        res.status(200).send(response)
    } catch (error) {
        res.send(error)
    }
}


async function deleteEmployee(req, res) {
    const { id: _id } = req.params;
    try {
        await Employee.findOneAndRemove({ _id })
        res.status(200).send({ msg: "record deleted" })
    } catch (error) {
        res.send(error)
    }
}

module.exports = EmployeeRouter;