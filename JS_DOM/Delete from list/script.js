window.onload = function (){
    let newTask = document.getElementById('newTask')
    let addTask = document.getElementById('addTask')
    let todoList = document.getElementById('todoList')
    addTask.onclick = function (){
         let li = document.createElement('li')
         li.innerText = newTask.value
         let xbut = document.createElement('button')
         xbut.innerText = 'delete'
         xbut.onclick =function (event){ //by default takes an agument 'event'
             console.log(event)
             event.target.parentElement.remove();

         }
         li.appendChild(xbut)
         todoList.append(li)
         //todoList.innerHTML = `<li>${newTask.value}</li>`-->each time when the value is added the complete page is refreshed
         //and the complete list is printed again which takes too much time!!
    }
}