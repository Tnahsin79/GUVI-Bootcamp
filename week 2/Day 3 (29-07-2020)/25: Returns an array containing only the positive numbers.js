function getPositives(ar)
{
 // your code here
 let i;
 //console.log(ar);
 for(i=0;i<ar.length;i++)
 {
     if(ar[i]<0)
     ar.splice(i,1);
     //i--;
 }
 return ar;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
