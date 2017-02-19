alert("start");

// var comment_btn=document.getElementById("comment_btn");
// var comment_input=document.getElementById("comment_text");
// comment_btn.onclick=function(){
//     alert("yaa");
//     var request=new XMLHttpRequest();
    
//     request.onreadystatechange=function(){
//         if(request.readyState===XMLHttpRequest.DONE)
//         {
//             if(request.status===200)
//             {
//                 var comments=JSON.parse(request.responseText);
//                 var comment_list='';
//                 for(var i=0;i<comments.length;i++)
//                 {
//                     comment_list+="<li>"+comments[i]+"</li>";
//                 }
//                 var ul=document.getElementById("comment_list");
//                 ul.innerHTML=comment_list;
//                 comment_input.value="";
//             }
//         }
//     };
//     request.open('GET','http://shivamsethi.imad.hasura-app.io/submit_comment/'+comment_input.value,true);
//     request.send(null);
// };


alert("eeeee");

//counter button
var counter_button=document.getElementById("counter");
var count_text=document.getElementById("count");
alert("yaha par");



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
alert("yo");

var submit_btn=document.getElementById("submit_btn");
var name_input=document.getElementById("name_input");
submit_btn.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var names=JSON.parse(request.responseText);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById("name_list");
                ul.innerHTML=list;
                name_input.value="";
            }
        }
    };
    
    request.open('GET','http://shivamsethi.imad.hasura-app.io/submit-name?name='+name_input.value,true);
    request.send(null);
    
};

