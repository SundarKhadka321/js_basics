const marvel_heros=["spiderman","ironman","thor"]
const dc_heros=["batman","superman","flash"]


//marvel_heros.push(dc_heros)
// console.log(marvel_heros);


const allHero=marvel_heros.concat(dc_heros)
console.log(allHero);


const using_spread=[...marvel_heros ,...dc_heros]
console.log(using_spread);// (this is called spread method) this is also use to add two arrays and this is the good way of add two array instead of concate


const num_array=[1,2,3,[4,5],6,[7,8,[2,3,4]]]
const new_num_array=num_array.flat(Infinity)
console.log(new_num_array);   //with the help of flat we can make one single array from depth array 
const num_arrays=[1,2,3,[4,5],6,[7,8,[2,3,4[0,7]]]]
const new_flat_arrays=num_arrays.flat(1)   //here "1" check the depth of array for operation if we give 2 it operate for depth of level 2


console.log(Array.from("sundar"))//it converts string into array  ,here we use "from" if it is a string
console.log(Array.of(2,3,4,5,6))//we use "of" ,if it is a number to change into array

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));
