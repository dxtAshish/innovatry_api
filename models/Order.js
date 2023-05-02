const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const OrderSchema= new Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    pin_code:{
        type:String,
        required:true,
    },
    mobile_no:{
        type:String,
        required:true,
    },
})
module.exports=mongoose.model('order',OrderSchema)