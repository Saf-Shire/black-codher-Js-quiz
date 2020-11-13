let express = require ('express');
let app = express();

const fruit =["apples","bananas","pears"];
const names =["Jane","Yvonne","Tom"];

const people = [{name:names[0], hobbies: "netball", age:21},{name:names[1], hobbies: "basketball", age:23},{name:names[2], hobbies: "football", age:22}]

const person = [
    {   name:"Hannah",
        age: 7,
        eyeColour:"hazel"
    },
    {   name:"Jasmine",
        age: 9,
        eyeColour:"green"
    },
    {   name:"Ali",
        age: 11,
        eyeColour:"brown"
    }
]

app.get("/person/:id", (req,res) => {
    let id=req.params.id;
    res.send(`This person's name is: ${person[id].name} and their eye colour is: ${person[id].eyeColour}`);
    });
    

app.get("/api/names", (req,res)=> {
res.send(names);
});

app.get("/api/profiles", (req,res)=> {
    res.send(people);
    });
const server=app.listen(5000,function (){
    console.log('Node serving is running http://localhost:5000 ...  ');
});


