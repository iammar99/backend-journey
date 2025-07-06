const express = require("express")
const app = express()
const user = require("./Models/UserModels")
const post = require("./Models/PostModel")


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/create", async (req, res) => {
    const userCreated = await user.create({
        username: "iammar99",
        email: "ammarbashaar99@gmail.com",
        age: 12,
        posts : []
    })
    res.send(userCreated)
})

app.get("/create/post", async (req, res) => {
    const userFound = await user.findOne({ email: "ammarbashaar99@gmail.com" })
    console.log(userFound)
    const postCreated = await post.create({
        postData: "This is the post created",
        user: userFound._id,
    })
    userFound.posts.push(postCreated._id) 
    await userFound.save()
    res.json({ postCreated, userFound })
})

app.listen(3000)