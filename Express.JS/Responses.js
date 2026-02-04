import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const app=express()
const __filename=fileURLToPath
(import.meta.url)
const __dirname=path.dirname(__filename)
app.use(express.json())

app.get('/send',(req,res)=>{
    res.send("Hello from express send response")
})

app.get('/json',(req,res)=>{
    res.json({
        name:"Aayushmaan",
        Role:'Developer'
    })
})

app.get('/status',(req,res)=>{
    res.status(404).send('Page unavailable')
})

app.get('/redirect',(req,res)=>{
    res.redirect('/send')
})
app.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/end',(req,res)=>{
    res.end("Response ended")
})
app.get('/write',(req,res)=>{
    res.write("Hello ")
    res.write("Aayushmaan ")
    res.end("Bye ")
})


app.listen(3000,()=>{
    console.log("http://localhost:3000")
})