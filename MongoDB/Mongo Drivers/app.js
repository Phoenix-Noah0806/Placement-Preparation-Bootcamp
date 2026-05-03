import { MongoClient } from "mongodb";
import { uri } from "./test.js";
const client=new MongoClient(uri)
const dbname="bank"
const connect=async()=>{
    try{
        await client.connect();
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
async function main(){
    try{
        await connect();
    }
    catch(err){
        console.log("Error in main function:", err);

    }
    finally{
        await client.close();
    }
}

main()