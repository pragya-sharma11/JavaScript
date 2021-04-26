//closures:- whenever the function is created, all the scopes which are available  at the birth place of the function are captured by the function and they are available in function till the function exists in memory.
function outer(arg1){
    let var1 = 10
    let m = 30
    //for outer function arguments we need to write arguments in outer function,inner one can't be accesible to outer.
    function inner(agr2) {
        let var2 = 20
        let m = 33// this is called shadow  of variable same name of variable in outer and inner function.
        //there is a keyword arguments.this will keep the named or unnamed arguments of inner function only, not the outer function.
        console.log(arg1, var1, agr2, var2, m)
        console.log(arguments[0])//param2
    }
    return inner
}
let x = outer('Param1')
x('param2') // param1 10 param2 20 33
