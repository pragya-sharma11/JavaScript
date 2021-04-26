//Promise : It is just a work which is either fullfilled or rejected.
/*
Here, in dopromise() new Promise() is just an Object of Promise function.Its a callback function
it contains a function, which also gets 2 functions as arguments
if the server is responded correctly with status 200 then resolve function will execute
if no 200 status from server side then reject function executes.
*/
function dopromise(){
    return new Promise(function (resolveThepromise, rejectThePromise){ //callBack function
        
        setTimeout(()=>{
            let error = true
            if((!error)==false){
                console.log("Promise has been fullfilled!!!");
                resolveThepromise();
            }
            else{
                console.log("Promise has not been fullfilled!!");
                rejectThePromise('Not expected from you!!   ');
            }
        },1000);
    })
}
/**
 * here, this then and catch works as try and catch exception handling
 * if resolve is called then function in then() will invoked otherwise catch() will invoke and 
 * function in catch agrgument will executes.
 */
dopromise().then(()=>{
    console.log("very good!!! Keep it up.")
    document.getElementById('msg').innerHTML='Excellent Bro...!!!'
}).catch((errMessege)=>{
    console.log('very Bad dude!!',errMessege);
    document.getElementById('msg').innerHTML=errMessege;
})