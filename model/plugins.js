const mongoose= require('mongoose');

const pluginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    pluginId:{
        type:mongoose.Schema.ObjectId,    
    },
    
    description:{
        type:String,
    },

})

module.exports=mongoose.model('Plugin',pluginSchema)