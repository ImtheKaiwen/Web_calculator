//* while clicked "=" 
document.getElementById("=").addEventListener("click",function(){
    var labeltxt= document.getElementById("scorelabel").innerText;
    var numberlabeltxt = parseInt(labeltxt,10);
    numberlabeltxt++;
    document.getElementById("scorelabel").innerHTML= numberlabeltxt ;
})