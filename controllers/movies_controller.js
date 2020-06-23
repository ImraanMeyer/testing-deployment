/* Defining the Movies Controller and all the CRUD Operations that needed to take place in my database */

const Movie = require('../models/movies_model')

//Create New Movies 

createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please Provide A Movie Name',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Your Movie Has Been Created.',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Your Movie Was Not Created!',
            })
        })
}


//Update an existing Movie in the database

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a body to update the Movie',
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Your Movie has not been found.',
            })
        }
        movie.name = body.name
        movie.genre = body.genre
        movie.format = body.format
        movie.running_time = body.running_time
        movie.age_restriction = body.age_restriction 

        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'The Movie has been updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'The Movie has not been updated!',
                })
            })
    })
}

//Delete existing Movies in the database 

deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `The Movie Has Not Been Found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

//Find an existing Movie in the database by its ID 

getMovieById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `The Movie Has Not Been Found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}


//Get Movies returned from the database 


getMovies = async (req, res) => {
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `The Movie Has Not Been Found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}