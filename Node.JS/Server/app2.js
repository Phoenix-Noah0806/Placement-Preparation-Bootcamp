const http=require('http')
const path=require('path')
const fs=require('fs')
fs.writeFile("notes.txt","\n This is new line","utf-8",(err,data)=>{
    if(err){
        throw err
    }
    console.log("File created ")
})
fs.readFile("notes.txt","utf-8",(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})
// function createServer(res,fileName){
//     const filePath=path.join(__dirname,fileName)
//     fs.readFile(filePath,(err,data)=>{
//         if(err){
//             res.writeHead(500,{"Content-Type":"text/html"})
//             res.end("<h1> 500 Server Error Occured </h1>")
//             return;
//         }
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data)
//     })
// }
const server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/'){
        // createServer(res,"500mb.txt")
        const filePath=path.join(__dirname,"500mb.txt")
        res.writeHead(200,{"Content-Type":"text/html"})
        const readStream=fs.createReadStream(filePath,{
            encoding:"utf-8",
            highWaterMark:64*1024
            
        })
        readStream.on('error', (err) => {
            res.writeHead(500);
            res.end('Error reading file');
        });

        readStream.on('data',(chunk)=>{
            res.write(chunk)
        })
        
        readStream.pipe(res);
    }
})
server.listen(3000,()=>{
    console.log('Server is running at localhost 3000')
})