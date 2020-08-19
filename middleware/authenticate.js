const jwt = require('jsonwebtoken');
const manager = require('../controller/Manager.model');



module.exports = {
    authentication
}

// authentication middleware
async function authentication(req, res, next) {
    const { headers = null } = req;
    if (!headers.authorization) {
        res.send("not authenticated")
    }
    const { authorization = null } = headers
    const token = authorization.split(" ");
    const tokenResponse = jwt.verify(token[1], "secret")
    const { id = null } = tokenResponse
    if (!id) {
        res.send("not authenticated")
    }
    try {
        const filter = { _id: id }
        const managerResponse = await manager.findOne(filter)
        if (!managerResponse) {
            res.send("not authenticated")
        }
        req.managerDetails = managerResponse._id;
        console.log("req.managerDetails", req.managerDetails);
        next()
    } catch (error) {
        res.send(error)
    }
}