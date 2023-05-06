const orders = require("../../../models/Order")

const getByUserId = async(request,response)=>{
    try{
        const response_order = await orders.find({user_id:request.user.id})
        console.log(response_order,"here6")
        if(response_order){
            return response.json({
                status:200,
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
module.exports = getByUserId