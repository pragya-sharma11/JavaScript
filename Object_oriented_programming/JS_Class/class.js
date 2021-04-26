//class is just a syntactical sugar but all the things happened on prototypes basis.
class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    isAdult(){
        return this.age>=18
    }
}

let p1 = new Person('Jhon Doe', 22)
let p2 = new Person('Jane Doe', 22)
let p3 = Object.create(p1)
console.log( p2.isAdult())
console.log(p1.isAdult == p2.isAdult)//true
console.log('p1.__proto__.isAdult == Person.prototype.isAdult', p1.__proto__.isAdult == Person.prototype.isAdult)
console.log(p1.isPrototypeOf(p3))//true
p3.__proto__.age++ //increase the age of object p1 by 1 i.e. change in original object!!!
console.log(typeof Person)//Function

console.log(p1.__proto__)//Person.prototype
console.log(p1.__proto__.__proto__)//Object.prototype


class Student extends Person {//can,t extend more than 1 class at a time
    constructor(name,age,grade){
        
        console.log("Inside Child Constructor")
        super(name,age) //super may or may not be first line but must be written before this keyword in child constructor
        this.grade=grade
        
    }
}

class Gender extends Student{
    constructor(name,age,grade,gender){
        super(name,age,grade)
        this.gender=gender
    }
}
let p4 = new Person('Pragya',18)
let g = new Gender('Pragya',18, 'A','Female')
console.log(Person.prototype.isPrototypeOf(g))//true
console.log(Student.prototype.isPrototypeOf(g))//true
console.log(Gender.prototype.isPrototypeOf(g))//true
console.log(Student.prototype.isPrototypeOf(p4))//false
console.log(Gender.prototype.isPrototypeOf(p4))//false

