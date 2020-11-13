const express = require ("express");
const app = express();

const fruit =["apples","bananas","pears"];
const names =["Jane","Yvonne","Tom"];

const people = [{name:names[0], hobbies: "netball", age:21},{name:names[1], hobbies: "basketball", age:23},{name:names[2], hobbies: "football", age:22}]

app.get("/api/names", (req,res)=> {
res.send(names);
});

app.get("/api/profiles", (req,res)=> {
    res.send(people);
    });

const server= app.listen(5000,function (){
    console.log(' Node serving is running http://localhost:5000 ... ');
});


