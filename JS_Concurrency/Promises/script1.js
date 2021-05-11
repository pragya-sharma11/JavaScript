function downloadPromise(){
    return new Promise(function(resolve, reject){
        console.log('downloading is started')
        setTimeout(()=>{
            console.log('Done downloading')
            resolve()
        }, 3000)
    }) 
}

let downloadFile = downloadPromise()
setTimeout(()=>{
    downloadFile.then(()=>{
        console.log('After Download')
    })
}, 5000)