console.log('Loaded!');

var element=document.getElementById("main_element");
element.innerHTML="New value of js code";

var image=document.getElementById("image_id");
image.onclick=function () {
    image.style.marginLeft='200px';
    image.style.marginTop='500px';
};