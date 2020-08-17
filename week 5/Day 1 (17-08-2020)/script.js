        var div1=document.createElement("div");
        div1.setAttribute("class","container div1");

        var h1=document.createElement("h1");
        h1.setAttribute("class","display-1");
        h1.innerText="CALL-BACK HELL";

        var field=document.createElement("div");
        field.setAttribute("id","num");
        field.setAttribute("class","num");
        var p=document.createElement("p");
        p.setAttribute("class","p display-2");
        p.setAttribute("id","p");
        //p.innerText="10";

        var hr=document.createElement("hr");

        var message1=document.createElement("p");
        message1.setAttribute("class","p display-2");
        message1.setAttribute("id","message1");
        //message1.innerText="HAPPY";
        var message2=document.createElement("p");
        message2.setAttribute("class","p display-2");
        message2.setAttribute("id","message2");
        //message2.innerText="INDEPENDENCE";
        var message3=document.createElement("p");
        message3.setAttribute("class","p display-2");
        message3.setAttribute("id","message3");
        //message3.innerText="DAY";

        div1.appendChild(h1);
        
        div1.appendChild(field);
        field.appendChild(p);
        div1.appendChild(hr);
        div1.appendChild(message1);
        div1.appendChild(message2);
        div1.appendChild(message3);
    
        document.body.appendChild(div1);
        
        var number=10;
        setTimeout(function(number=10){
            document.getElementById("p").innerText="----------"+number+"----------";//10
            number--;
            setTimeout(function(number=9){
                document.getElementById("p").innerText="----------"+number+"----------";//9
                number--;
                setTimeout(function(number=8){
                    document.getElementById("p").innerText="----------"+number+"----------";//8
                    number--;
                    setTimeout(function(number=7){
                        document.getElementById("p").innerText="----------"+number+"----------";//7
                        number--;
                        setTimeout(function(number=6){
                            document.getElementById("p").innerText="----------"+number+"----------";//6
                            number--;
                            setTimeout(function(number=5){
                                document.getElementById("p").innerText="----------"+number+"----------";//5
                                number--;
                                setTimeout(function(number=4){
                                    document.getElementById("p").innerText="----------"+number+"----------";//4
                                    number--;
                                    setTimeout(function(number=3){
                                        document.getElementById("p").innerText="----------"+number+"----------";//3
                                        number--;
                                        setTimeout(function(number=2){
                                            document.getElementById("p").innerText="----------"+number+"----------";//2
                                            number--;
                                            setTimeout(function(number=1){
                                                document.getElementById("p").innerText="----------"+number+"----------";//1
                                                number--;
                                                setTimeout(function(number=0){
                                                    document.getElementById("p").innerText="----------"+number+"----------";//0
                                                    document.getElementById("message1").innerText="HAPPY";
                                                    document.getElementById("message2").innerText="INDEPENDENCE";
                                                    document.getElementById("message3").innerText="DAY";
                                                },1000);
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
