window.onload = function (){
    let newTask = document.getElementById('newTask')
    let addTask = document.getElementById('addTask')
    let todoList = document.getElementById('todoList')
    addTask.onclick = function (){
         let li = document.createElement('li')
         //li.innerText = newTask.value
         let taskSpan = document.createElement('span')
         taskSpan.innerText=newTask.value;
         //li.appendChild(taskSpan)
         let xbut = document.createElement('button')
         xbut.innerText = 'delete'
         xbut.onclick =function (event){ //by default takes an agument 'event'
             console.log(event)
             event.target.parentElement.remove();

         }
         let upButton = document.createElement('button');
         upButton.innerText = '^(up)'
         upButton.onclick = function (event){
             //event=click
             //event.target = up button
             //event.target.parentElement = <li> item
             //event.target.parentElement.parentElement = todoList
             event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //insert this element
                event.target.parentElement.previousElementSibling //before its previous element.
             )
         }

         let downButton = document.createElement('button');
         downButton.innerText = 'down'
         downButton.onclick = function (event){
             //event.target = up button
             //event.target.parentElement = <li> item
             //event.target.parentElement.parentElement = todoList
             event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling , //insert the next element
                event.target.parentElement//before this element.
             )
         }
         
          
         li.appendChild(upButton)
         li.appendChild(downButton)
         li.appendChild(xbut)
         li.appendChild(taskSpan)
         todoList.appendChild(li)
         

         //todoList.innerHTML = `<li>${newTask.value}</li>`-->each time when the value is added the complete page is refreshed
         //and the complete list is printed again which takes too much time!!
    }
}