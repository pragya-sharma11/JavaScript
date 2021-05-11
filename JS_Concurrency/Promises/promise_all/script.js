function download(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith("http")){
            //reject()
            reject(new Error("url does not start with http")) 
        }
        else{
            console.log("start download the file from " + url)
            setTimeout(function(){ //fake 3 sec download time
                let filename=url.split("/").pop()
                resolve(filename)
            }, 3000)
        }
    })
}

function resize(filename){
    return new Promise(function(resolve, reject){
        if(!filename.endsWith(".png")){
            //reject()
            reject(new Error("file is not png"))
        } else{
            console.log("start resizing the file : "+ filename)
            setTimeout(function (){ //fake 0 sec to resize
                let resizedFile = filename.split(".")[0]+"-resize.png";
                resolve(resizedFile)
            }) //default time is 0 .
        }
    })
}
