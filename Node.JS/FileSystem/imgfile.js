const fs=require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'bike.avif'), (err, data) => {
  if (err) {
    console.log("Error")
    return
  }
  fs.writeFile("copy.png",data, () => {   // This will create copy.png file in the current directory+
    
    console.log("Image Copied Successfully")
  })
})