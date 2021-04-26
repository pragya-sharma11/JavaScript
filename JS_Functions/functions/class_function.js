function Person(name, age){
    this.name= name,
    this.age=age,
    this.isAdult = function (){
        return this.age>=18
    }
    //return 10
}

let p1 =new  Person('Pragya', 18)
//Person typeOf is still a Function
console.log(p1)
console.log(name) //now the scope of name ends with function scope
console.log(JSON.stringify(p1))//give an object of Person p1= {"name":"Pragya","age":18}
console.log(p1)//Person {name:'Pragya',age:18}
let p2 = new Person('Harry Potter', 15)
console.log(p1.isAdult())
console.log(p2.isAdult())
console.log(p1.isAdult == p2.isAdult) //false
// Although the functions are same, but the objects are different hence occupy different memory places on RAM

Person.prototype.isAboveSixteen = function (){return this.age>16}
Person.prototype.city = "Mathura"
console.log(p1.isAboveSixteen == p2.isAboveSixteen)//true
//coz now we have created a prototype of Person and it is loaded once and occupies same memory for all objects .
//this prototype won't take extra memory in every object!!
console.log(Person.prototype)// Person {isAboveSixteen : [Function], city:'Mathura'}
