//// String Methods ////

// // Example of stringName.trim()

// let str="     hello       ";

// let trimmedStr = str.trim();

// console.log(trimmedStr)


// // Example of stringName.toUpperCase() & stringName.toLowerCase()

// let str="Prince";

// let UpperStr = str.toUpperCase();
// let LowerStr = str.toLowerCase();

// console.log(UpperStr)
// console.log(LowerStr)


// // Example of stringName.indexof()

// let str="JSusescamelCase ";

// console.log(str.indexOf("Case"));            
// console.log(str.indexOf("Snake"));                  // Not Found, So -1
// console.log(str.indexOf("J"))



// // Example of Method Chaining

// let str="     JS isCaseSensitive     ";

// console.log(str.toUpperCase().trim())


// // Example of stringName.slice()

// let str = "lloveCoding";

// console.log(str.slice(5))          // "Coding"

// console.log(str.slice(1, 5))     // "love"

// str.slice(-num) = str.slice(length-num)


//// Example of slice method

let str = "lloveCoding";

console.log(str.slice("love", "do"))           // "IdoCoding"

console.log(str.slice("o","x"))                // "IlxveCoding"