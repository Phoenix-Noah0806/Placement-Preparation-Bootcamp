import mongoose from 'mongoose'

mongoose.connect("mongodb://127.0.0.1:27017/testapp")

const userSchema=mongoose.Schema({
    image:String,
    email:String,
    name:String
})
export default mongoose.model("user", userSchema);