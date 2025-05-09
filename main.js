import express from "express";


import movieRoutes from "./routes/movies.routes.js"
import connectDB from "./lib/db.js";

const app = express ();
const PORT = 6969;


//data understanding  middleware

app.use (express.json());
app.use (express.urlencoded({extended :true}));

app. get ("/", (req, res) => {
    res. json({ msg: "Hello student!"});
});
// CRUD Funtionality of movies


// connect DB

connectDB();

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
    console.log (`The server is running at http://localhost:${PORT}`);
});
