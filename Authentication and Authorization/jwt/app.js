import jwt from "jsonwebtoken"
import express from "express"
import cookieParser from "cookie-parser"
const app=express()
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    let token=jwt.sign({email: "xyz@gmail.com"},"secret")
    res.cookie("token",token)
    res.send("Done")
})
app.get('/read',(req,res)=>{
    let data=jwt.verify(req.cookies.token ,"secret")
    console.log(data)
})

app.listen(3000)