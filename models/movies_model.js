/* Defining my connection to use Mongoose and that a Mongoose Schema is required */

const mongoose = require('mongoose')
const Schema = mongoose.Schema


/* Defining my Movie Schema that will capture the information into my database */

const Movie = new Schema(
    {
    
        name: { type: String, required: true },
        genre: { type: String, required: true },
        format: { type: String, required: true },
        running_time: { type: String, required: true },
        age_restriction: { type: String, required: true },
       
    },

    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)