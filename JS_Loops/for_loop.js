a=10
console.log('normal for')
for(i=0;i<=a;i++){
    console.log(i)
}

console.log('no condition in for signature')
for(i=0;;i++){
    console.log(i)
    if(i>5)
    break
}
//same concepts as of java

console.log('no signature in for')
for(;;){ //we can make infinite loop like this without giving any condition.
    console.log(a)
    if(a>12){
        break
    }
    a+=1   //a++ does not work
}

//forEach loop
console.log('iterate over a number array using forEach loop')
arr=['one','two','three','four','five']
arr.forEach(element => { //lambda function
   console.log(element) 
});

//we can write it like 
arr.forEach(function(value,index){ // inbuilt function whose parameters are fixed.
    //first it takes value then index.
    console.log(index,value)
});


//for of loop
for(let value of arr){ //iterate  over values of index
    console.log(value)
}

//for in loop
for(let index in arr){ //iterate over indecis of array.
    console.log(arr[index])
}

