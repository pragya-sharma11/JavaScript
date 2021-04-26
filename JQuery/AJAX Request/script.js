$(()=>{
    let list = $('#people')
    $('#fetch').click(()=>{
        $.get('https://reqres.in/api/users',(data)=>{
            for(let user of data.data){
                list.append(
                    $(`<li>${user.first_name} ${user.last_name}</li>`)
                )
            }
        })
    })
})