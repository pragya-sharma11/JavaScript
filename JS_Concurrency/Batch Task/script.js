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

async function task(){
    await Promise.all([
        helloSayer("pragya", 3),
        helloSayer("Neha", 2),
        helloSayer("Ritu",4)
    ])
    //await basically executes the array passed to it then only goes to next line of code.
    console.log("---------------next batch--------------")

    await Promise.all([
        helloSayer("Ayaan", 3),
        helloSayer("Naveen", 2),
        helloSayer("Rishav",4)
    ])
}
