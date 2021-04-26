function toy(type, wheels){
    this.type = type
    this.wheels = wheels
}
let toyObj = new toy('car', 4)
console.log(toyObj)
//we can't call class without new ,
// but we can call function without new and use it as a class.
let sound = function (animal, intensity){
    this.animal = animal
    this. intensity = intensity
}
let soundObj = new sound('bird', 'medium')
console.log(soundObj)