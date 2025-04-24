export const MovieIndex = (req,res) => {
    res.send ("Get all movies");
}

export const MovieCreate =(req, res) => {

    // id,title,description
console.log (req.body);

return res.json (req .body);

}

export const MovieUpdate = (req, res) => {
    res.send ("Update movies");
}

export const MovieDelete = (req, res)=> {
    res.send ("Delete movies");
}