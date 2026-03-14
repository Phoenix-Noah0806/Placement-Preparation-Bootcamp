import express from 'express'
import path from 'path'
import { fileURLToPath } from "url"
import userModel from './models/user.js'
const app=express()

app.set("view engine","ejs")
app.use(express.json())
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/read',async (req,res)=>{
    let users=await userModel.find()
    res.render("read",{users})
})

app.post('/create',async (req,res)=>{
    let {name,email,image}=req.body

    let createdUser=await userModel.create({
        name,
        email,
        image
    })
    res.send(createdUser)
    
})
app.get('/delete/:id',async(req , res)=>{
    let users=await userModel.findByIdAndDelete(req.params.id)
    res.redirect("/read")
})

app.listen(3000,()=>{
    console.log("App is listening at 3000")
})