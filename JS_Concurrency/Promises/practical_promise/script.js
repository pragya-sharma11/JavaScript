function download(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith("http")){
            reject()
            //reject(new Error("url does not start with http")) 
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
            reject()
            //reject(new Error("file is not png"))
        } else{
            setTimeout(function (){
                let resizedFile = filename.split(".")[0]+"-resize.png";
                resolve(resizedFile)
            })
        }
    })
}

download('http://cb.lk/logo.png')
    .then(function (filename){
        resize(filename).then(function (resizedFile){
            console.log("resized file is at : "+resizedFile)
        }).catch(()=>{
            console.log("extension is not png")
        })
    }).catch((err)=>{
        console.error(err)
    })

//can also do like
/*
download("htp://cb.lk/logo.pnng")
    .then(resize)
    .then((resizedFile)=>{
        console.log("resize file is at : "+resizedFile)
    }).catch(()=>{
        console.log('extension is not png')
    })
    */