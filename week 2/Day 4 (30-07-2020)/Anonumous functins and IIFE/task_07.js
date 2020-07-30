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
