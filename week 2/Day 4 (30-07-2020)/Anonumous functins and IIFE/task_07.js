a=[34,21,66,7,19,66,21,19,5];
var remdup = function(c){
    let i,obj={};
    for(i=0;i<c.length;i++)
    {
        if(obj[c[i]]===undefined)
        obj[c[i]]=1;
        else
        {
            c.splice(i,1);
            i--;
        }
    }
    return c;
};
console.log(remdup(a));

var remdup2 = (function(){
    let i,obj={};
    for(i=0;i<a.length;i++)
    {
        if(obj[a[i]]===undefined)
        obj[a[i]]=1;
        else
        {
            a.splice(i,1);
            i--;
        }
    }
    return a;
})();
console.log(remdup2);
