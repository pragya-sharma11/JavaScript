function download(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith("http")){
           reject(new Error("url does not exist")) 
        }
        else{
            setTimeout(function(){
                let filename=url.split("/").pop()
                resolve(filename)
            }, 3000)
        }
    })
}

function resize(filename){
    return new Promise(function(resolve, reject){
        if(!filename.endsWith(".png")){
            reject(new Error("Filename does not exist"))
        } else{
            setTimeout(function (){
                let resizedFile = fileName.spit(".")[0]+"-resize.png";
                resolve(resizedFile)
            })
        }
    })
}