a=["madam","parrot","pop","java","radar"];
var remdup = function(c){
    let i,t,d=[];
    for(i=0;i<c.length;i++)
    {
       t=c[i].split("").reverse().join("");
       if(t===c[i])
       d.push(c[i]);
    }
    return d;
};
console.log(remdup(a));

var remdup2 = (function(){
    let i,t,d=[];
    for(i=0;i<a.length;i++)
    {
       t=a[i].split("").reverse().join("");
       if(t===a[i])
       d.push(a[i]);
    }
    return d;
})();
console.log(remdup2);
