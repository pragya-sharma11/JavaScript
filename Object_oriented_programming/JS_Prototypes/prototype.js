//Prototype:-- It is used as blueprint/model/template to create objects
//__proto__:-- It is a hidden pointer which will point to the blueprint from which that object is created.
 
let str1 = "Asdasd" //3 levels of proto away from null ---> String---> object----> null  and same for all other
let num = 233      //3 levels of proto away from null ----> Boolean---> object--> null
let bool = true    //3 levels of proto away from null
let arr = [234, 345, 456, 567]  //3 levels of proto away from null
let obj = {a:10, b:"fgjh"} //2 levels of proto away from null
 fun = function (){     //3 levels of proto away from null
    console.log("yay!!")
}

console.log('typeof String : ', typeof String)
console.log('typeof Boolean : ', typeof Boolean)
console.log('typeof Number : ', typeof Number)
console.log('typeof Array : ', typeof Array)  //function but [2,3,5,6]-->typeof is Object
console.log('typeof Object : ', typeof Object)
console.log('typeof FUnction : ', typeof Function)//all above are function type
//these functions are globally present in windows when we are not using node js.
Array(7)//gives empty string of length 7
Array(1,4,6)//gives array of length 3 having these elements.
Array('fghj')//array of length 1 having 1 elemnt fghj
//this discrepency is happened with 1 argument of Number type in Array 
Boolean(132)//true--->anything except 0, '' or null, is true
String(43)//anything inside argument is converted into string value
Number('45')//45
Number('dfg')//NaN
Number(true)//1
Number(false)//0

console.log("===========Prototype Chain===========")
console.log(str.__proto__.__proto__ == obj.__proto__)//true---->sam efor all other which are having 3 levels of proto
//Everything ois indirectly inherits from the same thing that the obj is inherited from.
//In javascript, everything is essentially an Object due to inheritance using proto
//obj.__proto__---> root of Javascript from where everything gets inheritted

console.log("===========1 level up Prototype=============")
console.log(obj.__proto__ ==Object.prototype )// true
console.log(str.__proto__ ==String.prototype )
console.log(num.__proto__ ==Number.prototype )
console.log(bool.__proto__ ==Boolean.prototype )
console.log(fun.__proto__ ==Function.prototype )
console.log(arr.__proto__ ==Array.prototype )
console.log(Object.prototype.isPrototypeOf(String.prototype))//true
console.log(Object.prototype.isPrototypeOf(undefined))//false
//apart from undefined, every thing hails from Object Prototype
console.log('String.prototype inherits from Object.prototype')

//function is also a object so
fun.a=45
fun.k="fghjkc"
console.log(fun)

let x= Object.create(Boolean.prototype)
//x.prototype doesn't exist. but x.__proto__ exists.it is a pointer which points prototype of booleanconsole.log("typeof Object.create(Boolean.prototype)", typeof x) // Object
console.log(bool.__proto__ == x.__proto__)//true
console.log(typeof x == typeof bool)//false
typeof x // Object
typeof bool //Boolean 
//It means if proto of 2 things are same doesn't mean their typeof are same
//It just mean they have inherited the same thing
//like in java:--if 2 classes inherit 1 same class doesn't mean these subclasses are same.

 str2="sdgehrtdbdfb"
 console.log('str1.charAt == str2.charAt', str1.charAt == str2.charAt)//true--->means they are pointing to same reference
 str1.charAt = function (){
     return 'x'
 }// doesn't make any sense coz this is strictly denied in javascript to change or re-define prebuilt methods, classes, objects or prototypes.
 //If we want to change it then we do like
 String.prototype.charAt= function(){
    return 'x'
 }
//STring.prototype contains all default functions of String
console.log(String.prototype)
console.log(Number.prototype)
console.log(Array.prototype)
console.log(Boolean.prototype)


 console.log(str1.__proto__.charAt)//function charAt()---> this means it exists in String.prototype coz str1.__proto__.proto__.charAt is undefined
