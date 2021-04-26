window.onload = function (){
    let num = document.getElementById('num')
    let print = document.getElementById('print')
    let list = document.getElementById('list')

    print.onclick = function (){
        let N = parseInt(num.value)
        let start = new Date().getTime()
        for(let i =1;i<=N;i++){
            list.innerHTML += '<li>'+ i +'</li>'
        }
        let p1= document.getElementById('p1')
        p1.innerHTML= ((new Date().getTime())-start)
    }
}

/**
 * its always a bad way to change innerHTML of any tag.
 * It is very time consuming .
 * When we want to make our website faster, we try not to change innerHTML of DOM.
 * when we put list.innerHTML in for loop,each time it creates a new string ,add the list in new string and print it.
 * When printing, each time the complete list from starting prints along with the newly added value. 
 */