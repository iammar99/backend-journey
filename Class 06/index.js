const express = require('express');
const app = express();
const path = require('path');


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Dynamic Routing 
app.get('/profile/:username', (req, res) => {
    res.send(`Name of the user is ${req.params.username}`);
})


// Dynamic Routing 
app.get('/profile/:username/:age', (req, res) => {
    res.send(`Name of the user is ${req.params.username} and the Age is ${req.params.age}`);
})




app.listen(3000)