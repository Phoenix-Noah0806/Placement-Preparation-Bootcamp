const fs = require('fs')
const path = require('path')

console.log("Before read")

fs.readFile(path.join(__dirname, 'notes.txt'), 'utf-8', (err, data) => {
  if (err) {
    console.log("Error")
    return
  }
  console.log(data)
})

console.log("After Read")


// writeFile will overwrite the existing file content and prvious content will be lostand if file doesnt exist , it will create new file 


// fs.writeFile(path.join(__dirname, 'notes.txt'), '\n This is new line', 'utf-8', (err) => {
//   if (err) {
//     console.log("Error")
//     return
//   }
//   console.log("File Created")
// })

//  Appending to a file without overwriting existing content 
// fs.appendFile(path.join(__dirname, 'notes.txt'), '\n This is new line', 'utf-8', (err) => {
//   if (err) {
//     console.log("Error")
//     return
//   }
//   console.log("File Created")
// })

// deleting a file 

// fs.unlink(path.join(__dirname, 'output.txt'), (err) => {
//   if (err) {
//     console.log("Error")
//     return
//   }
//   console.log("File Deleted")
// })


// creating folder 

// fs.mkdir("Files",()=>{
//     console.log("Folder Created successfully")
// })
// deleting folder 
fs.rmdir("Files",()=>{
    console.log("Folder Deleted successfully")
})

fs.rename("notes.txt","new.txt",()=>{
    console.log("File Renamed Successfully")
})