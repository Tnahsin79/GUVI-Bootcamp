console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  // your code here
  let i,sum=0;
  s=s.split(", ");
  for(i=0;i<s.length;i++)
  {
      s[i]=+s[i];
      sum+=s[i];
  }
  return sum;
}
