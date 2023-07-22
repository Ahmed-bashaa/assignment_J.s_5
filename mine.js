// document.addEventListener("mousemove",function(einfo){
// document.querySelector("img").style.left=einfo.clientX+"px";
// document.querySelector("img").style.top=einfo.clientY+"px";

// })

// var allItames= Array.from(document.querySelectorAll("img"))

// console.log(allItames)
// for (var i = 0; i < allItames.length; i++) {

    
// allItames[i].addEventListener("click", function(einfo){

// var imgSrs=einfo.target.src;


// console.log(imgSrs)
// document.querySelector(".minDiv").style.backgroundImage=`url(${imgSrs})`



// })



// }

var allItames = Array.from(document.querySelectorAll("img"));
var layerParent = document.querySelector(".layerParent");
for (var i = 0; i < allItames.length; i++) {

    allItames[i].addEventListener("click" ,function () {

        layerParent.classList.replace("d-none","d-flex")



    })



}












