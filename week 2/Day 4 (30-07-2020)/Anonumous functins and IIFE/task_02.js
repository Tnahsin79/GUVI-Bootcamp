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
var remdup2 = (function(){
    let i,t;
    for(i=0;i<a.length;i++)
    {
       t=a[i].split("");
       t[0]=t[0].toUpperCase();
       a[i]=t.join("");
    }
    return a;
})();
console.log(remdup2);
