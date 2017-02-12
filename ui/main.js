console.log('Loaded!');

var element=document.getElementById("main_element");
element.innerHTML="New value of js code";

var image=document.getElementById("image_id");
var margin_left=0;
function moveRight(){
    margin_left=margin_left+6;
    image.style.marginLeft=margin_left+'px';
}

image.onclick=function () {
    var interval=setInterval(moveRight,25);
};