import express from "express";

const app = express ();
const PORT = 6969;

app. get ("/", (req, res) => {
    res. json({ msg: "Hello student!"});
});
// CRUD Funtionality of movies

// for Reading movies
app.get('/movies',() => {

})

// for Creating movies
app.post('/movies',() => {
    
})

// for Updating movies

app.put('/movies:id', () => {

})

// for Deleting movies 
app.delete('/movies:id', ()=> {
    
})

app.listen(PORT, () => {
    console.log (`The server is running at http://localhost:${PORT}`);
});
