const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const path = require("path")
const user = require("./Models/UserModel")
const post = require("./Models/PostSchema")


// ------------------------------------- MiddleWares -------------------------------------


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
function isLoggedIn(req, res, next) {
    let cookie = req.cookies.token
    if (!cookie) {
        return res.send(errorFunction("You'r not Logged In !!", "Redirecting ", "login"))
    }
    else {
        let data = jwt.verify(cookie, "shhhhh")
        req.user = data
    }
    next()
}



// ------------------------------------- Get Routes -------------------------------------


// Home Route

app.get("/", async (req, res) => {
    let token = req.cookies.token
    let data
    if (token) {
        data = jwt.verify(token, "shhhhh")
    }
    let posts = await post.find().populate({ path: "user", select: "username" })
    res.render("index", { token: token, posts, user: data })
})


// Login Route

app.get("/login", (req, res) => {
    res.render("login")
})


// Register Route

app.get("/register", (req, res) => {
    res.render("register")
})

// Logout Route

app.get("/logout", (req, res) => {
    res.clearCookie("token")
    res.redirect("/")
})

// Profile Route

app.get("/profile", isLoggedIn, async (req, res) => {
    const token = req.cookies.token
    const foundUser = await user.findOne({ email: req.user.email })
    res.render("profile", { token, user: foundUser })
})

// Post Route

app.get("/post", isLoggedIn, async (req, res) => {
    const token = req.cookies.token
    let data = jwt.verify(token, "shhhhh")
    let posts = await post.find({ user: data.id })
    let userCreated = await user.findOne({ email: data.email })
    res.render("post", { token, posts, username: userCreated.username })
})


// Post Route

app.get("/liked-posts", isLoggedIn, async (req, res) => {
    const token = req.cookies.token
    let data = jwt.verify(token, "shhhhh")
    let posts = await post.find({ likes : data.id }).populate({ path: "user", select: "username" })
    // console.log(posts.user)
    // res.send(posts[0].user)
    res.render("likedPosts", { token, posts})
})


// Delete Post

app.get("/delete/:id", async (req, res) => {
    const postFound = await post.findByIdAndDelete({ _id: req.params.id })
    const userFound = await user.findOne({ _id: postFound.user })
    let posts = userFound.posts
    let filteredPosts = posts.filter((post) => {
        return post != req.params.id
    })
    userFound.posts = filteredPosts
    userFound.save()
    const allPosts = await post.find({})
    res.redirect("/post")
})

// Edit Post

app.get("/edit/:id", async (req, res) => {
    const token = req.cookies.token
    const postFound = await post.findOne({ _id: req.params.id })
    res.render("edit", { post: postFound, token })
})


// like Post

app.get("/like/:id", isLoggedIn, async (req, res) => {
    const postFound = await post.findOne({ _id: req.params.id })
    console.log(postFound.likes.indexOf(req.user.id))
    if (postFound.likes.indexOf(req.user.id) == -1) {
        postFound.likes.push(req.user.id)
    } else {
        postFound.likes.splice(postFound.likes.indexOf(req.user.id), 1)
    }
    await postFound.save()
    console.log(postFound)
    res.redirect("/")
})


// ------------------------------------- Post Routes -------------------------------------



// Login Form

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.send(errorFunction("Please fill all the fields", "Redirecting back", "login"))

        // res.status(400).send("Please Fill all fields")
    }
    let foundUser = await user.findOne({ email })
    if (!foundUser) {
        return res.send(errorFunction("No Such account Exist", "Register You account", "register"));

        // res.status(400).send("Please Fill all fields")
    }

    bcrypt.compare(password, foundUser.password, function (err, result) {
        if (result) {
            const token = jwt.sign({ email, id: foundUser._id }, 'shhhhh');
            res.cookie("token", token)
            res.redirect("/")
        }
        else {
            return res.send(errorFunction("Wrong Password", "Redirecting", "login"));
        }
    });
})


// Register Form

app.post("/register", async (req, res) => {
    const { email, username, age, password, confirmPassword } = req.body
    if (!email || !username || !age || !password || !confirmPassword) {
        return res.send(errorFunction("Please fill all the fields", "Redirecting back", "register"));

        // res.status(400).send("Please Fill all fields")
    }
    let result = await user.findOne({ email: email })
    if (result) {
        return res.send(errorFunction("Email already exist", "Redirecting back", "register"));
        // res.status(400).send("Passwords do not match")
    }
    if (confirmPassword != password) {
        return res.send(errorFunction("Password doesn't matched", "Redirecting back", "register"));
        // res.status(400).send("Passwords do not match")
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const createdUser = await user.create({
                email,
                password: hash,
                username,
                age,
                posts: []
            })
            var token = jwt.sign({ email, id: createdUser._id }, 'shhhhh');
            res.cookie("token", token)
            res.redirect("/")
        });
    });
})

// Post Form

app.post("/post", async (req, res) => {
    const postText = req.body.post
    if (!postText) {
        return res.send(errorFunction("Please enter post data", "Redirecting back", "profile"))
    }
    let data = jwt.verify(req.cookies.token, "shhhhh")
    let { email, id } = data
    const postCreated = await post.create({
        postText: postText,
        user: id,
    })
    const userFound = await user.findOne({ email })
    userFound.posts.push(postCreated._id)
    userFound.save()
    res.send(errorFunction("Post Creating", "Redirecting", "post"))
})

// Edit Post

app.post("/edit/:id", async (req, res) => {
    const postFound = await post.updateOne({ _id: req.params.id }, { $set: { postText: req.body.post } });
    res.redirect("/post")
})

// ------------------------------------- Error function -------------------------------------


function errorFunction(err, redirect, link) {
    return `
            <html>
            <head>
                <link rel="stylesheet" href="/StyleSheets/style.css">
            </head>
              <body>
                <main style="display:flex; flex-direction:column; justify-content:center; align-items:center; color:white; height:100vh;">
                    <h1>${err} !!</h1>
                    <h2>${redirect} ...</h2>
                </main>
                <script>
                  setTimeout(() => {
                    window.location.href = "/${link}";
                  }, 2000);
                </script>
              </body>
            </html>
        `;
}

app.listen(3000)