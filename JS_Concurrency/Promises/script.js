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

helloSayer("Reeta",8).then(helloSayer("Pragya", 2).then(helloSayer("Mistha", 7)))
//we can use promises in place of asynchronous call backs

// helloSayer("Reeta" ,8).then(helloSayer("Pragya", 3)).then(helloSayer("Mistha", 2))
//Same as concurrency.