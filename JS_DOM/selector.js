document.getElementsByClassName('child')[1]
a=(p1.innerHTML)
console.log(a)//do it in console,it willl give content of paragraph.
p1.outerHTML//gives complete info of para from <p> to </p>
p1.innerHTML="I have chnaged the content of p tag of id = p1"
p1.setAttribute('contenteditable', true)//it will make the page editable,check the spell if we add something inconsistence
p1.getAttribute('id')
p1.getAttribute('class')
p1.setAttribute('spellcheck', false)//if we add anythhing, it won't check spellings!!!
p1.outerHTML//all these above attributes have been added ultimately to the definition of p1 paragraph

// for input tag
let i = document.getElementsById('inpbox')
console.log(i.value)//it will get the value which is written as an input in input box
i.validity//to check whether the entered data is valid or not
i.setAttribute(type, email)

//for button
let i = document.getElementsById('but')
i.innerHTML="<b>BUTTON BOX</b>"
