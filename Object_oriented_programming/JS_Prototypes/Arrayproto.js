Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function () {
    console.log('join called on ',this)
    return this.joinOriginal(...arguments)
}