const express = require('express');

const app = express();

var fs = require('fs');

// fs.writeFile('./Storing.txt','popopopo');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/home', express.static(__dirname + '/public'))

app.get('/', function(req,res) {
    //res.send("It's me Akshay");
    res.redirect("/home");
//    fs.readFile('./Storing.txt', function(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(JSON.stringify(data));
//     console.log(JSON.parse(data));
//     res.send(data);
//     });
    
})

app.get('/json',function(req,res){
    var content ='';
    fs.readFile('Storing.txt','utf-8',function(err,data){
        if(err){
            console.log("err",err);
        }
        content = data;
       // res.setHeader('Content-type',application/json);
        console.log('read'+data);

        res.send(content);
    });
})

app.post("/json",function(req,res){

    var data = req.body.json;

    console.log(data);
    fs.writeFile('./Storing.txt',data,function(err){
        if(err){
            console.log('error occur',err)
        }
        //res.send('');
    })

})

app.get('/jsonc',function(req,res){
    var content ='';
    fs.readFile('Checking.txt','utf-8',function(err,data){
        if(err){
            console.log("err",err);
        }
        content = data;
       // res.setHeader('Content-type',application/json);
        console.log('read'+data);

        res.send(content);
    });
})


app.post("/jsonc",function(req,res){

    var data = req.body.jsonc;

    console.log(data);
    fs.writeFile('./Checking.txt',data,function(err){
        if(err){
            console.log('error occur',err)
        }
        //res.send('');
    });
})

app.listen("8080",function(){
    console.log("Server Started");
})