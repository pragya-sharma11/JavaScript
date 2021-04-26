function area(height, width ){ //although can write like area(let height , let width) but its a waste when we can write it without let.
    return height * width
}

console.log('area is',area(4, 4)) //gives 16

console.log('area for one parameter',area(4)) // gives undefined or NaN

//in java polymorphism works on declaration but in javascript it work on runtime.
//it will not stop at declaration but it stops inside it when multiply is executed.
//height = 4 , width = undefined----->typeof

//priority is given to this area below here---> due to top to bottom approach.
function area(rad, height){
    return Math.PI * rad *rad*height/3

}
console.log('area of cone is ',area(3,1))
//again overwritten the above area functions by this lower one.
function area(side){
    return side*side
}
let c=0
function recur(){
    if(c<10){
    console.log("I am happy....")
    c+=1 //c++ not allowed
    recur()
    }
    else{
        return "out of recursion function"
    }
    
}
console.log(recur()) //print i am happy.....10 times then undefined ....why undefined?? why not out of recursion function!!
