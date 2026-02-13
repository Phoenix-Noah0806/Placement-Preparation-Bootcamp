
import express from "express"
const app=express()


app.use(express.json())

const USER={
    username: "admin",
    password: "1234"
}
//Basic Authentication
app.post("/login",(req ,res)=>{
    const {username , password}=req.body;
    if(username===USER.username && password===USER.password){
        return res.json({"Message": "Login Successful"})
    }
    res.status(401).json({"Message": "Invalid Credentials"})
})

app.get('/dashboard',(req, res)=>{
    res.send("Welcome to dashboard")
})
app.listen(3000, () => {
  console.log("App is listening at http://localhost:3000")
})