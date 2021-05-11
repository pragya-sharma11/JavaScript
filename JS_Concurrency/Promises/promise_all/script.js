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

function upload(resizefile){
    return new Promise((resolve, reject)=>{
    if(!resizefile.split['-']==-resize.png){
        reject(new Error("File is not resized"))
    }
    else{
        console.log("start uploading the file : " + resizefile)
        setTimeout(()=>{
            let uploadUrl="http://upload.file/"+resizefile;
            resolve(uploadUrl);

        }, 3000)
    }
})
}

Promise.all([
    download("http://cb.lk/logo.png"),
    download("http://cb.lk/banner.png"),
    download("http://cb.lk/promo.png")
]) //all 3 execute parallely
.then(function(values){ //values passed in resolve comes to here!!
    //console.log(values)
    return Promise.all(values.map(resize))
    /**
     * map the values to resize function to perform resize operation on downloaded file.
     * values.map(function(item){resize(item)})
     * This thing can be written as values.map(resize)
     * This thing returns Promise 
     */
})
.then((resizeValues)=>{
    return Promise.all(resizeValues.map(upload))
})
.then((uploadValues)=>{
    console.log(uploadValues)
})
.catch((err)=>{ //if anyone of them have error then then() will not work.
    console.error(err)
})