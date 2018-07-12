var express = require('express');

var app =express();

app.use(express.static(__dirname+'/public'));

app.get('/something',function(req,res){
    data = [
        {
            id : 1,
            Name : "Akshay"
        },
        {
            id : 2,
            Name : "Lakshay"
        }
    ]

    data = JSON.stringify(data);

    res.send(data);
})

app.listen(8080,function(){
    console.log('server has started');
})