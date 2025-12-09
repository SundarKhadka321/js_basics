let name ="sundar"
let age =23
//console.log(name + age);  this is not good technique instead of this use bellow technique
 
console.log(`my name is ${name}  and my age is ${age}`);  //this is the modern technique for concate 
//${} in this technique $ id used to inject variable in 




const newName =new String('sundar')

console.log(newName);
console.log(typeof newName);
console.log(newName [1]); //using this we can access all the letter of string which lies on which position
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3));
console.log(newName.charAt(5));
console.log(newName.indexOf("d"));


const newString=newName.substring(1,5)
console.log(newString);
const anotherString=newName.slice(-4,3)
console.log(anotherString);
const trimString="     hamiyastai    "
console.log(trimString);

console.log(trimString.trim());

const url=("https://sundarkhadka.com40%whatsup")
console.log(url.replace("40%","-"));//its is use to replace something with new thing

console.log(url.includes("sundar"))//its check gives string is includes or not

console.log(url.includes("sundardai"))


const splitString="i am sundar don"
const word=splitString.split(" ")//it split the sentence when it found space and it split from both side 
console.log(word[2]);

const wordString="i-am-sundar-don"
const newWord=wordString.split("-")//it split when it found the - and it split from both side 
console.log(newWord[2]);
