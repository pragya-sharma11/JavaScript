//class declaration
class FruitClass{  //can't be hoisted
    constructor(taste,color){
        this.taste=taste
        this.color=color
    }
};

var banana = new FruitClass('sweet', 'Yellow')
console.log(banana)

//class expression
let mango=class{  //this won't be hoisted
    constructor(taste, color){
        this.taste=taste
        this.color=color
    }
};
var objectMango=new mango('sweet', 'Yellow')
console.log(objectMango)
 function fun(x){
     delete x;
     return x
 }
 console.log(fun())
/*
 //2
 var foo = { bar: function() { return this.baz; },
  baz: 1
 }; 
 (function(){ return typeof arguments[0](); })
 (foo.bar);
 //undefined

 //3
 var foo = { bar: function(){ return this.baz; }, baz: 1 } ;
 typeof (f = foo.bar)();
 //undefined

 //4
 function() { 
    return (() => this.x).bind({ x: 'inner' })(), 
    (() => this.x)() }).call({ x: 'outer' };
 //['outer','outer']

 //5
 var foo = 'I am GLOBAL foo.';

if ( true ) { var foo = 'I am GLOBAL foo TOO.'; }

console.log( foo );

function test() { var foo = 'I am LOCAL foo.'; }

test();

console.log( foo );
// I am GLOBAL foo TOO.
// I am GLOBAL foo TOO.
*/