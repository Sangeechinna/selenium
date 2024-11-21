// Loops:

// for loop:
// Syntax:
// for (initialization; condition; iteration[increment,decrement]) {
//   code
// }

for (var i = 0; i <= 5; i++) {
    console.log(i);
}
// steps:
// step 1: i = 0 => 0 < 5 [true] => print: 0 => i++ => 0 + 1 = 1
// step 2: i = 1 => 1 < 5 [true] => print: 1 => i++ => 1 + 1 = 2
// step 3: i = 2 => 2 < 5 [true] => print: 2 => i++ => 2 + 1 = 3
// step 4: i = 3 => 3 < 5 [true] => print: 3 => i++ => 3 + 1 = 4
// step 5: i = 4 => 4 < 5 [true] => print: 4 => i++ => 4 + 1 = 5
// step 6: i = 5 => 5 <= 5 [true] => print: 5 => i++ => 5 + 1 = 6
// step 7: i = 6 => 6 <= 5 [false] loop will stop

for (var i = 5; i > 0; i--) {
    console.log(i);
}

// string:

// let str = "java";
// let store = " ";
// for (var i = str.length - 1; i >= 0; i--) {
//     store += str[i];
// }
// console.log(store); // Output: " avaj"

// while loop - Entry level condition checking loop
var count = 0; // initialization
while (count < 5) { // condition
    console.log(count); // print statement
    count++; // iteration
}

// do-while loop
var docount = 5;
do {
    console.log(docount);
    docount++;
} while (docount < 5);

