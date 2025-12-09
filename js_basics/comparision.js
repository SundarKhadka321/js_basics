

console.log(5>2);
console.log(1>=5);
console.log("3">4);  //this take string also as a number  compare them

console.log(null>0); //output is false  **/ 0>0 false
console.log(null==0); //output is false **/  null> 0 false
console.log(null>=0); //output is true **/ 0>=0 true
/*in those compare == can not convert null into numerical value and it remain null so it is false and 
 other case null converted into numerical value which is 0 and compare and result become like that */


console.log(5==5);  /*output is tuue because == only check the values it can not check 
datatype and the value is same so it is true */

console.log("5"=== 5);  /*output is false because it check value and datatype also and here
 one is string and another is number so it is false */

