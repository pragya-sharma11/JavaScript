function downloadPromise(){
    return new Promise(function(resolve, reject){
        console.log('downloading is started')//print first
        setTimeout(()=>{
            console.log('Done downloading')//print after 3 sec
            resolve()
        }, 3000)
    }) 
}

let downloadFile = downloadPromise()
setTimeout(()=>{
    downloadFile.then(()=>{
        console.log('After Download')//print after 2 sec
    })
}, 5000)