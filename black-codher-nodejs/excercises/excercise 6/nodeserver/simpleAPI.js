const express = require ("express");
const app = express();
const fs = require("fs");

const fruit =["apples","bananas","pears"];
const names =["Jane","Yvonne","Tom"];

const people = [{name:names[0], hobbies: "netball", age:21},{name:names[1], hobbies: "basketball", age:23},{name:names[2], hobbies: "football", age:22}]

app.get("/api/names", (req,res)=> {
res.send(names);
});

app.get("/api/profiles", (req,res) => {
        res.send(people);
        });    

app.get("/profiles", (req,res) => {
    fs.readFile("models/profiles.json","utf8",(err,data) => {
    res.send(data);
    });
})


app.get("/profiles/view", (req, res) => {
    fs.readFile("models/profiles.json", "utf8", (err, data) => {
        let output = "<h1>Profiles:</h1>";
        let profiles = JSON.parse(data);
        for(const key of Object.keys(profiles)){
            output += `<h2>${profiles[key].firstname} ${profiles[key].lastname}</h2><p>${profiles[key].bio}</p>`;
        }
        res.send(output);
    });
})

const server= app.listen(5000,function (){
    console.log(' Node serving is running http://localhost:5000 ... ');
});
