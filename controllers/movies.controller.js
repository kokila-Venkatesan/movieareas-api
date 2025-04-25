import Movie from "../models/movies.models.js";
import movie from "../models/movies.models.js";
 

export const MovieIndex = async(req,res) => {
    
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.json(500)({message: error.message});
    }
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
export const MovieDetails = async(req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (movie == null){
            returnres.status(404).json({message: "cannot find movie"});

        }
        else {
            res.json(movie);
        }
    } catch (error) {
        returnres.status(500).json({message:error.message});
    }
}
export const MovieUpdate = async (req, res) => {
    if (req.body.title != null){
        res.movie.title = req.body.title;
    }

    if (req.body.desc != null){
        res.movie.desc = req.body.desc;
    }
try {
    const updateMovie = await res.movie.save();
    res.json(updateMovie);

} catch (error) {
    res.status(400).json({message: error.message});


}
}

export const MovieDelete = (req, res)=> {
    res.send ("Delete movies");
}