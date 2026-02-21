import express from 'express'
import usermodel from './usermodel.js'
const app=express()

app.get('/',(req ,res)=>{
    res.send("Hey!!")
})
app.get('/create',async (req ,res)=>{
    const createdUser= await usermodel.create({
        username:"John Does",
        age:69,
        email:"JohnnyDoe69@gmail.com"
    })
    res.send(createdUser)
})
app.get('/update',async (req ,res)=>{
    const updatedUser=await usermodel.findOneAndUpdate({username:"Aayushmaan"},{username:"AJ"},{new:true})
    
    res.send(updatedUser)
     
    
})
// Reading Data
app.get('/read',async (req ,res)=>{
    const read=await usermodel.find()
    res.send(read)
})

//Deleting Data
app.get('/delete',async (req ,res)=>{
    const deletedUser=await usermodel.findOneAndDelete({username:"AJ"})
    res.send(deletedUser)

})



app.listen(3000,()=>{
    console.log("App is listening at 3000")
})