function createGreeter(greeting){
    function greet(name){
        console.log(greeting, name())
        //<button onclick="g1(getName())" > Good Morning</button> then teh above line will be like
        //console.log(greeting, name)
        //also shown in js_intro.html and higher_order_function.js
    }
    
    return greet
}
let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')


function getName(){
    return document.getElementById('namebox').value
}