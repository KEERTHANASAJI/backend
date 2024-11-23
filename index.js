//1.importing
const express = require("express")

//2.initialise
const app=new express()
app.use(express.json());

const dbArray=[
    {name:"Maya",age:20},
    {name:"Miya", age:22},
];

//3. api creation
app.get('/',(req,res)=>{
    res.send("Message from the server")
})

app.get('/trial',(req,res)=>{
     res.send("trial message")
})
app.get('/view',(req,res)=>{
    res.send(dbArray)
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data added");
})
//update method
app.put("/edit",(req,res)=>{
    dbArray.splice(1,1,req.body)  //1-index
    res.send("Updated succesfully")
})

//delete
app.delete('/del',(req,res)=>{
    dbArray.pop()
    res.send("deleted successfully")
})

//4. por
app.listen(8080,()=>{
    console.log("port is running")
})