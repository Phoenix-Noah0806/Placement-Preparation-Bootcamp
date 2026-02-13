// Session Authentication 
import express from 'express'

const app=express()
app.use(express.json())
app.use(session({
    secret:"hello123",
    resave:false,
    saveUninitialized:true
}))

const USER={
    username:"admin",
    password:"1234"
}
app.listen(3000,()=>{
    console.log("App is listening at http://localhost:3000")
})
