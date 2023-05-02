const products = require("../../../models/Product")

const getAllProduct = async(request,response)=>{
    try{
        const response_product = await products.find({})
        console.log(response_product,"here6")
        if(response_product){
            return response.json({
                status:200,
                data:response_product,
                message:"successfully added"
            })
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
module.exports = getAllProduct