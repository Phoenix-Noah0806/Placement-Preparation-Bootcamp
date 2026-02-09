import mongoose from 'mongoose';
const studentScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:1
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

export default mongoose.model("Student",studentScehma)