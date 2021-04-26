function checkThis(params) {
    console.log(this)
}
let obj={
    'a':10, //keys are by default strings so no need to writle like "a":10 
    v:'fdsgv',
    c:true,  
    10:'45ec',//nunmeric key are accessed by --->obj['10']---> ans will be 45ec
    true:'68tyug', //obj['true]
    d:function()  {
        return (this) //this will point to current object itself if it is called via object--->obj.d() not  
        //:--->let x = obj.d; x()---> after calling window object returned.
    },
    e:{ //another object
        aa:1,
        bb:true //obj.e.bb
    }
}
console.log(obj)