b=8 //global variable
f=77
var c = 9  //function scope
let d = 3  //block scope
const e=10
e++;//error constant variable can't change their values.
function fun(){
    if(b==8){
        let f=7
        var g=66
        console.log('inside block of if, f is  ', f )
        console.log('inside block of if, g is ', g )
    }
    console.log('outside of if, f is ', f)
    console.log('inside block of if, g is ', g )
}

// for Objects
const obj = {
    k1:'abks',
    k2:567,
    k3:false
};
obj.k4=123
console.log(obj) //obj will have another variable i.e. k4
 delete obj.k1; //we can delete keys from const obj as well

 //Arrays
const arr=[1,2,3,4]
arr.push(67)
console.log(arr)//values in array changes
/** in const variables, we can change their values inside, but we can't assign any other thing
 * means we can't write like arr=[8,4,6,3]
 * it means its a new array assigned in the variable . 
 * basically follows this rule for objects.
 * in variables , we can't change,increase or decrease the values.
*/

var myVar = 10;
function alpha(){
    var myVar=11;
    if(true){
        var myVar=21; //this line equivalent to : myVar =21 
        console.log(myVar); //21
        /**
         * if i write let var = 21 then 
         * innew console prints 21 
         * and outer console prints 11
         * 
         * if const myVar = 21
         * then both consoles inside the function will print 21
         */
    }    
    console.log(myVar); //21
}

alpha();

function alpha(){
    const myVar=11;
    if(true){
        const myVar=21; 
        console.log(myVar); //21
    }    
    console.log(myVar); //21
}
console.log(myVar)//11

alpha();