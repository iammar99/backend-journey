const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const user = require("./Models/userModel");
const { log } = require('console');


// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const token = req.cookies.token
    res.render("index", { token: token })
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await user.findOne({ email });
        if (foundUser == null) {
            res.send(`
        <script>
            alert('No User Exist with this Email ! Register your account');
            window.location.href = '/'; 
        </script>
    `);
        }
        else {
            bcrypt.compare(password, foundUser.password, function (err, result) {
                if (result) {
                    let token = jwt.sign({ email }, "secret")
                    res.cookie("token", token)
                    console.log(token)
                    res.send(foundUser)
                }
                else {
                    res.send(`
            <script>
            alert('Wrong Password ! Please Enter Correct Password');
            window.location.href = '/login'; 
            </script>
            `);
                }
            });
        }
    } catch (err) {
        console.error("Error finding user:", err);
        res.status(500).send("Internal Server Error");
    }
})


app.get("/logout", (req, res) => {
    res.clearCookie("token")
    res.redirect("/")
})


app.post("/create", async (req, res) => {
    const { email, username, password, age } = req.body;
    console.log(username, email, password, age);
    bcrypt.genSalt(10, async function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const userCreated = await user.create({
                email,
                username,
                password: hash,
                age
            })
            console.log(userCreated)
        });
        let token = jwt.sign({ email }, "secret")
        res.cookie("token", token)
    });
    res.send("Data")
})




app.listen(3000)