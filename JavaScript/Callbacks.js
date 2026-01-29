function task(callback){
    setTimeout(() => {
       console.log("B")
    }, 2000);
}
console.log("A")
task((value)=>{
    console.log(value)
})
console.log("C")