a=document.links
console.log(a)
b=document.div
b=document.forms //document.something is a html collect
console.log(b)
 Array.from(document.all).forEach((elements)=>
 console.log(elements + "Pragya\n"))

 //getElements:---
 document.getElementById('id') //array of HTMLCollection
 document.getElementsByClassName('container') ////array of HTMLCollection
 document.getElementsByTagName('p')//array of HTMLCollection

 //if there are more number of links or divs --->document.div[0]