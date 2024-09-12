const express =require('express');
// const abc= require('./xyz')
const app = express();
const person= [
    {
        id:"1",
        name:"abc",
        rollno:1
    },
    {
        id:"1",
        name:"abc",
        rollno:1
    },
    {
        id:"1",
        name:"abc",
        rollno:1
    },

]
app.get('/hello',(req,res)=>(
    res.send('Hello')
));
app.get('/alluser/:name',(req,res)=>{
    try{
        let name=req.params.name
        for(let i  in person ){if (name===person[i]["name"]){
            res.send(name)
        }}
    }
    catch(err){
        res.send('ERR')
    }
})
app.listen(3000); 
