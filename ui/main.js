//counter button
var counter_button=document.getElementById("counter");
var count_text=document.getElementById("count");


counter_button.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechanged=function(){
        if(request.readyState==XMLHttpRequest.DONE)
        {
            if(request.status==200)
            {
                var counter=request.responseText.toString();
                count_text.innerHTML=counter;
            }
        }
    };
    request.open('GET','http://shivamsethi.imad.hasura-app.io/counter',true);
    request.send(null);
};