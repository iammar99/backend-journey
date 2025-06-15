const fs = require('fs');

// ----------- Writing a file -----------

// fs.writeFile('output.txt', 'Hello, World!', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log('File written successfully!');
//   }
// })



// ----------- Reading a file -----------


// fs.readFile("output.txt",(err,data)=>{
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File read successfully!',data.toString());
//     }
// })


// You have to use encoding scheme to convert data into string otherwise it will return buffer which can also be convert into string as above



// ----------- Appending a file -----------


// fs.appendFile('output.txt', '\nAppended text!', (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('File appended successfully!');
//   }
// })



// ----------- Copying a file -----------

// fs.copyFile("output.txt", "./NewFolder/newFile1.txt", (err) => {
//     if (err) {
//         console.error('Error copying file:', err.message);
//     } else {
//         console.log("Copied Successfully")
//     }
// })

// ----------- Deleting a file -----------


// fs.unlink('./NewFolder/newFile1.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File deleted successfully!');
//     }
// })


// ----------- Deleting a Folder (Empty of Folder) -----------


// fs.rmdir("./Folder", (err) => {
//     if (err) {
//         console.error('Error deleting folder:', err);
//     } else {
//         console.log("Deleted Successfully")
//     }
// })


// This is used to delete only empty folder . If you want to delete a filled folder then you have to use parameter recursive : true but it is depreciated 



// ----------- Deleting a Folder -----------

// fs.rm("./NewFolder", { recursive: true }, (err) => {
//     if (err) {
//         console.log("Error occured", err.message)
//     }
//     else {
//         console.log("Deleted Successfully")
//     }
// })


// ----------- Creating a server -----------


// const http = require('http');

// const server =  http.createServer((req,res)=>{
//     res.end("Hello World");
// })

// server.listen(3000)