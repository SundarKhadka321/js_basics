//const tinderUser=new Object()//singleton object

const tinderUser={}//this is not singleton object 
tinderUser.id='123and'
tinderUser.name='sundar'
tinderUser.age=23
tinderUser.sex='male'
// console.log(tinderUser);


const newUser={
    email:'sundar@google.com',
    userFullname: {
        userFirstname:'sundar',
        userLastname:'khadka',

    },
    userAddress: {
        userCountry: "nepal",
        userMunicipility:'gurans'

    }
}

console.log(newUser);
console.log(newUser.userFullname);

console.log(newUser.userFullname.userFirstname);


const object1= { 1:'a' ,2:"b"}
const object2={ 3:'c' ,4:'d'}
const object3={4: 'e',5:'f'}

// const newobject= Object.assign( object1, object2, object3)  //this is not good way to merge the object 

// console.log(object1);
// console.log(newobject)
// when we can not use {}  which is target and result of those are same because target is object1 and conflict happen 


const newobject= Object.assign( {} ,object1, object2, object3)//this is good way for merge the object here {} is the target and other object are source this way better than first one but this is also not better way so how we go

console.log(newobject);


newObject={...object1 ,...object2,...object3}
// console.log(newObject);




console.log(tinderUser);

console.log(Object.keys(tinderUser))//object.keys is used to convert object into array which help you to use loops ,and other 

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

console.log(tinderUser.hasOwnProperty("gender"));
