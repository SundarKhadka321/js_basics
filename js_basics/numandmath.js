const score=3333

console.log(score);
 const newScore =new Number(333)
  console.log(newScore);
console.log(newScore.toString().length);//use to changer number into string and .lenght is use to 
// calculate the lengh of this number string
console.log(newScore.toFixed(4));//toFixed is use to give the after value
//  in .form and it that much 0 how to given like 1,2,3

  
  const precisionValue=112.7988
  console.log(precisionValue.toPrecision(4));//dont give a pricision less value  than number 
  // like for 112 dont give the 2or lless presision value which gives different value
  

  const number=100000
  console.log(number.toLocaleString());//toLocalstring is use to reprsent the us standard number 
  const newNumber=100000
  console.log(newNumber.toLocaleString('en-in'));// with localString en-in is use to represent nepali standard number
  
  









  //================= maths ==========================

   console.log(Math);
  
  console.log(Math.round(4.5556))//round is use to round off the number 
  console.log(Math.abs(-77));//abs(absolute) is change the negative value into positive
   console.log(Math.ceil(6.99)); //print the higher value in round off 
  console.log(Math.floor(8.98));//print the lower value in round off 
  console.log(Math.sqrt(25))//use to find the square root of any number 
  console.log(Math.max(22,24,444,23,988));//find the max value 
  console.log(Math.min(22,4,55,666,888))//find the min value


  console.log(Math.random());//random value is given in [0-1] S
  console.log(Math.random()*10 );//if you need the value from [1-10]
   console.log((Math.random()*10) +1);//here  we add 1 for avoid the value of 0 because randon number may be 0


  const max=20
  const min=10
  

  console.log(Math.random()*((max-min)+1) +min);//i need the value more than 10 so added that min
  
  console.log(Math.floor(Math.random()*(max-min+1))+min);//we know why we use floor
  
  