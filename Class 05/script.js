const express = require('express');
const app = express();

// --------- Middle ware use to parse data ---------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",(_req,res)=>{
    res.send("Hello, World!");
})


app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/home", (req, res) => {
    res.send("Welcome to Home Page");
})


res.listen(3000)