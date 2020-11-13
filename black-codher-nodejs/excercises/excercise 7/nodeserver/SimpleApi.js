const express = require ("express");
const app = express();
const fs= require("fs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.raw());

let names=["Joe","Muna","Tolly"];

app.delete("/api/profiles/:id",(req,res) =>{
    console.log(names);
    let id =req.params.id;
    names.splice(id,1);
    console.log(names);
    res.send("its all gone !");
})

app.put("/api/profiles/",(req,res) => {
    console.log(req.body);
    let text =JSON.stringify(req.body);
    fs.appendFile("file.text", text, (err,data) => {
 if (err) {return "cannot write" + data;}
    }) 
    res.send("well done, you did it!");
});

const server= app.listen(5000,function (){
    console.log(' Node serving is running http://localhost:5000 ... ');
});

    
    