const express = require('express');
const app = express()
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(express.static(path.join(__dirname, 'Public'))); // Serve static files from the public directory


app.get('/', (req, res) => {
    fs.readdir("./Files", (err, file) => {
        console.log(file)
        res.render('index', { File: file }); // Render the index.ejs file
    })
});


// Function to handle create
app.post("/create", (req, res) => {
    console.log(req.body.details)
    let title = req.body.title
    const detail = req.body.details
    let arr = title.split(" ")
    let newArr = arr.map((val) => {
        return val.charAt(0).toUpperCase() + val.slice(1)
    })
    title = newArr.join("")
    fs.writeFile(`./Files/${title}.txt`, detail, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            return res.redirect("/")
        }
    })
})

// Function to handle Read

app.get("/read/:filename", (req, res) => {
    const filePath = path.join(__dirname, "Files", req.params.filename);

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log("File read error:", err.message);
            return res.status(404).send("File not found");
        }

        console.log("Data:", data);
        res.render('show', { content: data, filename: req.params.filename }); // Render the show.ejs file with file content
    });
    console.log(req.params.filename)

})

// Function to handle Edit page

app.get("/edit/:filename", (req, res) => {
    const filePath = path.join(__dirname, "Files", req.params.filename);

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log("File read error:", err.message);
            return res.status(404).send("File not found");
        }

        let filename = req.params.filename
        filename = filename.split(".")[0]
        console.log("Data:", data);
        res.render('edit', { content: data, filename: filename }); // Render the edit.ejs file with file content
    });
    console.log(req.params.filename)

})


// Function to handle Edit 

app.post("/edit", (req, res) => {
    console.log(req.body.oldTitle)
    console.log(req.body.title)
    console.log(req.body.details)
    const filePath = path.join(__dirname, "Files", req.body.oldTitle);
    const newFilePath = path.join(__dirname, "Files", req.body.title);
    console.log(filePath)

    fs.rename(`${filePath}.txt`, `${newFilePath}.txt`, (err) => {
        if (err) {
            console.log(err)
            return res.status(404).send("File not found");
        }
        else{
            fs.writeFile(`${newFilePath}.txt`,req.body.details,(err)=>{
                if(err){
                    console.log(err)
                    return res.status(404).send("File not found");
                }
                else{
                    res.redirect("/")
                }
            })
        }
    })
})



// Function to handle Delete page

app.get("/delete/:file", (req, res) => {
    const filePath = path.join(__dirname, "Files", req.params.file);
    console.log(filePath)
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log("File delete error:", err.message);
            return res.status(404).send("File not found");
        }
        console.log("File deleted successfully");
        res.redirect("/"); // Redirect to the home page after deletion
    });

})



app.listen(3000)