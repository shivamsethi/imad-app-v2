//counter button
var counter_button=document.getElementById("counter");
var count_text=document.getElementById("count");


counter_button.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText.toString();
                count_text.innerHTML=counter;
            }
        }
    };
    request.open('GET','http://shivamsethi.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit_btn=document.getElementById("submit_btn");
var name_input=document.getElementById("name_input");
submit_btn.onclick=function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById("nmame_list");
    ul.innerHTML=ul;
    
};