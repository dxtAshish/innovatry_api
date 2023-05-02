const products = require("../models/Product")

const getProduct = async(request,response,next)=>{
    try{
         const response_product=await products.findById(request.params.product_id)
        if(response_product){
            request.product=response_product
            console.log(8,response_product)
            return next();
        }
        return response.json({
            status:402,
            message:"unable to progress"
        })
    }catch(err){
        return response.json({
            status:500,
            message:"server error"+err
        })
    }
}
module.exports = getProduct