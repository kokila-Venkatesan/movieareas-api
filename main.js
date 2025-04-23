import express from "express";


import movieRoutes from "./routes/movies.routes.js"

const app = express ();
const PORT = 6969;

app. get ("/", (req, res) => {
    res. json({ msg: "Hello student!"});
});
// CRUD Funtionality of movies

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
    console.log (`The server is running at http://localhost:${PORT}`);
});
