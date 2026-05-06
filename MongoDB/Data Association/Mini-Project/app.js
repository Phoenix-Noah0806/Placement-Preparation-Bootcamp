import express from "express";
import mongoose from "mongoose";
import userSchema from "./models/user.js";
import postSchema from "./models/post.js";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(400).send("Something went wrong");
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if(result){
      res.status(200).send("You can login")
      let token=jwt.sign({email:email,userid:user._id},"secret")
      res.cookies("tokens",token)
    }
    else{
      res.redirect("/login")
    }

  });
});
app.post("/register", async (req, res) => {
  let { email, password, username, name, age } = req.body;
  let user = await userSchema.findOne({ email });
  if (user) {
    return res.status(400).send("User already exists");
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userSchema.create({
        username,
        email,
        age,
        name,
        password: hash,
      });
      let token=jwt.sign({email:email,userid:user._id},"secret")
      res.cookies("tokens",token)
      res.send("User registered successfully");
    });
  });
});
app.get('/login' ,isLoggedin,async(req,res)=>{
    res.render('login')
})

app.get('/logout',(req,res)=>{
  res.cookie("token","")
  res.redirect("/login")
})
app.get('/profile',isLoggedin,(req,res)=>{
  console.log(req.user)
  res.render("login")
})
function isLoggedin(req,res,next){
  if(req.cookies.token===""){
    res.send("you must be logged in") 
  }
  else{
    let data=jwt.verify(req.cookies.token,"secret")
    req.user=data
  }
  next()
}
app.listen(3000);
