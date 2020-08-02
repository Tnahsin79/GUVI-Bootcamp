var list = [ 1, 2, 3 ]
var [a,b,c] = list;
console.log(a,b,c); //1 2 3
[b,a] = [a,b];
console.log(a,b,c); //2 1 3
