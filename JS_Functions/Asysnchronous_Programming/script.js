var intervalId;
var runCount=0;
function sayHello(){
    runCount++;
    if(runCount>5){
        clearInterval(intervalId);
    }
    console.log("Hello!!!")
}

console.log("And the wait starts....")
intervalId= setInterval(sayHello(),1000)//repeats infinilty after every 1 sec if clearInterval is not there!!
//clearInterval(intervalId);
/*
setInterval(function(){
    console.log("This runs after 1 sec");
}, 1000)*/

function myfun(i){
    console.log(i);
}
//setInterval(myfun, 1000, 10)//parameter i of mysun , i=10 so it will print 10.

(function f(){ 
    function f(){ return 1; 
    }
 return f(); 
function f()
{ 
    return 2; 
} 
})();
