
const myKey=Symbol("keyno1")

const myUser={
    name:"sundar",
    age:22,
    sex:"Male ",
    email:"sundar@gmail.com",

    [myKey]:"keyno1"


}

console.log(myUser["name"]);
console.log(myUser["age"]);
console.log(myUser["sex"]);
console.log(myUser[myKey]);//when we using key ,we does not need use ""  to access it 



console.log(myUser.email);//this is also the way of access  the element but this is not good way instead of this we need to use above way 

myUser.email="sundar@google.com" // this is the method for override the information
console.log(myUser["email"]);
delete myUser.age
console.log(myUser["age"]);//this is the way for delete something inside the object

// Object.freeze(myUser)   //object.freeze is use to freeze the all the object then we can not change ,delete,modify the information inside the object 

//myUser.name="rambahadur"
//myUser.email="sundar@microsoft.com"

// console.log(myUser);

myUser.greeting=function(){
    console.log("hello My User")

}
console.log(myUser.greeting());


myUser.greeting1=function(){
    console.log(`hello My User, ${this.name}`);
    
}
console.log(myUser.greeting1());
