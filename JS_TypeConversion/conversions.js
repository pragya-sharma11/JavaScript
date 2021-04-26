//type conversion
let num = 34;
console.log(num, typeof num); //34 number
num = String(num) ;
console.log(num, typeof num) ;//34 String
console.log(Number([1,2,3,4,5]), typeof Number([1,2,3,4,5])) //NaN Number

let variable = '67';
variable = Boolean(variable) //true typeof is Boolean

let nString = Number('23d44')
console.log(nString, typeof(nString))// NaN number

//parseInt, parseFloat
let number = parseInt('34.4078')
console.log(number, typeof number)//34 number
number = parseFloat('34.67675')
console.log(number, typeof number) //34.67675 number

//toFixed is used to rounde of the number upto the digit assigned in parameter of toFixed
console.log(number.toFixed(6), typeof number)//34.676749 number


//type coercion
let mystr = Number('689');
let mynum = 45
console.log(mystr + '-' +mynum); //689-45