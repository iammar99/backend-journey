# Class 2 <!-- omit in toc -->



# Table of Contents

- [Table of Contents](#table-of-contents)
  - [What is Node.js](#what-is-nodejs)
  - [Installing Node.js and NPM](#installing-nodejs-and-npm)
  - [Working With node.js and npm](#working-with-nodejs-and-npm)
  - [File system Handling](#file-system-handling)
  - [HTTP Protocol](#http-protocol)
    - [Protocol](#protocol)
    - [HTTP](#http)
- [Link For the Video](#link-for-the-video)




## What is Node.js

Node Js is not a framework or a library or not any other thing . It is a JavaScript runtime built on Chrome's V8 JavaScript engine . Let me Explain !!! <br>
javacscript was unable to create backend because does not have that functionalities . But Ryan Dhal was thinking some thing different . He start playing with google chrome V8 engine which was built with C++. But he wrapped that in JavaScript . So now we can run JavaScript on the server side . That is Node Js .

## Installing Node.js and NPM

You can install node from their official website [https://nodejs.org/](https://nodejs.org/en) Always install LTS version
<br>
You can verify It's Installation by running this Command in termainal

```
node -v
```

OR

```
npm -v
```

## Working With node.js and npm 

We have to run command 
```
npm init 
```
OR
```
npm init -y "to avoid questions"
```

It will create a package.json file which contain details of project

## File system Handling

We can handle file system using fs module . We can import it using require function . These are few function we can perform 

<ol>
<li>writeFile -> to Create a new file</li>
<li>readFile -> to Read a file</li>
<li>appendFile -> to update an existing file</li>
<li>copyFile -> to copy an existing file to some other location</li>
<li>unlink -> to delete an existing file</li>
<li>rmdir -> to delete an empty folder</li>
<li>rm -> to delete a filled folder</li>
</ol>

## HTTP Protocol

### Protocol 

Protolcols are the rules to transfer data . 

### HTTP

hyper text transfer protocol is a protocol which is used to transfer data over the internet . It is a request response protocol . We cannot share data on internet without htttp  .

<br>

HTTP in node.js is used to create server.

# Link For the Video 

[Class 2](https://www.youtube.com/watch?v=OFbSqd54Wwk&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH)