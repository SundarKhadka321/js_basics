"use strict"  //treat all code as a newer version


// alert(2+4)  // this is allowed because this is nodejs not a browser it only perform on browser


let name="sundar"    //string
let age=20      //number
let isLogIn=true    //boolean


//number 
//boolean
//string   use  "" mostly but use can use ''also
//null >=standalone value it means its empty value
//undefined=> the value is not assign 
//symbol >=we use it when it unique

//null is object and undefined is a undefined class
//in javascript null is actually not object it was a bug 

//object 


// console.log(typeof "name");
// console.log(typeof null);




/* data types 1> primitives =there are 7 data types
-string- number - boolean -null -undefined -symbol -bigInt
2>non primitives -there are 3 types of datatypes
-array -object -function  */


let id =Symbol("123")
let anotherId=Symbol("123")

console.log(id==anotherId);

   

//declertion of array, object and function

//array
let  myArray=["ram" ,"shyam" ,"hari"];
console.log(myArray);
console.log(typeof myArray);


//object
let myObject={
    name:"sundar",
    age:20,
    gender:"male",
    
}
console.log(myObject);


//function
let myFunction=function(){
    console.log("hello bro");
    

}
myFunction()


let bigNum=99900000088898n
console.log(typeof bigNum);





//memorry  
   //1.stack =>primitive data type and 
   //2.heap =>non-primitive data type




   let myYoutubeName='sundaryt'
   let anotherYoutubeName=myYoutubeName
   anotherYoutubeName= 'ytsundar'
   
   console.log(myYoutubeName);
   console.log(anotherYoutubeName);
   




   let userOne={
    email: "sundar@gmail.comm",
    id:10,
   }
   let userTwo=userOne
   
   userTwo.email="sunda00@gmail.com"
   userTwo.id=12
   
   console.log(userOne.email);
   console.log(userTwo.email);
   console.log(userTwo.id)
  
   
   
   
   