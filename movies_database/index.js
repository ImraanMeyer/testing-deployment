/* Defining the Connection to Mongoose and which Databse to use from MongoDB */

const mongoose = require('mongoose')

mongoose
//.connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
    .connect(process.env.DATABASE, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB connected...'))
    .catch(e => console.error('Connection error', e.message))

const db = mongoose.connection

module.exports = db