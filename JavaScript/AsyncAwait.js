function getData(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("data mil gaya"),2000)
    })
}
async function fetchData(){
    console.log("Fetching...")
    const data=await getData();
    console.log(data)
}
fetchData()


//   
console.log("A")  // Sync Code

setTimeout(() => {
    console.log("B")   // Web API's 
}, 0);
Promise.resolve().then(()=>console.log("C"))  // microTask

console.log('D')