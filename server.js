var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:"Article one | Shivam Sethi",
    heading:"Article One",
    date:"Feb 01,2017",
    content:`<p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>
            <p>
                    This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
            </p>`
},
    'article-two':{
            title:"Article two | Shivam Sethi",
            heading:"Article Two",
            date:"Feb 02,2017",
            content:`<p>
                    This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.
                </p>
                <p>
                    This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.
                </p>
                <p>
                    This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.
                </p>
                <p>
                    This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.
                </p>
                <p>
                    This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.This is the content of my second article.
                </p>`
    },
    'article-three':{
        title:"Article three | Shivam Sethi",
        heading:"Article Three",
        date:"Feb 03,2017",
        content:`<p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.
                </p>
                <p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.
                </p>
                <p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.
                </p>
                <p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.
                </p>
                <p>
                    This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.This is the content of my third article.
                </p>`
    }
};


function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var html_template=`<html>
    
    <head>
        <title>${title}</title>
        
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1" />
        
        <link
            href="/ui/style.css"
            rel="stylesheet" />
            
        
        
    </head>
    
    <body>
        
        <div
            class="container">
            
            <div>
                <a
                    href="/">
                    Home
                </a>
            </div>
            <hr/>
            <h4>${heading}</h4>
            <div>
            
                ${date}
            
            </div>
            <div>
                
                ${content}
            
            </div>
        
            <br />
            <hr />
            
            <div>
        
                <input
                    type="text"
                    id='comment_text'
                    placeholder="Type Comment here..." />
                
                <input
                    type="submit"
                    id='comment_btn'
                    value="Comment" />
                
                <ul
                    id="comment_list">
            
                </ul>
        
            </div>
        </div>
        
        <script type="text/javascript" src="/ui/main.js">
        </script>
        
    </body>
    
</html>`;
return html_template;
}


var count=0;
app.get('/counter',function(req,res){
    count=count+1;
    res.send(count.toString());
});

var comments=[];
app.get('/submit_comment/:comment',function(req,res){
    var comment=req.params.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
});

app.get('/:article_name',function(req,res){
    var selected=req.params.article_name;
    res.send(createTemplate(articles[selected]));
});

app.get('/shiv.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
