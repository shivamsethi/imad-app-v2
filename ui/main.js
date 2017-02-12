//counter button
var counter_button=document.getelementById("counter");
var count_text=document.getElementById("count");
var count=0;
counter_button.onclick=function(){
    count=count+1;
    count_text.innerHTML=count.toString();
};