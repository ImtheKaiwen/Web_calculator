const labelvalue = document.getElementById("screenlabel").innerText;

function buttonclick(){
    document.getElementById("ac").addEventListener("click",function(){
        var labeltext="";
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("2").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("2").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("3").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("3").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("4").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("4").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("5").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("5").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("6").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("6").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("7").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("7").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("1").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("1").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("8").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("8").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("9").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+document.getElementById("9").innerText;
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("x").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+"x";
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("%").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+"%";
        document.getElementById("screenlabel").innerHTML= labeltext;
    })
    document.getElementById("/").addEventListener("click", function(){
        var labeltext=document.getElementById("screenlabel").innerText+"/";
        document.getElementById("screenlabel").innerHTML= labeltext;
    })  
}
buttonclick();
document.getElementById("=").addEventListener("click",function(){
    debugger;
    var snumber = document.getElementById("screenlabel").innerText;
    var snumber1="0",snumber2="0",snumber3="0";
    var islem="0";
    for(let i=0; i<=snumber.length-1; i++){
                if(snumber[i]!="x"&&snumber[i]!="+"&&snumber[i]!="-"&&snumber[i]!="/"&&snumber[i]!="%"){
                snumber1 += snumber[i];
                }
                if(snumber[i]=="x"){islem="carpma"; break;}
                if(snumber[i]=="/"){islem="bolme"; break;}
                if(snumber[i]=="-"){islem="cıkarma"; break;}
                if(snumber[i]=="+"){islem="toplama"; break;}
                if(snumber[i]=="%"){islem="yuzde";break;}
        }

    for(let i=snumber.length-1; i>=0; i--){
        if(snumber[i]!="x"&&snumber[i]!="+"&&snumber[i]!="-"&&snumber[i]!="/"&&snumber[i]!="%"){
            snumber2 += snumber[i];
        }
        else{
            for(let i=snumber2.length-1; i>=0; i--){
                snumber3+=snumber2[i];
            }
            snumber2=snumber3/10;
            break;
        }
    }
    switch(islem){
        case "carpma":
            var number,number1,multiplication;
            number = parseFloat(snumber1,10);
            number1= parseFloat(snumber2,10);
            multiplication = number*number1;
            document.getElementById("screenlabel").innerHTML= multiplication;

            break;
        case "toplama":
            //codes 
            var number,number1,sum;
            number = parseFloat(snumber1,10);
            number1= parseFloat(snumber2,10);
            sum = number+number1;
            document.getElementById("screenlabel").innerHTML= sum;
            break;
        case "cıkarma": 
            //codes
            var number,number1,extraction;
            number = parseFloat(snumber1,10);
            number1= parseFloat(snumber2,10);
            extraction = number-number1;
            document.getElementById("screenlabel").innerHTML= extraction;
            break;
        case "bolme":
            //codes
            var number,number1,division;
            number = parseFloat(snumber1,10);
            number1= parseFloat(snumber2,10);
            division = number/number1;
            document.getElementById("screenlabel").innerHTML= division;
            break;
        case "yuzde":
            //codes
            var number,number1,mod;
            number = parseFloat(snumber1,10);
            number1= parseFloat(snumber2,10);
            mod = number%number1;
            document.getElementById("screenlabel").innerHTML= mod;
            break;
    }
})

