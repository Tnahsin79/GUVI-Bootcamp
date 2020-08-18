var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="COUNTRIES";

    let head=document.createElement("div");
    head.setAttribute("class","row");
    let ncol=document.createElement("div");
    ncol.setAttribute("class","col col-12 col-md-3 head");
    ncol.innerText="COUNTRY NAME";

    let ccol=document.createElement("div");
    ccol.setAttribute("class","col col-12 col-md-3 head");
    ccol.innerText="CAPITAL";

    let rcol=document.createElement("div");
    rcol.setAttribute("class","col col-12 col-md-3 head");
    rcol.innerText="REGION";

    let fcol=document.createElement("div");
    fcol.setAttribute("class"," col col-12 col-md-3 head");
    fcol.innerText="FLAG";
    head.append(ncol,ccol,rcol,fcol);

function country()
{
    return new Promise(function(resolve,reject)
    {
        var request=new XMLHttpRequest();
        var url="https://restcountries.eu/rest/v2/all";
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
    div1.setAttribute("class","container div1");
    div1.appendChild(h1);
    div1.appendChild(head);

    for(var i=0;i<finalData.length;i++)
    {
        let row=entryData(finalData[i].name,finalData[i].capital,finalData[i].region,finalData[i].flag);
        div1.appendChild(row);
    }
    
    document.body.appendChild(div1);
}).catch(function(err){
    console.log("ERROR!");
});

function entryData(name,capital,region,flag)
{

    let row=document.createElement("div");
    row.setAttribute("class","row");
    let namecol=document.createElement("div");
    namecol.setAttribute("class","col col-12 col-md-3");
    namecol.innerText=name;

    let capitalcol=document.createElement("div");
    capitalcol.setAttribute("class","col col-12 col-md-3");
    capitalcol.innerText=capital;

    let regioncol=document.createElement("div");
    regioncol.setAttribute("class","col col-12 col-md-3");
    regioncol.innerText=region;

    let flagcol=document.createElement("div");
    flagcol.setAttribute("class"," col col-12 col-md-3");
    let img=document.createElement("img");
    img.setAttribute("src",flag);
    flagcol.appendChild(img);
    row.append(namecol,capitalcol,regioncol,flagcol);

    return row;
}
