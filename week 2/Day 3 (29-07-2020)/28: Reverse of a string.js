var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   // your code here 
   s=s.split("").reverse().join("");
   return s;
}
