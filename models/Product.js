const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema({
    title:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true,
        
    },
    tag:{
        type : String,
        default:"General"
       
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:false,
        default:"testing"
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    image:{
        type:String,
        required:false
    }
},{timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"
}

})
const products = mongoose.model('product',ProductSchema);
module.exports = products


