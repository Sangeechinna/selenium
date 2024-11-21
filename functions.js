// Function:( Block of code)

// Function statement or declaration:

        // Syntax:

        //function var_name() {
            //   code
            // }
            // var_name() // to call the function
// Parameter and arguments
// Parameter - like a variable name
// Argument - value

function box(x) { // parameter
    console.log(x);
}
box("jk"); // argument

// Return:
function cash(x) {
    return x;
}
console.log(cash("Rs:" + 100));

// Function expression: storing the function inside a variable

   var fn = function() { // anonymous function
    console.log("hello, I'm a function expression");
}
fn();

// Arrow function: short hand syntax
// Syntax: () => {}

var arr = (x) => { console.log(x); }
arr("arrow function");

var arr = (x) => { console.log(x * x); }
arr(2);
