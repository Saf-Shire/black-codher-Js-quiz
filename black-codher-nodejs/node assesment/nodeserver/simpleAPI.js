
const express = require ("express");
const app = express();
const fs = require("fs");



app.get("/api/profiles", (req,res) => {
    fs.readFile("models/profiles.json","utf8",(err,data) => {
    res.send(data);
    });
});

app.get("/api/profiles/:id",  (req, res) => {
    fs.readFile("models/profiles.json", "utf8", (err, data) => {
      let profiles = JSON.parse(data);
      let profile = profiles["profile" + req.params.id];
      if(profile){
          console.log (profile)
      res.end(JSON.stringify(profile)); 
      }
      else{
          res.status(404).send('Profile not found');
        }
    });
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.raw());

app.put("/api/profiles/",(req,res) => {
    fs.readFile("models/profiles.json", "utf8", (err, data) => {
        let profiles = JSON.parse(data);
        console.log(profiles);
     let text = JSON.stringify(profiles);
    fs.appendFile("file.text", JSON.stringify(text), (err,data) => {
 if (err) {return "cannot write" + data;}
    }) 
    res.send("well done, you did it!");
});
});

// app.delete("/api/profiles/:id",(req,res) => {
//     fs.readFile("models/profiles.json", "utf8", (err, data) => {
//     let profiles = JSON.parse(data);
//     let profile = profiles["profile" + req.params.id];
//     profile.delete(id,1);
//     console.log(profile);
//     res.send("its all gone !");
//     });
// });
const server= app.listen(5000,function (){
    console.log(' Node serving is running http://localhost:5000 ... ');
});
