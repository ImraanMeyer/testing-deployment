/* Defining the use of Express and the Controller to be used in performing CRUD Operations in the database*/

const express = require('express')
const MovieCtrl = require('../controllers/movies_controller')


/* Defining my router and the paths of each component that will perform a specific CRUD Operation*/

const router = express.Router()

router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

module.exports = router