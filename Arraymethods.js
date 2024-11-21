// Array Methods:

// forEach - to read the array
// Syntax:
// var_name.forEach((value, index, actualArray) => {})
   // var weeks = ["sunday", "monday", "tuesday", "wednesday", "thursday"];
   // weeks.forEach((val, idx, accarr) => console.log(val, idx, accarr));
    
    // for-in - to read or loop through an object
    // Syntax:
    // for (var_type var_name in obj_name) {
    // }
    var obj = {
        name: "sangeetha",
        dep: "IT"
    };
    for (var x in obj) {
        console.log(x + "<=>" + obj[x]);
    }
    
    // for-of - to loop through a string or array
    // Syntax:
    // for (var_type var_name of str_name) {
    // }
    let stri = "happy";
    for (var x of stri) {
        console.log(x);
    }
    
    // Array Methods:
    // push - to add a value at the end of an array
    var billcounter = ["jai", "haji", "sangee", "kamal"];
    billcounter.push("murthy");
    console.log(billcounter); // Prints ["jai", "haji", "sangee", "kamal", "murthy"]
    
    // pop - to remove a value at the end of an array
    billcounter.pop();
    console.log(billcounter); // Prints ["jai", "haji", "sangee", "kamal"]
    
    // unshift - to add a value at the beginning of an array
    var ap = ["sangee", "haji", "swetha", "murthy"];
    ap.unshift("kamalesh");
    console.log(ap); // Prints ["kamalesh", "sangee", "haji", "swetha", "murthy"]
    
    // shift - to remove a value at the beginning of an array
    ap.shift();
    console.log(ap); // Prints ["sangee", "haji", "swetha", "murthy"]
    
    // concat - to combine two or more arrays
    var fruits = ["apple", "pineapple", "iceapple"];
    var veg = ["potato", "tomato", "cucumber"];
    var cosmetic = ["powder", "lipstick"];
    var cover = fruits.concat(veg, cosmetic);
    console.log(cover); // Prints combined array
    
    // sort - to sort the elements of an array
    const arrnum = [2, 5, 7, 9, 8, 4];
    arrnum.sort((a, b) => a - b);
    console.log(arrnum); // Prints sorted array in ascending order
    
    var num = [8, 9, 7, 6, 5, 4, 3, 2, 1];
    num.sort((a, b) => b - a);
    console.log(num); // Prints sorted array in descending order
    
    // split - to split a string into an array
    var s = "java script";
    var spl = s.split(" ");
    console.log(spl); // Prints ["java", "script"]
    
    // join - to join an array into a string
    var j = spl.join("");
    console.log(j); // Prints "javascript"
    
    // reverse - to reverse an array or string
    var str = "annanagar";
    var rev = str.split("").reverse().join(" ");
    console.log(rev); // Prints reversed string with spaces
    
    // slice - to cut the array based on indices
    let birds = ["parrot", "peacock", "pigeon", "eagle", "vulture"];
    let slice = birds.slice(2, -1);
    console.log(slice); // Prints sliced array
    
    // splice - to update the value in an array
    // Syntax:
    // var_name.splice(index, counter[0, 1], value)
    // 0 => push and update
    // 1 => override and update
    let weeks = ["sunday", "monday", "tuesday", "thursday", "saturday"];
    weeks.splice(3, 0, "wednesday");
    console.log(weeks); // Adds "wednesday" before "thursday"
    
    // Override
    weeks.splice(3, 1, "wednesday");
    console.log(weeks); // Replaces "thursday" with "wednesday"
    