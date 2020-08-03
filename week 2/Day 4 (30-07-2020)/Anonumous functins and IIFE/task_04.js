a=[34,1,26,7,9,66,21,19,5];
var prime = function(d){
    let i,a=[],x,f;
    for(i=0;i<d.length;i++)
    {
        if(d[i]===1)
        d[i]=1;
        else
        if(d[i]===2)
        a.push(d[i]);
        else
        {
            f=0;
            for(x=2;x<d[i];x++)
            {
                if(d[i]%x===0)
                {f++;break;}
            }
            if(f===0)
            a.push(d[i]);
        }
    }
    return a;
};
console.log(prime(a));

var prime2 = (function(){
    let i,d=[],x,f;
    for(i=0;i<a.length;i++)
    {
        if(a[i]===1)
        a[i]=1;
        else
        if(a[i]===2)
        d.push(a[i]);
        else
        {
            f=0;
            for(x=2;x<a[i];x++)
            {
                if(a[i]%x===0)
                {f++;break;}
            }
            if(f===0)
            d.push(a[i]);
        }
    }
    return d;
})();
console.log(prime2);
