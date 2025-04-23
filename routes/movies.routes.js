import express from "express";
import {
    MovieCreate,
    MovieIndex,
    MovieUpdate,
    MovieDelete,
} from "../controllers/movies.controller.js"
const router = express.Router ()


// for Reading movies
router.get('/', MovieIndex)

// for Creating movies
router.post('/',MovieCreate)

// for Updating movies

router.put('/:id', MovieUpdate)

// for Deleting movies 
router.delete('/:id',MovieDelete)

export default router;