console.log(beta())
//hoisting:-
//although the functions are below this line but still interpreter knows the function definition nd doesn't give error.
//its like interpreter looks through the code for the definition sof the functions before execution of rest of the code. 

function alpha(){  //Function Declaration:function keyword functionName(){}
    return 'alpha'
}
function beta(){ //function like can be hoisted coz they r  declared  and are directly defined.!
    return 'beta'
}

//functions like this can't be hoisted coz they are defined then assigned.
let gamma=function(){ //function expression
    return 'gamma'
}

//argument local variable::------
function hello(){
    //let arguments=67 ----> hello world 6 7 
    //let arguments = 'aehfasc' ----->hello world a e
    console.log('hello world', arguments[0],arguments[1]) // hello world 1 2
    //arguments is the local variable which will accept the values if we give to function nd function is non parameterised.

}
console.log(hello(1,2))//undefined