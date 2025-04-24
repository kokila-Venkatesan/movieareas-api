import { Schema , model } from "mongoose";

const schema = new Schema (
    {
        title: String,
        desc: String,

    }
)

const Movie = model("Movie", schema);


// create your model
export default Movie; 