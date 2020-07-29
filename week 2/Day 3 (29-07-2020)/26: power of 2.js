function powersOfTwo(n){
  let i,p=1,res=[];
  for(i=0;i<=n;i++)
  {
      res.push(Math.pow(2,i));
  }
  return res;
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
