let arr = [1, 2, 3, 4, 5];



// For-Each Loop 
console.log("--------- For-Each Loop ---------");

// using simple function for iteration
console.log("Simple Function Iteration:");

arr.forEach(function(item, index) {
    console.log(item + " at index " + index);
})

// using arrow function for iteration
console.log("Arrow Function Iteration:");

arr.forEach((item, index) => {
    console.log(item + " at index " + index);
})




// Map Function
console.log("--------- Map Function  ---------");

// using arrow function for mapping
let mappedArr = arr.map((item, index) => {
    return item * 2;
});

console.log("Mapped Array using Arrow Function: after adding 2", mappedArr);


// Filter Function
console.log("--------- Filter Function  ---------");


// using arrow function for Filter
let filteredArr = arr.filter((item, index) => {
    return item > 2; 
});


console.log("Filtered Array using Arrow Function: elements greater than 2", filteredArr);


// Find Function
console.log("--------- Find Function  ---------");


// using arrow function for finding elements
let element = arr.find((item, index) => {
    return item > 2;
});

console.log("First element greater than 2:", element);


// indexOf Function
console.log("--------- indexOF Function  ---------");

let index = arr.indexOf(3);
console.log("Index of element 3:", index);
let index2 = arr.indexOf(30);
console.log("Index of element 3:", index2);



// Objects
console.log("--------- Objects ---------");


let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person)
person.name = "Wick"
Object.freeze(person)

person.age = 20

console.log(person)


// Function 

function abcd(){
    console.log("This is a function");
    return 12
}

console.log("Function Output:", abcd());


// Async Await 

const asyncFunction = async () =>{
    console.log("This is an async function");
    let blob = await fetch("https://randomuser.me/api/")
    let obj = await blob.json()
    console.log(obj.results[0].name)
    return obj.results[0].location
}

asyncFunction().then((data) => {
    console.log(data)
})