import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Users=mongoose.model("Users",userSchema)

export default Users