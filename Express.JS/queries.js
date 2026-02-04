import express from "express"
const app=express()

app.get('/search',(req,res)=>{
    console.log(req.query)
    const name=req.query.name
    res.send(`You searched for ${name}`)
    res.send("Check console")
    

})

app.listen(3000,()=>{
    console.log("App is listening")
})