const express = require('express');
const app = express();

const userModel = require("./userModel")

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// --------------- For creation ---------------


app.get('/create', async (req, res) => {
    const user = await userModel.create({
        name: "John Doe 1",
        email: "abc@gmail.com",
        age: 30
    })
    res.send(user);
});

// --------------- For Read ---------------


app.get('/read', async (req, res) => {
    const user = await userModel.find()
    res.send(user);
});

// --------------- For Update ---------------


app.get('/edit', async (req, res) => {
    const user = await userModel.findOneAndUpdate({name:"John Doe"},{name:"John Doe Updated"},{new:true})
    res.send(user);
});


// --------------- For Delete ---------------


app.get('/delete', async (req, res) => {
    const user = await userModel.findOneAndDelete({name:"John Doe Updated"})
    res.send(user);
});

app.listen(3000,(err)=>{
    if(err) {
        console.error("Error starting the server:", err.message);
    } else {
        console.log("Server is running on port 3000");
    }
})