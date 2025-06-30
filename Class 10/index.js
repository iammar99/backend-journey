const express = require("express")
const path = require("path")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.set("view engine", "ejs")
const user = require("./UserModel")

app.use(express.static(path.join(__dirname, "Public")))


app.get("/", (req, res) => {
    res.render("index") // Render the index.ejs file
})


app.get("/read", async (req, res) => {
    const users = await user.find()
    console.log(users)
    res.render("read", { Users: users }) // Render the index.ejs file
})


// Handle form submission

app.post("/create", async (req, res) => {
    const { email, username, imageUrl, age } = req.body;
    // Create a new user instance
    const newUser = await user.create({
        email,
        username,
        imageUrl,
        age
    })
    console.log(newUser);
    res.redirect("/") // Redirect to the home page after form submission
})


app.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const DeletedUser = await user.findByIdAndDelete(id);
    console.log(DeletedUser)
    res.redirect("/read") // Redirect to the read page after deletion
    res.send("Delete request received for ID: " + id);
})


app.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const findUser = await user.findById(id);
    console.log(findUser)
    res.render("edit", { findUser: findUser }) // Render the edit page with the user data
})

app.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { email, username, imageUrl, age } = req.body;
    console.log(email, username, imageUrl, age )
    console.log("id", id)
    // Update the user with the given ID
    const updatedUser = await user.findByIdAndUpdate(id, {
        email,
        username,
        imageUrl,
        age
    });
    console.log(updatedUser);
    res.redirect("/read") // Redirect to the read page after updating
})

app.listen(3000)