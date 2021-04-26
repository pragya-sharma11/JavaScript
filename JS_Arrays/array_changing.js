let arr=[1,2,3,'sfda',false,true,[1,3,5,8],5.6,7.5,'gfhd','dsfahb']

//slice --> doesn't change the original array.
console.log(arr.slice(4)) //starting at 4 end at length-1
console.log(arr.slice(4,7))//starting at 4th index and at 7-1=6th index

//splice
cut=arr.splice(4) //starting at 4th index upto end ,changes the orinal array.
//now arr has 0 to 3rd index elements, rest are in cut

mean = arr.splice(5,3)//start from 5th index till 7th index i mean 3 elements from 5th index.
arrsplice = arr.splice(0,3,'1','2','3')//from 0 to 2nd index change numbers to string '1','2','3'


//concate--->no change on original array
arr=[1,2,4,6,'fdfg','fsgsfd','gjugk',false,true]
console.log(arr.concat('pragya','sharma'))//concat the 2 elements in array at last nd return it without change the original one.

