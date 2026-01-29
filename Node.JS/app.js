const http=require('http')
const url=require('url')  // converts string to object
const server=http.createServer((req,res)=>{
    // if(req.url==='/'){
    //     res.end("Home Page")
    // }
    // else if(req.url==='/about')(
    //     res.end("About Page")
        
    // )
    // else{
    //     res.end("Page 404 not Found!!!!")
    // }
    // if(req.method==='GET'){
    //     res.end("This is GET request")
    // }
    // if(req.method==='POST'){
    //     res.end("This is POST Request")
    // }
    // res.end("Hello from Node.js")
    const parsedURL=url.parse(req.url,true);
    res.end(JSON.stringify(parsedURL.query))
})
// Routing


server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})