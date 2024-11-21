// console.log(10)
// //printing statement
// //console.log()
// //two ways:
// //terminal - node [file name]
// //extension - code runner


// //how to write the js code:

// //syntax:
// //variable --> container to store the values
// //variable_type variable_name= value
// //console.log(variable_name)

// var sugarbox = "sugar"
// console.log(sugarbox);

// //variable types :

// //-->var
// //-->let
// //-->const

// ///var
// var a = 10 //redeclaration
// var a = 5 //reassign
// console.log(a);

// //let
//     let b = 10 // it can't redeclare
//         b = 5  //reassign
//     console.log(b);

// // const:
//     const c = 10 // it can't redeclare
//      //   c = 5   // it can't reassign
//     console.log(c);

// //datatypes:

//     //-->primitive datatypes:
//     //-->non-primivitive datatypes:

// //primitive datatypes:

//      //string -"dfat"
//      //number -1234 nad 23.3

//      var num =10.1
//      console.log(num);

// //boolean - true or false

//      var t = false
//      console.log(t);

// //null:

//      var n = null
//      console.log(n);

// //undefined:

//      let g 
//      console.log(g);
     
//  //non-primivitive datatypes:

//  //Array - [] - collection of values and data within the square brackets
     
//      var arr = ["chennai",1,23.5,true,null]
//      console.log(arr[3])

//      //length: starts with 1
//      //index :starts with zero

// //object - {}

//      // object --collection of key and value pairs 

//      var obj ={
//         name:"hari",
//         age:10,
//         std:"v"

//      }
//      console.log(obj)

// //funtion: block of code

// //funtion statement or declaration

//      //syntax:
//      //funtion var_name(){
//      //code
//      //}
//      //var_name() // to call the function

//      //parameter and arguments
//      //parameter - is like an variable name
//      //argument = value 

//      function box(x){//parameter
//         console.log(x)
//      }
//      box("jk")//arguments

//      //return:

//      function cash(x){
//         return x
//      }
//      console.log(cash("Rs:"+100))

//  //function expression:storing the function inside the variable name is called

//       var fn =function (){ //anonymous function 
//         console.log("hello im function expression")
//       }
//       fn()
// // arrow function :short hand syntax:
//       //syntax://()=>{}

//         var arr=(x)=>{console.log(x)}
//         arr("arrow function")
//         var arr=(x)=>{console.log(x*x)}
//         arr(2)


// //Operators:

//     //Arithemetic operator
//     //Assignment operator
//     //Logical operator
//     //Comparsion operator
//     //Equality operator
//     //Ternary operator

// //Arithemetic operator
//    //+add,-sub,*mul,/div,%modulus,**exponent,increment++,decrement--

//    var num=2
//    var num2=5
//    console.log(num**num2);//2^5=2*2*2*2*2

//    //increment :
//     var inc=5
//     inc++//5+1
//     console.log(inc);

// //decrement:
// var dec =5
// dec--//5-1
// console.log(dec);

// //Assignment operator -->first task -to find the non-working arithmetic operators--> [decrement,increment] 
//  var num=10
//  num+=5//15+=5
//  console.log(num);

 //Logical operator:
 //&&=>and
 //||=>or
 //!=>not
//   var a = 10
//   var d = 10
//   console.log(a!=d);

//comparsion operator
//lessthan<,greaterthan >,lessthanorequal<=,greaterthanorequal>=

// var a = 10
// var  e= 10
// console.log(a<=e);

//Equality operator[interview question]
//==[double equals ,loose equality]
//it only check the value not the data type]
//  var num = 10
//  var num2 = "10"
//  console.log(num == num2);

//===[triple equals, strict equality]
//it checks both the value and the datatypes
// var num3 = 10
// var num4 = "10"
// console.log(num3 ===num4); 

//Ternary operator
//syntax:
//(condition)? "value_true_statement":"value_false_statement"
// var age = 20
//  var limit = (age>=18)?"he is eligible to vote ":"he is not eligible to vote"
//  console.log(limit);

 //task:
 //155 to 188 "he is eligible to ride ":"he is not eligible to ride" 
//   var ride = 155
//   var limit = (ride>=155 && ride<= 188) ?"he is eligible to ride ":"he is not eligible to ride"
//   console.log(limit);

//loop:

//for 
//while 
//do-while

//for:
//syntax:
//for (initalization; condition ; iteration[increment,decrement]){
//code
//}

// for (var i = 0 ;i<=5;i++){
//     console.log(i);
// }
//step:
//step 1 : i = 0 => 0<5[true] =>  print : 0 => i++ => 0+1 = 1 
//step 2 : i = 1 => 1<5[true] =>  print : 1 => i++ => 1+1 = 2
//step 3 : i = 2 => 2<5[true] =>  print : 2 => i++ => 2+1 = 3
//step 4 : i = 3 => 3<5[true] =>  print : 3 => i++ => 3+1 = 4
//step 5 : i = 4 => 4<5[true] =>  print : 4 => i++ => 4+1 = 5
//step 6 : i = 5 => 5<=5[true] =>  print :5 => i++ => 5+1 = 6
//step 7 : i = 6 => 6<=5[false] loop will stop 

// for (var i = 5 ;i>0;i--){
//     console.log(i);
// }

//string:

   //let str = "java"
  // for (let i = 0 ; i<str.length;i++){
   // console.log(str[i]);
//}
//Task:
//reverse-avaj -interview question
// print java  in horizontal
// let str = "java";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }  

// console.log(reversedStr); // Output: avaj 

// let str = "java";
// let spacedStr = "";

// for (let i = 0; i < str.length; i++) {
//     spacedStr += str[i] + " ";
// }

// console.log(spacedStr.trim()); // Output: j a v a

// let str = "java"
// let store = " "
// for (var i = str.length-1 ;i>=0 ;i--){
//     store += str[i]

// }
// console.log(store)
// // task o to 10 = 55
// //while loop - Entry level condition checking loop 
// var count = 0 //initailization
// while (count<5){ //condition
//     console.log(count);//print statement
//     count++//iteration
// }
//task :
//descending order

// //do -while

//  var docount = 5
//  do{
//     console.log(docount);
//     docount++
//  }while(docount<5)


 //for methods -
 //foreach - to read the array
 //syntax
 //var_name.forEach((value,index,acctualarray)=>)
//     var weeks = ["sunday","monday","tuesday","wednesday","thursday"]
//     weeks.forEach((val,idx,accarr)=>console.log(val,idx,accarr))


//  //forin - to read or loop the object
//  //syntax :
//  // for (var_type var_name in obj_name){
//  // //}
 
//  var obj ={
//     name : "sangeetha",
//      dep : "IT"
//  }
//  for (var x in obj ){
//     console.log(x+"<=>"+obj[x]);
//  }

 //forof - string or array loop
 // syntax :
 //for (var_type var_nameof str_name){
 //}

//  let stri = "happy"
//  for(var x of stri){
//     console.log(x)

//  }



 //----->array methods:

//---> push - to add  a value in the last of an array:

      //  var billcounter = ["jai","haji","sangee","kamal"]
     //  billcounter.push("murthy");
    //   console.log(billcounter);

//--->pop - to remove a value in the last of an array:

     //billcounter.pop()
    //console.log(billcounter);

//--->unshift

     //  var ap =["sangee","haji","swetha","murthy"]
    //  ap.unshift("kamalesh")
   //  console.log(ap);

//--->shift

    //  ap.shift()
    // console.log(ap);
    // ap.shift()
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
// the sort () methods arranges the elements of an array in ascending or 
//descending order by default, modifying the orginal array .
// // in numbers 
// const arrnum = [2,5,7,9,8,4,];
// arrnum.sort((a,b)=>a-b);
//if the result of a-b is negative , a is placed before b.
// if the is positive , b is placed before a.//ba
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

// var str = "annanagar"
//  var rev = str.split("").reverse().join(" ")
//  console.log(rev);


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
// let  weeks = ["sunday","monday","tuesday","thursday","saturday"]
// weeks.splice(3,1,"wednesday")
// console.log(weeks);


//string methods:

//--->includes:
// var inc = "javascript"
// var inc2 = inc.includes("tp")
// console.log(inc2);

//--->touppercase:
// var up = "annanagar"
// console.log(up.toUpperCase());

//--->tolowercase:

// var low = "OMR"
// console.log(low.toLowerCase());

//--->indexof : it will take the first occurence of the duplicate value

// var idx = "america"
// console.log(idx.indexOf("a"));

//--->lastindexof :it will take the last occurence of the duplicate value
 
// var lidx = "america"
// console.log(lidx.lastIndexOf("a"));

//--->length -- to check the length of the string
// var l = "java"
// console.log(l.length);

//--->charAt-- to get the  specific  character based on the indices
//  var ch ="javascript"
//  console.log(ch.charAt(6));

 //--->replace :
  
//  var rep = "hello world"
//  console.log(rep.replace("hello","welcome"));


 //--->repeat : to repeat the string

//  var val = "world"
//  console.log(val.repeat(3));

 //--->startswith : to check the first character in string 

//  var name1 = "Javascript"
//  console.log(name1.startsWith("J"));

 //--->endswith :to check the last character in string 

//  var name2 = "Javascript"
//  console.log(name2.endsWith("t"));

 //---->if-else :

 //syntax :

 // if (condition){
 //true statement
 //}else {
 //false_statement}
 //}

//  let age  = 10 
//  if(age>=18){
//       console.log("he is eligible to vote");
//     }else{
//       console.log("he is  not eligible to vote")
//     }

//---->else-if
//     let mark = 40;
//     if (mark>=90 && mark <= 100){
//         console.log("Grade A");
//     }else if (mark>=80){
//         console.l("Grade B");
//     }else if (mark>=70){
//         console.l("Grade c");
//     }else if (mark>=60){
//         console.l("Grade d");
//    }else if (mark>=50){
//         console.l("Grade E");
//     }else {
//        console.l("FAIL");
//     }

//--->Task :
    //shareauto - 8 - "auto will move"
    //less than 8 -"wait for passengers"
    //greater than 8 - "drop the passenger"

// function Auto(pas) {
//     if (pas === 8) {
//         console.log("Auto will move");
//     } else if (pas < 8) {
//         console.log("Wait for passengers");
//     } else {
//         console.log("Drop the passenger");
//     }
// }Auto(9);  


      
//TASK--->functions:

//1.---->reverse the string inside the funtion =>"trendnologies".=> X
//Function

// var a = "trendnologies"
// var b = " "
// for (var i = a.length-1;i>=0;i--){
//     b+=a[i]
// }console.log(b);

// let str = "trendnologies"
// let rev = str.split ("").reverse().join("")
// console.log(rev);

// //2.---->iterate 0 to 10 even numbers inside the function => loop

//     function printEvenNumbers() {
//        for (let i = 0; i <= 10; i++) {
//           if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }printEvenNumbers();

// 3.loopings:
//---->["mango","apple","orange","banana","iceapple"]=>loop the array

// let fruits = ["mango", "apple", "orange", "banana", "iceapple"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//---->print the odd numbers between 20 to 30
    // for (let i =20;i<=30;i++){
    //     if(i % 2 !==0){
    //         console.log(i);
    //     }
    // }
//---->find the maximum numbers of an array[10,25,67,11,98]

//---->object : collection  key and value pairs :
// var obj = {
//     name : "jai",
//     age :20
// }
//to update the values
// obj.name ="aravindh"
// obj.age = 15
// console.log(obj);
//get the values from the obj
//console.log(obj.name);
//console.log(obj.age);


// //nseted array and object :

// var sclobj =[
//     {
//         name : "kalai",
//         age :15,
//         std : "x"
//     },
//     {
//          name : "logan",
//         age :13,
//         std : "v"

//     },
//     { 
//         name : "sakthi",
//         age :14,
//         std : "VI"
//     }
// ]
// console.log(sclobj[1].name);

    //    var obj = {
    //     name : "jai",
    //     age :20
    // }
    // let key = Object.keys(obj)
    // console.log(keys);
    // let val = Object.values(obj)
    // console.log(values);
//TASK
    // nested array and obj .ofc [3 employee data]-- 2nd data name role [update] - 3rd data keys and value
    // var emp =[
    //          {
    //              name : "sangeetha",
    //              age :27,
    //             role : "Devlopere"
    //          },
    //         {
    //              name : "Dhaarani",
    //              age :26,
    //              role : "Tester"
        
    //          },
    //         { 
    //             name : "Kamal",
    //              age :25,
    //              role : "QA"
    //          }

    //      ]
    //      emp[1].name = "tharani";
    //      emp[1].role = "Designer";
    //      console.log(emp[1]);
    //      var key = Object.keys(emp[2])
    //      console.log(key);
    //      var val = Object.values(emp[2])
    //      console.log(val);

//object destructuring :
// destructuring - object destructuring in javascript allows you to extract multiple proporties
//form an object and assign them to variables in a concise and readable way 
//enhancing code readablity webassembly ,enhanching code readability and reducing repetition.


// var obj = {
//     name : "sandy",
//     age : 24,
//     dep : "IT"
// }
// const {name, age,dep} = obj
// console.log(name,age);

// ---->setimeout function :

// setTimeout(()=>{
//     console.log("hello im javascript");
    
// },300)

//---->This :

// var obj = {
//     name : "hari",
//     age : 12,
//     det : function(){
//         console.log(this.age)
//     }
// }
// console.log(obj);
// obj.det()

//---->constructor:

// function Bike (name,year,model){
         //key        //value
//     this.Bikename = name
//     this.bikeyear = year
//     this.bikemodel = model
// }
// //object
// var details = new Bike ("duke","2020","390")
// console.log(details);
// var details2 = new Bike ("duke","2021","250")
// console.log(details2);


//--->template literals or string literals `${}` :

// var a = "sakthi"
// var b = "hi"
// console.log(b+a+"how are you ");//old
// console.log(`${b} ${a} how are you !!`);//new

//funtion anonymous -->to call 
// function Bike (name,year,model){

//     this.Bikename = name
//     this.bikeyear = year
//     this.bikemodel = model
//     this.bikedetails = function(){
//         console.log(`the bike name is ${name} and the year is ${year} and the model ${model} `);
        
//     }
// }
// //object
// var details = new Bike ("duke","2020","390")
// console.log(details);
// var details2 = new Bike ("duke","2021","250")
// console.log(details2);
// details.bikedetails()


//--->class

// class ofc {
//     constructor(name,dep,id){
//         this.name = name
//         this.dep = dep 
//         this.id =id
//     }
//     fulldetails(){
//         console.log(`the name is ${this.name} dep is ${this.dep } and the id number ${this.id}`);
        
//     }
// }
// var details = new ofc("logan","IT",123)
// console.log(details);
// details.fulldetails()

//--->callback:passing the  function into the another function arguments

// function greets(){
//     console.log("hello welcome");
    
// }
// function name(x){
//     console.log("jai");
//     x()
    
// }
// name(greets)


//---->interconnecting multiple function 
// function task1(x){
//     console.log("task1");
//     x();
    
// }
// function task2(y){
//     console.log("task2");
//     y();
// }
// function task3(z){
//     console.log("task3");
//     z();
// }
// function task4 (){
//     console.log("task4");
    
// }
// task1(()=>{
//     task2(()=>{
//         task3(task4);
//     });
// });

//callback hell:

    // function task1(x){
    //     setTimeout(()=>{
    //         console.log("task1");
    //          x();
    //     },3000) 
        
    // }
    // function task2(y){
    //     setTimeout(()=>{
    //         console.log("task2");
    //           y();
    //     },2000)

    // }    
    // function task3(z){
    //      setTimeout(()=>{
    //     console.log("task3");
    //     z();
      
    // },1000)
    // }
    // function task4 (){
    //    setTimeout(()=>{
    //     console.log("task4");
    // },500)
    // }
    //      task1(()=>{
    //         task2(()=>{
    //             task3(task4);
    //         });
    //     });
        
    

    //promise :
    //resolve:
    //reject:

    //syntax:
    //new promise ((resolve,reject)=>) 

        //TASK:
        //hari - ofc
        //wake at 5am -2 
        //gym -3 
        //ofc -1



//Async and await

//Async - it returns the promise
//await  - it will make the promise wait

// async function data(){
//     try{
//         const waterbottle = wait water();
//         console.log(waterbottle);

//         const rooms = await room();
//         console.log(rooms);

//         const garbage = await trash();
//         console.log(garbage);   
//     }catch(e){
//         console.log();  

//     }
// }
// data();



      

























      


    
 
















 



 


























