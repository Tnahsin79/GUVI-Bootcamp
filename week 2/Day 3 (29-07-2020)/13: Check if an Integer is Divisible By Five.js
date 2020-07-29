function divisibleByFive(num1) {
    if(num1<0)
    num1=num1*(-1);
    if(num1%5===0)
    return true;
    else
    return false;
}
var divisible = divisibleByFive(-5)
console.log(divisible);
