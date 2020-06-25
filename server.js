/* Defining Express Variables,Apps and Port to be used. */


const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// Use env config
require('dotenv').config()

// app.use(express.static(path.join(__dirname, 'client', 'build')));

// Defining the use of my body-parse to handle HTML content 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



// Securing My Application and defining add ins to use 

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))


//Defining connection to Mongoose and my Database 

const db = require('./movies_database');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// Defining the movie router to use 

const movieRouter = require('./routes/movies_router')


// Defining the Link to Our API

// app.get('/*', (req, res) => {
//     res.send('Welcome to the MoviesDB Server!')
// })


app.use('/api', movieRouter)


// Serve static files from the React app
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


//  Listening to Port 3001 
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`))