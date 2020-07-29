function findMax(ar)
{
// your code here
let i,max=ar[0];
for(i=1;i<ar.length;i++)
{
    if(ar[i]>max)
    max=ar[i];
}
return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
