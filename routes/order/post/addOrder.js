const order=require("../../../models/Order")

const addorder= async(req,response)=>{
    try{
        const {address, state, pin_code, mobile_no} = req.body
       console.log(req.user,req.product,7)
        const response_order = await order.create({
            address:address,
            state:state,
            pin_code:pin_code,
            mobile_no:mobile_no,
            user_id:req.user.id,
            product_id:req.product._id
        })
        if(response_order){
            return response.json({
                status:201,
                data:response_order,
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

module.exports = addorder