// String declaration using double quotes (can also use single quotes)
let name = "soham";

// String declaration using single quotes
let surname = 'mali';

// String concatenation using `+` operator
let fullName = name + " " + surname;
console.log(fullName); // Output: "soham mali"

// Variable declaration for age
let age = 19;

// Template literal for string interpolation using backticks ``
// Allows embedding variables with `${variableName}`
console.log(`${fullName} is ${age} years old`); // Output: "soham mali is 19 years old"

// Accessing character at index 2
console.log(fullName[2]); // Output: "h"

// Attempting to change the first character of the string (won't work)
// Strings in JavaScript are immutable, so this has no effect
fullName[0] = 'z';
console.log(fullName[0]); // Output: "s" (no change)

 