// Operators:
// Arithmetic operator
// Assignment operator
// Logical operator
// Comparison operator
// Equality operator
// Ternary operator

// Arithmetic operator
// + add, - sub, * mul, / div, % modulus, ** exponent, increment++, decrement--
var num = 2;
var num2 = 5;
console.log(num ** num2); // 2^5 = 2 * 2 * 2 * 2 * 2

// Increment
var inc = 5;
inc++; // 5 + 1
console.log(inc); // Prints 6

// Decrement
var dec = 5;
dec--; // 5 - 1
console.log(dec); // Prints 4

// Assignment operator
var num = 10;
num += 5; // 10 + 5
console.log(num); // Prints 15

// Logical operator
// && => and
// || => or
// ! => not
var a = 10;
var d = 10;
console.log(a != d); // Prints false

// Comparison operator
// < less than, > greater than, <= less than or equal to, >= greater than or equal to
var a = 10;
var e = 10;
console.log(a <= e); // Prints true

// Equality operator [interview question]
// == [double equals, loose equality]
// It only checks the value, not the data type
var num = 10;
var num2 = "10";
console.log(num == num2); // Prints true

// === [triple equals, strict equality]
// It checks both the value and the data type
var num3 = 10;
var num4 = "10";
console.log(num3 === num4); // Prints false

// Ternary operator
// Syntax:
// (condition) ? "value_true_statement" : "value_false_statement"
var age = 20;
var limit = (age >= 18) ? "he is eligible to vote" : "he is not eligible to vote";
console.log(limit); // Prints "he is eligible to vote"

// Task:
// 155 to 188 "he is eligible to ride" : "he is not eligible to ride"
var ride = 155;
var rideLimit = (ride >= 155 && ride <= 188) ? "he is eligible to ride" : "he is not eligible to ride";
console.log(rideLimit); // Prints "he is eligible to ride"
