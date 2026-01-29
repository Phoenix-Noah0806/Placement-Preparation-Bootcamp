let headers="Template String"
let tags=['Template ', "String","ES6"]
let html=`<h2>${headers}</h2><ul>`
for(const x of tags){
    html+=`<li>${x}</li>`
}
html+=`<ul>`
console.log(html)