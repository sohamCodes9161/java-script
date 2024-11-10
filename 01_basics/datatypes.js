let name="soham"
let age=19
let istudent=true
let bignum=324638437843949206
let occupation;
let future =null
let unique=Symbol("@")
console.table([unique,future,occupation,bignum, istudent, age,name])


/*1)Number: Represents all numeric values, both integers and floating points. JavaScript doesn’t distinguish between integers and floats, so 42 and 42.0 are treated the same. Special numeric values like Infinity and NaN (Not-a-Number) also fall under this type.

2)BigInt: Used for very large integers beyond the limit of the Number type (safe integer limit of ±2^53). BigInts are created by appending n to the end of an integer, like 123456789012345678901234567890n.

3)String: Represents text data and is enclosed in quotes ('text', "text", or `text`). JavaScript strings are immutable, meaning their values can’t be changed once created.

4)Boolean: Has only two values, true and false. Useful in conditional statements and logical operations.

5)Undefined: A variable that has been declared but not assigned a value. It signifies the absence of a defined value.

6)Null: Represents an intentional absence of any object value. Often used to indicate “no value” or “empty.” null is an object type but is used as a primitive.

7)Symbol: A unique, immutable value primarily used as a key for object properties. Every symbol is distinct, even if two symbols have the same description.
*/

