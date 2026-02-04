import express from 'express';
const app=express()

app.use(express.json())

let user={
    id:1,
    name:"John Doe",
    age: 25,
    isActive: true
}

app.get('/user',(req,res)=>{
    res.json(user)
})

app.post('/user',(req,res)=>{
    user.id+=1;
    res.send(`User's Id has ben incremented to ${user.id}`)
})

app.put('/user',(req,res)=>{
    user={
        id:1,
        name:req.body.name,
        age:req.body.age,
        isActive:req.body.isActive
    }
    res.send("User replaced successfully")
})

app.patch('/user/age',(req,res)=>{
    user.age+=1;
    res.send(`User's age has been incremented to ${user.age}`)
})

app.patch('/user/toggle',(req,res)=>{
    user.isActive=!user.isActive;
    res.send(`User set to ${user.isActive}`)
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000")
})