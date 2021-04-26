let obj21 = {
    a:10,
    b:20,
    c:30
}
let obj2 = Object.create(obj1)
var eq = (obj1 == obj2) //false
console.log(eq)
obj3 = obj1
var eq1 = (obj1 == obj3) //true
console.log(eq1)

/*
    obj2.a--> it will try to find a in obj2
    if not found it will try to find a in proto of obj2-->obj2.__proto__ i.e. obj1
    if not, try to find in obj2.__proto__  i.e. proto of obj1 
    and so on....  
    obj1.__proto__= default proto of javascript 
    obj1.__proto__.__proto___=null
*/

//proto keyword---> not for development , just for debugging purpose
console.log(obj2.__proto__)
console.log(obj2.__proto__ == obj1)//true-->coz obj2 is created by inheriting obj1 although
//obj1 is not equals to obj2
obj2.a++//now read k time proto follow hoga but write k time vo current obj m hi write hoga
console.log(obj2)
obj4=Object.create(obj2)
console.log(obj3.a) 
console.log(obj4.__proto__.__proto__ == obj1)//true