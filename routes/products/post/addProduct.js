const products = require("../../../models/Product")

const addProduct = async(request,response)=>{
    try{
        const {title,description,tag,price,image} = request.body
        const {id}=request.user
        const response_product = await products.create({
            title:title,
            description:description,
            tag:tag,
            user_id:id,
            price:price,
            image:image
        })
        if(response_product){
            return response.json({
                status:201,
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
module.exports = addProduct