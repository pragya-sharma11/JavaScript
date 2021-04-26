console.log("1=='1 :", 1=='1')//true ---> convert '1' into number:1 then chack the values for equality
console.log("1==='1'", 1==='1')//false---> this won't convert'1' nd checks the values as well as datatype.

//== equlity(Abstract equality comparison)--->value or converted value is same or not,===sameness(strictly equality comparison)---> value and datatype must be same
console.log("0 == ''", 0 == '')//true  -->WHY???---> 
//there is a number function -->Number('') if we pass an empty string into Number function then
//it will return zero
//that's why zero is equal to empty string according to abstract equality comparison.

console.log("false == 'false", false=='false')// false---> WHY
//Number(false)--->0 and Number('false')--->NaN coz we can represent string false =Nan but normal false is  0
console.log("false=='' ",''== false)// true coz both typecast to 0
//aslo any white space is equals to zero but they are not equal to each other ./
//coz '\n' == '\t' need not to be typecast so in strings thier value is different


console.log([1,2] == [1,2])// as array is pass by reference so noth have diff reference coz they are diff individual arrays
//data is same but they are at diff location in memory so ans is false

//if two obj are same i.e. non primitive so they must have eq. values i.e. reference and vice versa is true


