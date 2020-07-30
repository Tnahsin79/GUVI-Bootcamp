a=[34,1,26,7,9,66,21,19,5];
b=[4,14,26,70,9,6,21,19,15];
var prime = function(c,d){
    
    c.sort(function(x,y){
        return x-y;
    });
    
    d.sort(function(x,y){
        return x-y;
    });
    
    let m1,m2,i;
    if(c.length%2===1)
    {
        i=parseInt(c.length/2);
        m1=c[i];m2=d[i];
    }
    else
    {
        i=parseInt(c.length/2);
        m1=(c[i]+c[i-1])/2;
        m1=(d[i]+d[i-1])/2;
    }
    console.log(m1,m2);
};
prime(a,b);
