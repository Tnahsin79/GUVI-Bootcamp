var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
    let i,c=0,s=0;
    let a=[];
 for(i=0;i<arr.length;i++)
 {
     if(arr[i]>=0)
     c++;
     else
     s+=arr[i];
 }
 a.push(c);
 a.push(s);
 console.log(a);
 //return a;
}
countPositivesSumNegatives(arr);
