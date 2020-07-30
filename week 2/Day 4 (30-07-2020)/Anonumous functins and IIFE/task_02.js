a=["madam","parrot","pop","java","radar"];
var remdup = function(c){
    let i,t;
    for(i=0;i<c.length;i++)
    {
       t=c[i].split("");
       t[0]=t[0].toUpperCase();
       c[i]=t.join("");
    }
    return c;
};
console.log(remdup(a));
