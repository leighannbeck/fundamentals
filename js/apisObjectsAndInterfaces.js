// Fullstack Development Prework Phase 2
// Fundamentals of JavaScript
// APIs, Objects, and Interfaces

/* OBJECTS
Object-Oriented Programming (OOP) languages represent data and functionality in an encapsulated way to represent real-world objects in code

//Key Features of Object
    1. State (data or information that describes object)
    2. Functionality (changes that can be made)

Some objects might not have data or they might not have functions, as long as the items within the object are related, there shouldn't be an issue.

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "small:,
    bark: function() {
        console.log("Bark!);
    },
}

dog.bark();

 */

/* INTERFACES
The interface deals with the function of an object.
    --name
    --parameters

Interface should be invisible to anything using the function except the object itself; similar to block and global scope.

 */

/* APIs - Application Programming Interface

Interfaces written into software to be used by other programmers to interact with the code.
    --To access the code library, use the function defined within the object.

**Rest APIs use URLs instead of functions to interact with the code.
 */

/* PASSING DATA

Data can be passed into code, either by value or by reference.
    1. Value -- data is copied for use inside function
    2. Reference -- value being passed only points to original data
        **If data is changed by reference, the original data is changed too

    **Whether the data is passed by value or reference may vary depending on the language, additional research to determine which method a language uses may be needed.
    **JavaScript uses reference to pass data


function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};

x(y);
console.log(y);

 */
