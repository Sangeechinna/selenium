
//---->object : collection  key and value pairs :
// var obj = {
//     name : "jai",
//     age :20
// }
//--->to update the values
// obj.name ="aravindh"
// obj.age = 15
// console.log(obj);
//get the values from the obj
//console.log(obj.name);
//console.log(obj.age);


//---->Nseted array and object :

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
//         std : "vI"
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
//TASK:
    // nested array and obj .ofc [3 employee data]-- 2nd data name role [update] - 3rd data keys and value
    var emp =[
        {
            name : "sangeetha",
            age :27,
           dep : "Devlopere"
        },
       {
            name : "Dhaarani",
            age :26,
            dep : "Tester"
   
        },
       { 
           name : "Kamal",
            age :25,
            dep : "QA"
        }

    ]
    emp[1].name = "tharani";
    emp[1].dep = "Designer";
    console.log(emp[1]);
    var key = Object.keys(emp[2])
    console.log(key);
    var val = Object.values(emp[2])
    console.log(val);