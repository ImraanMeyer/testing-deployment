/* Defining the Connection to Mongoose and which Databse to use from MongoDB */

const mongoose = require('mongoose')

mongoose
    //.connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
    .connect(`mongodb+srv://admin:qu16x3BAYsLFdD9r@cluster0-gwrs4.gcp.mongodb.net/cinema?retryWrites=true&w=majority`)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db