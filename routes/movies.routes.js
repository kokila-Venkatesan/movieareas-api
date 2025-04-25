import express from "express";
import {
    MovieCreate,
    MovieIndex,
    MovieUpdate,
    MovieDelete,
    MovieDetails,
} from "../controllers/movies.controller.js"
const router = express.Router ()


// for Reading movies
router.get('/', MovieIndex)

// particular or single movie get the info

router.get ('/:id',MovieDetails)
// for Creating movies
router.post('/',MovieCreate)

// for Updating movies

router.put('/:id', MovieUpdate)

// for Deleting movies 
router.delete('/:id',MovieDelete)

export default router;