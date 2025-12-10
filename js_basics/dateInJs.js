let myDate=new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);


let myCreatedDate=new Date(2025,4,30)//in js dates start from "0" ,like "0" means  january and so on
console.log(myCreatedDate.toDateString()); //it  gives the details of given dates 



let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());



let anotherDate=new Date()


console.log(anotherDate.getMonth()+1);//+1 is use to find correct time date because js save data from "0" 
console.log(anotherDate.getDay()+1);
console.log(anotherDate.getFullYear());


console.log(anotherDate.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    day:'numeric',
})
)
    
    


