const express = require('express')
const cors = require('cors');
const connect = require('./config/db');
const MangerRouter = require('./controller/manager.controller');
const EmployeeRouter = require('./controller/employee.controller');
const { authentication } = require('./middleware/authenticate');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


const PORT = 4000;
const staticURL = '/api/v1';

connect()

// Route
app.use(`${staticURL}/manager`, MangerRouter)
app.use(`${staticURL}/employee`, authentication, EmployeeRouter)
app.get(staticURL, (req, res) => res.send(`today is ${new Date()}`))



app.listen(PORT, () => {
    console.log(`app running on port number ${PORT}`)
})



