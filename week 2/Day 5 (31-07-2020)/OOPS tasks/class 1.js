class Movie{
    constructor(name,studio,rating,){
        this.name=name;
        this.studio=studio;
        this.rating=rating;
        if(rating===undefined)
        this.rating="PG";
    }
}
function getPG(array){
    let i;
    for(i=0;i<array.length;i++)
    {
        if(array[i].rating!=="PG")
        {
            array.splice(i,1);
            i--;
        }
    }
    console.log(...array);
}
var m1=new Movie("Casino Royale","EON productions","PG13");
var m2=new Movie("Casino fight2","AEN productions2");
var m3=new Movie("car fight3","AEN productions3");
var m4=new Movie("Border fight2","AEN productions4","PG10");
getPG([m1,m2,m3,m4]);
