//  ----->array methods:

// ---> push - to add  a value in the last of an array:

       var billcounter = ["jai","haji","sangee","kamal"]
      billcounter.push("murthy");
      console.log(billcounter);

// --->pop - to remove a value in the last of an array:

     billcounter.pop()
    console.log(billcounter);

//--->unshift

      var ap =["sangee","haji","swetha","murthy"]
     ap.unshift("kamalesh")
    console.log(ap);

//--->shift

    //  ap.shift()
    // console.log(ap);

//--->concat - used to add two or more arrays:

//    var fruits = ["apple","pineapple","iceapple"]
//    var veg = ["potato","tomato","cucumber"]
//    var cosmetic = ["powder","lipstick"]
//    var cover = fruits.concat(veg,cosmetic) 
//    console.log(cover);

// //task
//    let z = 10 
//    do{
//     console.log(z);z--;

//    } while (z>=0)

//sort ->
// the sort () methods arrange the elements of an array in ascending or 
//descending order by default, modifying the orginal array .
// // in numbers 
// const arrnum = [2,5,7,9,8,4,];
// arrnum.sort((a,b)=>a-b);
//if the result of a-b is negative , a is placed before b.
// if the a is positive , b is placed before a.   //ba
//if the result is zero , the order remains unchanged (which is relavant for elements that are equal)

// var num = [8,9,7,6,5,4,3,2,1]
// num.sort ((a,b)=>b-a)
// console.log(num);


//--->split:
//string=> array
// var s = "java script"
// var spl = s.split(" ")
// console.log(spl);

//--->join :
//array => string
// var j = spl.join("")
// console.log(j);

//--->reverse:

var str = "annanagar"
 var rev = str.split("").reverse().join(" ")
 console.log(rev);


//--->slice: slice is used to cut the array based on indices
//   let birds = ["parrot","peacock","pigeon","eagle","vuluture"]
//   let slice = birds.slice(2,-1)
//   console.log(slice);

//--->splice: to update the  value in array

//syntax:
//var_name.splice(index,counter[0,1],value)
//0 => push and update
//1 => override and update 

// let weeks = ["sunday","monday","tuesday","thursday","saturday"]
// weeks.splice(3,0,"wednesday")
// console.log(weeks);

//--->override
let  weeks = ["sunday","monday","tuesday","thursday","saturday"]
weeks.splice(3,1,"wednesday")
console.log(weeks);
