console.log($('#list'))//this will give an empty object coz till now the web page is not loaded.
$(()=>{  //this will work when the web page is completely loaded!!. It is same as window.onload, any line written before it will not work.
    let item = $('#item')
    $('#prepend').click(()=>{  //click is pre-built function
        let text = item.val()  //val ==> value()
        $('#list').prepend($(`<li>${text}</li>`))  //append and prepend also pre-bulit
    })

    $('#append').click(()=>{
        let text = item.val()
        $('#list').append($(`<li>${text}</li>`)) //if i write html instead of append then it will remove earlier item just put the new one.
    })
})//we have put the scripts in head not in body so the script get loaded before the webpage.

