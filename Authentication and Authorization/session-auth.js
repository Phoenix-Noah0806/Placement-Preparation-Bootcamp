// Session Authentication 
import express from 'express'
import session from 'express-session'
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

app.post('/login',(req ,res)=>{
    const {username,password}=req.body
    if(username===USER.username && password===USER.password){
        req.session.user=username
        return res.json({"Message": "Login Successful"})
    }
    res.status(401).json({"Message": "Invalid Credentials"})
    })

app.get('/dashboard',(req ,res)=>{
    if(!req.session.user){
        return res.status(401).json({"Message": "Unauthorized"})    
    }
    res.send(`Welcome to dashboard , ${req.session.user}`)
})
app.listen(3000,()=>{
    console.log("App is listening at http://localhost:3000")
})
