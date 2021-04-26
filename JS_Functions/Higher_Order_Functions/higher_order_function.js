//higher order functions-->function pass as a argument inide  a function (javascript),
//function return as something as a function
//creation of function inside a function.
function createGreeter(greeting){
    function greet(name){
        //treating name as string.
        console.log(greeting, name)
    }
    //return greet()
    return greet
}
let g1 = createGreeter('Good Morning') //createGreeter() return inner so g1 is a function has a body of inner().we have returned 
//inner not inner().inner()  means after calling inner() then result of inner() call goes to g1.

let g2 = createGreeter('Good Evening')
//console.log(typeof g1)//undefined
//if i return greet ---> then the above line print---> function
//console.log(g1) // undefined
g1('Pragya')
g1(getName())//---parameter of inner is also a function. Prarameter name=geName()
function getName(){
    return document.getElementById('namebox').value
}
//this function is seperate from createGreeter()'s greet() coz greet() of createGreeter() has private scope only accessible inside createGreeter.
function greet(){
    console.log("Hello Pragya!!")
}
