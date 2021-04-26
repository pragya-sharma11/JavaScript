function helloSayer(name, times){
    var count =1
    let loopID = setInterval(()=>{
        if(count===times){
            clearInterval(loopID);
        }
        else{
            count++;
            console.log("Hello "+ name);
        }
    },10)
}
helloSayer("Reeta",8)
helloSayer("Pragya", 4)
//if i am giving  4 , 4 then it will show 4 times print ting but if i give reeta more count than pragya it goes to infinite
//why???