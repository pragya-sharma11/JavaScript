//arrays are dynamic in nature.
a=['mango','apple','grapes']
console.log(a)//print the complete array with size-->(3) ['mango','apple','grapes']
console.log(a[0]) //accessing the element by position

console.log(a['length']) //gives length of an array
console.log(a.length) //gives length of an array

console.log(a.push('banana','orange')) //return size of array by adding element at last
console.log(a.pop())//returns removed element at last  -->banana

console.log(a.indexOf('apple'))//return index of apple
console.log(a.lastIndexOf('apple'))//gives index when last apple is occur

console.log(a.unshift('Kiwi'))//add element at front and return the size
console.log(a.shift())//return first element  --->basically remove first element.

console.log(a.push(56)) // can have different types of objects 
console.log(a)

//can apply for loop over it like
for(let i=0;i<a.length;i++){
    console.log(a[i])
}//similarly forEach loop can also be applied.