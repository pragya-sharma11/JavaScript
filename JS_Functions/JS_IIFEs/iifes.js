//IIFEs : Immediately Invoked Function Expression
(function (){

})();

// by this , we can directly immediately call them when created.
/**
 * we can create a local scope without polluting global scope.
 * 
 */

 function doMath(){
    console.log("3^4 = ",Math.pow(3,4))
    console.log("3^(0.5) = ",Math.sqrt(3))
    console.log("3 cube root = ",Math.cbrt(8))
    console.log("3 ceil = ",Math.ceil(3.1))
}

//better way of reusabilty:---
(function doMath(c, p, sq, cbr, cl){
    c("3^4 = ",p(3,4))
    c("3^(0.5) = ",sq(3))
    c("3 cube root = ",cbr(8))
    c("3 ceil = ",cl(3.1))
})(console.log, Math.pow, Math.sqrt, Math.cbrt, Math.ceil)

for(var i=0;i<10;i++){
    setTimeout(function (){
        console.log(i);
    },100)
}

for(var i=0;i=10;i++){
    setTimeout(console.log, 100, i);
            // function, delay, arguments for callback function
}
/**
 * 10 print for ten times 
 * coz f0r loop runs with in less time than 100 ms
 * so when i=10
 * then setTimeOut function runs for 10 times.
 */

//solution
for(var i=0;i<10;i++){
    (function (j){
    setTimeout(function (){
        console.log(i);
    },100);
})(i);
}
