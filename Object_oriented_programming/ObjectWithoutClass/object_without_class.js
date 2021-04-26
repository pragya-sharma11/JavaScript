//allows to create objects without defining class
//lets create a object for bird standing in 2D plane
var obj={
    x_coordinate:67,
    y_coordinate:67,
    color:'blue',
    eggs:['three brown','one gold','seven white'],
    
    fun:function(){ //let,var not allowed here
       console.log('Bird is flying',this.x_coordinate,this.y_coordinate)
       //only way to access attributes inside object i.e current object
       console.log('bird will always fly')
    },
    //remember to put commas after each attribute and semi-colon after curly braces of object-end.
};

console.log('x_coordinate is ',obj.x_coordinate)//can call attribute like this
console.log(obj.fun());
obj.y_coordinate+=78 //can change value like this

//print the array of eggs like---
obj.eggs.forEach(function(value){ //inbuit function----value,index but 
    //if don't give index it will take it as index=undefined.-->property of function polymorphism.
    console.log(value)
});

//if there is a place where a semi-colon is required but if it is a last line of js file
//then we need not to give semi-colon.
