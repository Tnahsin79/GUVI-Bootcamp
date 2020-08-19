var div1=document.createElement("div");
div1.setAttribute("class","container div1");
var h1=document.createElement("h1");
h1.setAttribute("class","display-3");
h1.innerText="---Countries & Weather---";


async function country(){
    try{
        var country = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
        var result = await country.json();
        card(result);
    }
    catch(error){
        console.log(error);
    }
}
country();
var latlon;
function card(result)
{
    var i=0,j;
    //var key="65de4a1b80cfff59f6db09659cb35599";
    while(i<result.length)
    {
        var row=document.createElement("div");
        row.setAttribute("class","row");
        for(j=0;j<3;j++)
        {
        var col1=document.createElement("div");
        col1.setAttribute("class","col col-lg-4 col-sm-12");
        var card1=document.createElement("div");
        card1.setAttribute("class","card");
        var name1=document.createElement("div");
        name1.setAttribute("class","card-header");
        name1.innerText=result[i].name;
        var body1=document.createElement("div");
        body1.setAttribute("class","card-body");
        var img1=document.createElement("img");
        img1.setAttribute("class","card-img-top");
        img1.setAttribute("src",result[i].flag);
        var capital1=document.createElement("p");
        capital1.innerText="Capital: "+result[i].capital;
        var region1=document.createElement("p");
        region1.innerText="Region: "+result[i].region;
        var latlng1=document.createElement("p");
        latlng1.innerText="Lat/Lng: "+result[i].latlng;
        latlon=result[i].latlng;
        var code1=document.createElement("p");
        code1.innerText="Country Code: "+result[i].alpha3Code;
        var lat=result[i].latlng[0];
        var lng=result[i].latlng[1];
        var url="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lng+"&exclude=hourly,daily&appid=65de4a1b80cfff59f6db09659cb35599";
        var btn1=document.createElement("button");
        btn1.setAttribute("class","btn btn-primary");
        btn1.setAttribute("onclick","weather('"+url+"')");
        btn1.innerText="Click for Weather";
        row.appendChild(col1);
        col1.appendChild(card1);
        card1.appendChild(name1);
        card1.appendChild(body1);
        body1.appendChild(img1);
        body1.appendChild(capital1);
        body1.appendChild(region1);
        body1.appendChild(latlng1);
        body1.appendChild(code1);
        body1.appendChild(btn1);
        i++;
        }

        div1.appendChild(row);
    }    
}

async function weather(url){
    try{
        detail = await fetch(url);
        detail = await detail.json();
        detail = detail.current;
        //console.log(detail);
        var string="";
        for (const property in detail) 
        {
            string=string+property+": "+detail[property]+"\n";
        }
        alert(string);
    }
    catch(error){
        console.log(error);
    }
}

div1.appendChild(h1);
document.body.append(div1);
