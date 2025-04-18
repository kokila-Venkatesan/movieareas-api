import express from "express";

const router = express.Router ()


// for Reading movies
router.get('/',(req,res) => {
    res.send ("Get all movies lists");
})

// for Creating movies
router.post('/',(req, res) => {
    res.send ("Create movies");
})

// for Updating movies

router.put('/:id', (req, res) => {
    res.send ("Update movies");
})

// for Deleting movies 
router.delete('/:id', (req, res)=> {
    res.send ("Delete movies");
})

export default router;