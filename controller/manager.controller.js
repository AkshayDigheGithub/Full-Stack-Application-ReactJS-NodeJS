const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const MangerRouter = express.Router()
const manager = require('./Manager.model');

MangerRouter
    .post('/signin', signin)
    .post('/login', login)


async function signin(req, res) {
    const SignupData = req.body
    const { password } = SignupData
    SignupData.password = encryptPassword(password);

    try {
        await manager.create(req.body);
        res.status(200).send("signup done")
    } catch (error) {
        res.send(error)
    }
}

async function login(req, res) {
    const loginData = req.body;
    const { password, email } = loginData
    const filter = { 'email': email }
    const response = await manager.findOne(filter).exec();
    if (response) {
        const { password: encryptpwd, _id } = response
        if (comparePassword(password, encryptpwd)) {
            const token = jwt.sign({ id: _id }, "secret");
            return res.status(200).json({ msg: 'login sucessfully', token: token })
        } else {
            return res.status(401).json({ error: 'incorrect password' })
        }
    } else {
        return res.status(401).json({ error: 'unauthorized' })
    }
}

// compare hash and plain text password
function comparePassword(plainText, encryptPassword) {
    return bcrypt.compareSync(plainText, encryptPassword);
}

// encrypt password
function encryptPassword(plainPwd) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainPwd, salt);
}


module.exports = MangerRouter