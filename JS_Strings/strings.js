let p='Pragya'
str1= `'My name' is ${p}`// for writting ${} we need ` as courses for string to hold value.
str1 = `10 + 2 = ${10 + 2}`//can do calculation.

console.log(str1)
str2= "I can print \
it \
like" // the symbol '\' is used as break 
         //means we can write a string in more than one line using '\'
console.log(str2)

//STRING METHODS try methods of java on it.

console.log(str1.length) //length

console.log(str1.indexOf('me')) //if present gives starting index-->3,else gives -1
console.log(str1.indexOf('is',2))//second  argument gives the starting position of searching
console.log(str1.lastIndexOf('is',8))//same as index of but gives last occurence.

//string out of string
let mainStr = 'this-is-a-long-string'
let smallStr = mainStr.slice(2,6) //--->substring
console.log(smallStr) //--->is-i

smallStr = mainStr.substring(2,6)//-->is-i
//diff in slice and substring //try more over it
console.log (mainStr.slice(-6, -2))//-->stri
console.log( mainStr.substr(3,4))//-->s-is----> 3 is start position nd 4 is number of elemnets to be taken out from starting 3 index.
console.log(mainStr.substr(-6,4))//try it-->-6 maens s upto 4 charaters so--->stri