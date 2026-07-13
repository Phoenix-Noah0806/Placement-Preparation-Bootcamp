import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import userModel from "./models/User.js";
import postModel from "./models/post.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/profile", isLoggedin, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  console.log(req.user);
  res.render("profile", { user });
});
app.post("/post", isLoggedin, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;

  let post = await postModel.create({
    user: user._id,
    content,
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect('/profile')
});

app.post("/register", async (req, res) => {
  let { email, username, password, name, age } = req.body;

  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).send("User Already exists");
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        username: username,
        name: name,
        email: email,
        age: age,
        password: hash,
      });
      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.send("registered successfully");
    });
  });
});
app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(500).send("Something Wrong!!");
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else {
      res.redirect("/login");
    }
  });
});
app.get("/logout", (req, res) => {
  res.cookie("token", " ");
  res.redirect("/login");
});
function isLoggedin(req, res, next) {
  // middleware for protected routes
  if (!req.cookies.token) {
    res.redirect("/login");
  } else {
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  }
}
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
