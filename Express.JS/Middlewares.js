import express from "express";
const app = express();


const asyncWork=()=>{
    Promise.reject(new Error("Async Error Occured"))

}


function globalMiddleware(req, res, next){
    console.log("midlleware started");     
// console.log("URL:", req.url);
     next();
 }
app.use(globalMiddleware);

app.get('/',(req, res)=>{
    res.send("home page");
});

app.use((err, req, res, next)=>{   // error middleware
    console.log("error caught");
    console.log(err.message);
    res.status(500).send("Something went wrong");
})
app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");
})