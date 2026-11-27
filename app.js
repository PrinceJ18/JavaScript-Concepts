console.log("Console log here")

let a = 5;
let b = 10;

console.log("Sum is: ", a+b);

//--------------------------------------------------------------------------//

// Logical AND Operators

let marks = 75;

if (marks >= 33 && marks>=80) {
console. log("pass");
console. log("A+");

}

// Logical OR Operators

let marks = 75;

if (marks >= 33 || marks>=80) {
console. log("pass");
console. log("A+");

}

// Logical NOT Operator

let marks = 75;

if (!(marks <= 33)) {
console. log("pass");

}

// Truthy and falsy

// Here, Empty string --> False
if ("") {
console.log("it has true value");
} else {
console.log("it has false value");
}

// Here, Space in string --> True
if(" "){
console. log("it has true value");
}
else {
console. log("it has false value");}


// Switch Statement

let color = "red";

switch (color) {
    case "red":
    console.log("stop");
    break;

    case "yellow":
    console.log("slow down");
    break ;

    case "green":
    console.log("go");
    break;

    default:
    console.log("light is broken");

}


// Alert 

alert("This is a alert message for the user to see");