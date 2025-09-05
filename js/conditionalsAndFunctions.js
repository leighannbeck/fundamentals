// Fullstack Development Prework Phase 2
// Fundamentals of JavaScript
// Conditionals and Functions

/* CONDITIONALS

Conditionals will return true or false to check a condition
    --will not compare types with ===
    --types are comparable with ==

// Equals
let equals = 1===1;

// Greater Than
let greaterThan = 5 > 1;

// Less Than
let lessThan = 2 < 10;

// Greater Than or Equal
let greaterThanEq = 5 >= 5;

// Less Than or Equal
let lessThanEq = 4 <= 4;

// Not Equals
let notEqual = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {
    if (storeA < storeB) {
        console.log(" Store A has a lower price.")
    } else if (storeA > storeB) {
        console.log(" Store B has a lower price.")
    } else {
        console.log(" Store A and Store B have the same price.")
    } // end if else if
} // end compareStorePrices function

//compareStorePrices(10, 5);
//compareStorePrices(10, 10);
//compareStorePrices(5, 10);

function numSquare (number) {
    return number * number;
} // end numSquare function

let squaredNum = numSquare(538);
console.log(squaredNum);
 */

/* SCOPE

Certain values are only accessible within certain levels of code
    --Global Scope: variables will be accessible anywhere in code
    --Function Scope: variables defined in function will only be available within the function
    --Block Scope: variables defined in code block will only be accessible within that block

let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    let totalOfNums = n + m + b;
    console.log(totalOfNums);
}

addNumbers (2, 3, 10);
 */

/* ARRAYS
--Data structure that holds multiple pieces of data
--Instead of keys, like in objects, arrays use indexes to reference a position in the array

Create Array with []
Add list of values separated by commas
Arrays start at 0 index - when referencing an array [1, 2, 3] index 0=1, 1=2, 2=3
Access array by putting array name in parameters (arrayName[index value])

Arrays can be nested within arrays using the same creation method within the outer array

arrayName.length = checks the length of values in the array
    can be used to access the entire length of the array regardless of how many changes may be completed to the array

let ourArray  = [1, 2, 3, 4, 5];
console.log(ourArray[0]);

//**LOOPS

//--FOR LOOP--
//for (counter; comparison; increment) { }
//loops can also be nested within loops, but it's not recommended

let arrLength = ourArray.length;
for(let i = 0; i < 5; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}

//--WHILE LOOP--
// runs until a condition returns false
// while (conditional) {}

let x = 0;
while (x < 10) {
    console.log(x);
    x = x + 1;
}

 */