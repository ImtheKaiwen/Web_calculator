document.getElementById("+").addEventListener("click", function(){
    var labeltext=document.getElementById("screenlabel").innerText+"+";
    document.getElementById("screenlabel").innerHTML= labeltext;
})
document.getElementById("-").addEventListener("click", function(){
    var labeltext=document.getElementById("screenlabel").innerText+"-";
    document.getElementById("screenlabel").innerHTML= labeltext;
})
document.getElementById("zero").addEventListener("click", function(){
    var labeltext=document.getElementById("screenlabel").innerText+"0";
    document.getElementById("screenlabel").innerHTML= labeltext;
})
document.getElementById("dot").addEventListener("click", function(){
    var labeltext=document.getElementById("screenlabel").innerText+".";
    document.getElementById("screenlabel").innerHTML= labeltext;
})