console.log('external script!!')
// single inverted comma nd double course are same .both represented as string.
//alert('ext src')
let a = function (){
    return 1
}
//the above function don't need a name coz the function is assigned to a so ultimately
//name of the function is a.
console.log(a, typeof a)
function b(){
    return 3
}
console.log(b, typeof b)
console.log(b() , typeof b())

let c=1
/* type error: cause c is a value not an executable thing so we can't execute c!! */
//it  is a dynamic error .It is not a static error coz static error comes in compilation
//Javascript is not compiled , it is interpreted so it has runtime error or exception!!.
//c()