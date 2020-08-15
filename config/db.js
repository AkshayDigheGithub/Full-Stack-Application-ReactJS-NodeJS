
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
function connect() {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
}

module.exports = connect