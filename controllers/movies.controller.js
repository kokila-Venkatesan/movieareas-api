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
            return res.status(404).json({message: "cannot find movie"});

        }
        else {
            res.json(movie);
        }
    } catch (error) {
        returnres.status(500).json({message:error.message});
    }
}
export const MovieUpdate = async (req, res) => {

    try {
        const result = await Movie.findOneAndUpdate (
            {_id: req.params.id}, 
            {
            title: req.body.title,
            desc: req.body.desc,
        },
        {
            new: true,
            upsert: true,
        }
    );
    res.status(200).json(result);

    } 
    catch (error) {
          res.status(400).json({message: error.message});

    }
}
export const MovieDelete = async (req, res)=> {

    const movieId = req.params.id;
    
    try {
        await Movie.deleteOne({_id: req.params.id});
        res.json ({message:'Movie Deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});

    }
    }