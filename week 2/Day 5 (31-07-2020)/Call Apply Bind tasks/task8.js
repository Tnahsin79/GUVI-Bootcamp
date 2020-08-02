function sumOfNumbers() {
var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var numbers = [1,2,3];
var sum = sumOfNumbers.apply(null, numbers);
console.log(sum);
