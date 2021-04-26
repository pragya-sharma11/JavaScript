let str='My name is Pragya. I am currentlyy learning Javascript!!!'

//charAt() : Returns the character at the specified index (position)
char=str.charAt(6) //e
console.log("charAt() ",char)

//charCodeAt() //returns unicode of the character at specified index
char =str.charCodeAt(6) //unicode of e
console.log('charCodeAt() ',char)

//concat : joins 2 strings and return the new string
newStr=str.concat("I am a learner.")
console.log('concat ', newStr)

//endsWith() Checks whether a string ends with specified string/characters
console.log('endsWith() ', str.endsWith('!!'))
console.log('startsWith() ', str.startsWith('My'))

//fromCharCode() : Converts Unicode values to characters
console.log(String.fromCharCode(97,32,79)) //a space O

//includes : Checks whether a string contains the specified string/characters
console.log(' includes() ', str.includes('script'))

//indexOf() : Returns the position of the first found occurrence of a specified value in a string
//lastIndexOf() : Returns the position of the last found occurrence of a specified value in a string (-1 also returned same case as java) can have 2 arguments

//localeCompare() : Compares two strings in the current locale  just like compareTo() in java
console.log('localeCompare() ', 'pragya'.localeCompare('prahya') )

//match() : Searches a string for a match against a regular expression, and returns the matches
console.log('match() ', str.match('My name'))

//repeat() : Returns a new string with a specified number of copies of an existing string
console.log('repeat() ', 'Pragya '.repeat(5))

//replace() : Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log('replace() ', "Inayat".replace('I','A')) //Anayat

//serach() : Searches a string for a specified value, or regular expression, and returns the position of the match
console.log('search() ', 'pragya sharma '.search('ar')) //starting address i.e 9

//slice() : Extracts a part of a string and returns a new string
console.log('slice() ',str.slice(2,-8)) // means from index 2 to index -8 , when we talk about -ve index we should know that -ve index starts from -0  onwards from right.
// not work on (-ve,-ve), (-ve, +ve)
 //no change in original string

//split() : Splits a string into an array of substrings
console.log('split() ', str.split(' ')) //delimiter here is space

//substr(num1, num2) : Extracts the characters from a string, beginning at a specified start position, and through the specified number of character. num1 is start index, num2 is the number of letters
//substring(num1, num2) : Extracts the characters from a string, between two specified indices. num1 is start index and num2 is end index.

//toLocaleLowerCase() : Converts a string to lowercase letters, according to the host's locale
//toLocaleUpperCase() : Converts a string to uppercase letters, according to the host's locale

//toLowerCase() : Converts a string to lowercase letters
//toUpperCase() : Converts a string to uppercase letters

//toString() : Returns the value of a String object
class Fruit{
    Constructor(taste, color){
        this.taste = taste
        this.color = color
    }
    toString() {
        return 'taste of fruit is ', taste , ' and color of fruit is ', color
    }
};
apple = new Fruit('sweet', 'Red')
console.log(str.toString())

//trim() :Removes whitespace from both ends of a string
//valueOf() : Returns the primitive value of a String object
console.log('valueOf() ', str.valueOf())