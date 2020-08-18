var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="COUNTRIES";

    let head=document.createElement("div");
    head.setAttribute("class","row");
    let ncol=document.createElement("div");
    ncol.setAttribute("class","col col-12 col-md-2 head");
    ncol.innerText="COUNTRY NAME";

    let ccol=document.createElement("div");
    ccol.setAttribute("class","col col-12 col-md-2 head");
    ccol.innerText="CAPITAL";

    let rcol=document.createElement("div");
    rcol.setAttribute("class","col col-12 col-md-1 head");
    rcol.innerText="REGION";

    let lcol=document.createElement("div");
    lcol.setAttribute("class","col col-12 col-md-2 head");
    lcol.innerText="LAT/LNG";

    let mcol=document.createElement("div");
    mcol.setAttribute("class","col col-12 col-md-3 head");
    mcol.innerText="CURRENCY";

    let fcol=document.createElement("div");
    fcol.setAttribute("class"," col col-12 col-md-2 head");
    fcol.innerText="FLAG";
    head.append(ncol,ccol,rcol,lcol,mcol,fcol);

function country()
{
    return new Promise(function(resolve,reject)
    {
        var request=new XMLHttpRequest();
        //var proxy="https://cors-anywhere.herokuapp.com/"
        var url="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";
        request.open('GET',url,true);
        request.send();
        request.onload=function()
        {
            var data=JSON.parse(this.response);
            resolve(data);
        }
    });
}

country()
.then(function(finalData){
    
    var div1=document.createElement("div");
    div1.setAttribute("class","div1");
    div1.appendChild(h1);
    div1.appendChild(head);

    for(var i=0;i<finalData.length;i++)
    {
        var currency=JSON.stringify(finalData[i].currencies);
        let row=entryData(finalData[i].name,finalData[i].capital,finalData[i].region,finalData[i].latlng,currency,finalData[i].flag);
        div1.appendChild(row);
    }
    
    document.body.appendChild(div1);
}).catch(function(err){
    console.log("ERROR!");
});

function entryData(name,capital,region,latlng,currencies,flag)
{

    let row=document.createElement("div");
    row.setAttribute("class","row");
    let namecol=document.createElement("div");
    namecol.setAttribute("class","col col-12 col-md-2");
    namecol.innerText=name;

    let capitalcol=document.createElement("div");
    capitalcol.setAttribute("class","col col-12 col-md-2");
    capitalcol.innerText=capital;

    let regioncol=document.createElement("div");
    regioncol.setAttribute("class","col col-12 col-md-1");
    regioncol.innerText=region;

    let latlngcol=document.createElement("div");
    latlngcol.setAttribute("class","col col-12 col-md-2");
    latlngcol.innerText=latlng;

    let currencycol=document.createElement("div");
    currencycol.setAttribute("class","col col-12 col-md-3");
    currencycol.innerText=currencies;

    let flagcol=document.createElement("div");
    flagcol.setAttribute("class"," col col-12 col-md-2");
    let img=document.createElement("img");
    img.setAttribute("src",flag);
    flagcol.appendChild(img);
    row.append(namecol,capitalcol,regioncol,latlngcol,currencycol,flagcol);

    return row;
}
