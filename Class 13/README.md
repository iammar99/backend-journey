# Class 13 <!-- omit in toc -->



# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Data Association](#data-association)
  - [Referencing](#referencing)
  - [Embedding](#embedding)
- [Link For the Video](#link-for-the-video)


## Data Association

Data Association is a proccess of connecting data of different collections . For Example , if we have two collections , one for users and one for products , we can connect them by using two methods , First one is by storing the user id in the products collection . and product id in the user collection. Second one is by storing whole product in the user collection and whole user in the product collection.These are called Referencing and Embedding respectively.


## Referencing

In this method , we store the id of the user in the products collection and the id of the product in the user collection. This is called Referencing. This is the method we'll cover and this is the better method to use when you have a lot of data in your collections.

## Embedding

In this method we store the whole product in the user collection and the whole user in the product collection. This is called Embedding. This method is better to use when you have a small amount of data in your collections.

**Look code to understand betterly**

# Link For the Video 

[Class 13](https://www.youtube.com/watch?v=g1uL2byQTzo&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH&index=16)