function isEven(num){
 // your code here
 if(Number.isInteger(num))
 {
     if(num%2)
     return true;
     else
     return false;
 }
 else
 return "-1";
}
var even = isEven("11h");
console.log(even);
