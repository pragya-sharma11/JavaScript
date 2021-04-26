function helloSayer(name, times, doneSaying){
    var count =0;
    let loopID = setInterval(()=>{
        count++;
        if(count==times){
            clearInterval(loopID);
            doneSaying();
        }
        console.log("hello ", name);
    },100);
};
helloSayer("Reeta",8, ()=>{
helloSayer("Pragya", 4, () =>{
    helloSayer("Mishtha ", 3, ()=>{

    });
});
})
//asynchronous callbacks are used to remove concurrency
//But the disadvantage is we need to write lots of codes just to remove the single thread working multiple times.
