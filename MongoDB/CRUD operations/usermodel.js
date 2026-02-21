import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/CRUD-operations`)

const userSchema=mongoose.Schema({
    username:String,
    age:Number,
    email:String

})

mongoose.model('User', userSchema)

export default mongoose.model('User')