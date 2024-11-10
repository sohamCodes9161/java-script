// Declare a number
let myNum = 123;

// Convert the number to a string using .toString() or String(variable)
let strOfMyNum = myNum.toString(); // Alternative: String(myNum)
console.log(strOfMyNum); // Output: "123"

// Convert the number to a boolean
let boolOfMyNum = Boolean(myNum);
console.log(boolOfMyNum); // Output: true (non-zero numbers are true)

// Parsing a string with non-numeric characters
let str = "123abc23";

// Convert string to a number using Number() - returns NaN if the string is not purely numeric
console.log(Number(str)); // Output: NaN (since "abc" is not a number)

// Use parseInt() to extract numeric values at the beginning of the string
console.log(parseInt(str)); // Output: 123 (stops parsing after non-numeric characters)
// Alternative: use parseFloat() to retain decimals if present in the string

// Boolean conversions
console.log(Boolean(1));        // Output: true (1 is truthy)
console.log(Boolean(0));        // Output: false (0 is falsy)
console.log(Boolean(""));       // Output: false (empty string is falsy)
console.log(Boolean("hello"));  // Output: true (non-empty strings are truthy)

// Implicit type conversion by JavaScript (Type Coercion)
console.log("2" + 3); // Output: "23" (number 3 is converted to string and concatenated)
// With other operators, JavaScript tries to convert strings to numbers:
console.log("5" * 2); // Output: 10 (string "5" is converted to number 5)
console.log("true" == 1); // Output: false (JS converts true/false to 1/0 for loose equality)
console.log("0" == false); // Output: true (loose equality converts 0 and "0" to false)



