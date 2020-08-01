class calculator
{
    constructor(){}
    add(a,b)
    {
        this.n1=a;
        this.n2=b;
        return this.n1+this.n2;
    }
    sub(a,b)
    {
        this.n1=a;
        this.n2=b;
        return this.n1-this.n2;
    }
    mul(a,b)
    {
        this.n1=a;
        this.n2=b;
        return this.n1*this.n2;
    }
}

calc=new calculator();
var result=calc.add(90,10);
console.log(result);
result=calc.sub(90,10);
console.log(result);
result=calc.mul(90,10);
console.log(result);
