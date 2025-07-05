const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Middleware to parse cookies

app.use(cookieParser());


// How to set cookies 


// app.get('/', (req, res) => {
//     res.cookie("name", "Ammar")
//   res.send('Hello, World!');
// });

// Cookies are sent with every request to the server to every route

// How to read cookies - > Intsall cookie-parser

// app.get("/read", (req, res) => {
//     const name = req.cookies.name;
//     res.send(`Cookie value: ${name}`);
// })


// how to use bcrypt 

// This function is use to hash passwords and other sensitive data.

// app.get("/", async (req, res) => {
// bcrypt.genSalt( 10, function(err, salt) {
//     console.log(salt) /// This is a salt value (a random string)
//     bcrypt.hash("password", salt, function(err, hash) {
//     const password = hash; // This is the hashed password
//     console.log(password)
// });
// });
// original password => "password"
// hashed password => $2b$10$uOvRGK3hwB5fk2UiANdLnegL1u6a1Vn3q/vb4b0OF0f4ZVs22D5IO
// res.send("Check console for bcrypt output");
// })


// This function is use to compare data and converted .

// app.get("/", async (req, res) => {
//     bcrypt.compare("password", "$2b$10$uOvRGK3hwB5fk2UiANdLnegL1u6a1Vn3q/vb4b0OF0f4ZVs22D5IO", function (err, result) {
//         console.log(result) // True if the password matches, false otherwise 
//     });
//     res.send("Check console for bcrypt output");
// })


// This is function to understand working of JWT (JSON Web Token).

// app.get("/", async (req, res) => {
//     var token = jwt.sign({ email: 'ammarbashaar99@gmail.com' }, 'secret');
//     console.log(token) // This is the JWT token
//     res.cookie("token", token,)
//     res.send("Check console for JWT output");
// })

// app.get("/read", async (req, res) => {
//     res.clearCookie("name")
//     const token = req.cookies.token;
//     res.send("Here is JWT token " + token);
// })


app.listen(3000)