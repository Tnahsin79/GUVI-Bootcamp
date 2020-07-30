a=[34,2,66,7,9,6,21,19,5];
var remdup = function(c,k){
    let i;
    for(i=0;i<k;i++)
    {
        c.unshift(c.pop());
    }
    return c;
};
console.log(remdup(a,3));
