const myarray=[1 ,2,3,4,5]
const array=["ram","Shyam","hari"]
const array1=new Array(1,2,3,4,5)

console.log(myarray);


myarray.push(6)//with the help of push we can add (push) another element in an  array 


console.log(myarray);
myarray.pop()   //with the help of pop we can remove  the last element (LIFO)
console.log(myarray);
myarray.unshift(8)  //unshift use to add new element as a first element in an array 
console.log(myarray);

myarray.shift()  //it is use to remove the first element from array
console.log(myarray);

console.log(myarray.includes(0));//it gives the answer given element is in the array
console.log(myarray.includes(2));
console.log(myarray.indexOf(9));//it gives -1 if given element is not in the array 
console.log(myarray.indexOf(2));//it gives the index of a element starting from "0"

const newArray=myarray.join()
console.log(newArray);// it convert the array into string



//++++++++++  slice ,splice    ++++++//

console.log("A " , myarray);
const n1=myarray.slice(1,3)
console.log(n1);
console.log("B " ,myarray)
const n2=myarray.slice(0,4)
console.log(n2);
console.log(myarray);




const name=["Ram","Shyam","Hari","krishna"]
const na1=name.slice(1,3)
console.log(na1);


console.log("A" ,myarray);
const mySplice=myarray.splice(1,3)
console.log(mySplice);
console.log(myarray);


// the main difference in slice and splice are slice can not change the original array but splice also change the original array ,slice use for copy the original array but splice is use to add,remove and replace the element //
