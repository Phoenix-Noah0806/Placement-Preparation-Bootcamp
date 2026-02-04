import express from "express"
const app=express()

app.get('/users/:id',(req,res)=>{
    console.log(req.params)
    res.send(`user id is ${req.params.id}`)
})
app.get('/users/:class/:id',(req,res)=>{
    res.json(req.params)
})
const students=[
    {id:1,name:"Aman"},
    {id:2,name:"Ravi"},
    {id:3,name:"Vikas"}
]

app.get('/students/:id',(req,res)=>{
    const id=Number(req.params.id)
    const student=students.find(s=>s.id===id)
    if(!student){
        res.status(404).send("Student not found")
    }
    res.json(student)
})
app.listen(3000,()=>{
    console.log("App is listening")
})