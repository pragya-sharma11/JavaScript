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