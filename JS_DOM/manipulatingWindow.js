let a = window;
/**
 * It will get a window object.
 * All the things are by default in window object until we use node js
 * prompt will have a input ,when we enter anything,
 * it will come to 'a' in string format. 
 * prompt, alert, confirm are older methods , now we use css , bootstrap and javascript to   make it more beautiful
 * 
 * 
 */

a =prompt('Please enter your name!!')
console .log(a)

a.alert('Hey!! Pragya here....')

a = confirm('Are you sure, you want to close it.')
console.log(a)

a = window.innerHeight;
a=innerWidth;
a=scrollX;
a=scrollY;
a=location;
a=location.href;
console.log(scrollY)
console.log(scrollX)//we can write them without window.
//coz window is in global scope.
console.log(location.toString());
a=history;
console.log(a);
console.log(history(-1))//-->takes to 1 page back
