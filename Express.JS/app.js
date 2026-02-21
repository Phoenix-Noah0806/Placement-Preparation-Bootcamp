import express from "express";
import fs from 'fs'
const app = express();
const port = 3000;

app.use(express.json()); // middleware

let users = [
  { id: 1, name: "John" ,age:31},
  { id: 2, name: "Jane" ,age:28},
];

app.use((req,res,next)=>{
  console.log("Hello from Middleware 1");
  req.uname="Aayushmaan"
  fs.appendFile("log.txt",`${Date.now()}\n ${req.method}`,(err,data)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log("Data Written to File")
    }
  })
  next()
})
app.use((req,res,next)=>{
  console.log("Hello from Middleware 2",req.uname);
  next()
})
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send("User Added Successfully");
  
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((i) => i.id == req.params.id);
  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.map((u) => (u.id == id ? { id:u.id,...req.body } : u));
  res.send("User Updated Successfully");
});

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.map((u) => (u.id == id ? { ...u, ...req.body } : u));
  res.send("User Updated Successfully");
})

app.delete('/users/:id',(req,res)=>{
  users=users.filter(u=>u.id!=req.params.id)
  res.send("User Deleted Successfully")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
