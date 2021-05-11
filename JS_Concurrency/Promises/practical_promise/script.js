function download(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith("http")){
            //reject()
            reject(new Error("url does not start with http")) 
        }
        else{
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
        setTimeout(()=>{
            let uploadUrl="http://upload.file/"+resizefile;
            resolve(uploadUrl);
        }, 3000)
    }
})
}
/*
download('ftp://cb.lk/logo.png')
    .then(function (filename){
        resize(filename).then(function (resizedFile){
            console.log("resized file is at : "+resizedFile)
        }).catch(()=>{
            console.log("extension is not png")
        })
    }).catch((err)=>{
        console.error(err)//same as console.log but console.error() prints in red color
    })
*/
//can also do like

download("http://cb.lk/logo.png")
    .then(resize)
    .then(upload)
    .then((uploadfile)=>{
        console.log("file has been uploaded!!!") //print after 6 sec
    })
    .catch((err)=>{
        console.error(err)
    })
    /**
     * this catch catches all errors in the chain. if url is not http then
     * it runs the resolve of download function
     * If url is http but extension is not png then 
     * it run the reject of resize function.
     */
 