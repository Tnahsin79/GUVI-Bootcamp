op=[add,sub,mul];
function f(a,b)
{
  var x=90,y=10;
  console.log(b[a](x,y));
}
f(0,op);
f(1,op);
f(2,op);

function add(m,n){
    return m+n;
}

function sub(m,n){
    return m-n;
}

function mul(m,n){
    return m*n;
}
