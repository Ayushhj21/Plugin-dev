const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    pluginId:[
        {
        type:mongoose.Schema.ObjectId, 
        ref:'Plugin'   
        },   
    ],
})

module.exports=mongoose.model('Users',userSchema)