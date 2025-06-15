const express = require('express');
const app = express();

// --------- Setting Up basic Express Server ---------

// app.get("/",(_req,res)=>{
//     res.send("Hello, World!");
// })

// ---------Routing ---------

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// })

// app.get("/home", (req, res) => {
//     res.send("Welcome to Home Page");
// })

// ---------Middle Ware  ---------

// app.use((req, res, next) => {
//     console.log("Middleware executed");
//     next(); 
// });

// app.use((req, res, next) => {
//     console.log("Another Middleware executed");
//     next(); 
// });

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// })

// app.get("/home", (req, res) => {
//     res.send("Welcome to Home Page");
// })

// ---------Error Handling   ---------


app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/home", (req, res,next) => {
    return next(new Error("Something went wrong!"));
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send("Something Went wrong")
  res.status(500).send('Something broke!')
})


app.listen(3000)