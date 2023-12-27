document.getElementById("1").addEventListener("click", function(){
    var labeltext= document.getElementById("screenlabel").innerText+document.getElementById("1").innerText;
    document.getElementById("screenlabel").innerHTML= labeltext;
})