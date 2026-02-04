const myPromise=new Promise((res,rej)=>{
    let success=true;
    if(success){
        resolve("Data mil gaya")
    }
    else{
        rejects("Error Occured");
    }
})
myPromise.then(result=>console.log(result)).catch(console.log("Error Occured"))