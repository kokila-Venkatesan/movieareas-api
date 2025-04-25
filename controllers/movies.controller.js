import movie from "../models/movies.models.js";
 

export const MovieIndex = (req,res) => {
    res.send ("Get all movies");
}

export const MovieCreate = async (req, res) => {

    // id,title,description
//console.log (req.body);

// validate your data
const newMovie = new movie ({
    title: req.body.title,
    desc: req.body.desc,
});
try {
    const movie = await newMovie.save ();
    return res. status(201).json(movie);

} catch (error) {
    return res.status(400).json({message: error.message});
}

//return res.json (req .body);

}

export const MovieUpdate = (req, res) => {
    res.send ("Update movies");
}

export const MovieDelete = (req, res)=> {
    res.send ("Delete movies");
}