
 //for methods -

 //--->foreach - to read the array

 //syntax
// var_name.forEach((value,index,actualarray)=>)

    var weeks = ["sunday","monday","tuesday","wednesday","thursday"]
    weeks.forEach((val,idx,accarr)=>console.log(val,idx,accarr))


 //--->forin - to read or loop the object

 //syntax :
 // for (var_type var_name in obj_name){
 // //}
 
 var obj ={
    name : "sangeetha",
     dep : "IT"
 }
 for (var x in obj ){
    console.log(x+"<=>"+obj[x]);
 }

 //--->forof - string or array loop

 //syntax :
 //for (var_type var_nameof str_name){
 //}

 let stri = "happy"
 for(var x of stri){
    console.log(x)

 }