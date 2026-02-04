import express from "express";
const app = express();
const port = 3000;

app.use(express.json()); // middleware

let users = [
  { id: 1, name: "John" ,age:31},
  { id: 2, name: "Jane" ,age:28},
];
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
