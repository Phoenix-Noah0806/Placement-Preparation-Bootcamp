import express from 'express'
import mongoose from 'mongoose'
import User from './model/User.js'
import Post from './model/posts.js'
const app=express()

app.get('/',(req,res)=>{
    res.send("Hey !!!")
})
app.get('/create',async function(req,res){
    let user=await User.create({
        username:"AJ",
        age:24,
        email:"xyz@gmail.com"
    })
    res.send(user)
})

app.get('/post',async(req,res)=>{
    let post=await Post.create({
        postdata:"HelloWorld!!!",
        user:"69f7a5e52126594bf23cc48d"
    })
    let user=await User.findOne({_id:"69f7a5e52126594bf23cc48d"})
    user.posts.push(post)
    await user.save()
    res.send({post, user})

})

app.listen(3000)