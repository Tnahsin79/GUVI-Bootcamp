class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        if(this.radius===undefined)
        this.radius=1;
        if(this.color===undefined)
        this.color="red";
    }   
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
}
var c1=new circle();
console.log(c1.getRadius(),c1.getColor(),"the area is:",c1.getArea());
var c2=new circle(4,"scarlet");
console.log(c2.getRadius(),c2.getColor(),"the area is:",c2.getArea());
