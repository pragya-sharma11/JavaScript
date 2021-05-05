function helloSayer(name, times){
    return new Promise((resolve, reject)=>{
     var count =0;
    let loopID = setInterval(()=>{
        count++;
        console.log("hello ", name);
        if(count==times){
            resolve();
            clearInterval(loopID);
        }
    },20);
})
};

