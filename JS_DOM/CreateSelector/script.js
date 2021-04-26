//window.onload is a function which runs after the window is loaded so anything written outside it will not be exceuted!!
window.onload = function (){
    let num = document.getElementById('num')
    let print = document.getElementById('print')
    let list = document.getElementById('list')

    print.onclick = function (){
        let n = parseInt(num.value)
        let start = new Date().getTime()
        for(let i =1; i<=n; i++){
            let item = document.createElement('li')
            item.innerText = i
            list.appendChild(item)
        }
        document.getElementById('p1').innerHTML = (new Date().getTime())-start
    }
}

/**
 * to remove the complexity of innerHTML in for loop,
 * we use createElement().
 * it creates an elemnt and store it in list .
 * It makes our website fast.
 * now , browser doesn't need to reed the strings,logics and the tags properties n dchange them.
 * it can directly dynamically craete the element and print it without going thoroughly into the html page.
 */