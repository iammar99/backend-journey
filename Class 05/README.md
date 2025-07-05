# Class 5 <!-- omit in toc -->



# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Sessions and Cookies](#sessions-and-cookies)
    - [Middle ware use to parse data](#middle-ware-use-to-parse-data)
- [Link For the Video](#link-for-the-video)

## Sessions and Cookies 

Sessions and cookies are two related but distinct concepts in web development that help maintain user state and track interactions. Let us understand with an example .


When you send a request to Facebook , it doesn't know who you are. But when you log in, it knows who you are . Then you again send a request to Facebook , It again ask you who you are . This can be frustrating. So We use cookies to store the information about you . Cookies are stored on the client side . So when you send a request to Facebook , it can see the cookies and know who you are . This is how cookies work . When you logout , the cookies are deleted . This whole thing is called session . Session is a collection of cookies . So when you logout , the session is deleted .


### Middle ware use to parse data

```
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

These 2 lines are used to parse the data sent by the client .<br>
First lines is used to parse the JSON data . Second line is used to parse the URL encoded data .


# Link For the Video 

[Class 5](https://www.youtube.com/watch?v=5NWdfv5P5d4&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH)