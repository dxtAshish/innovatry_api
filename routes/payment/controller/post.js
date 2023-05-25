const Razorpay=require("razorpay")

var instance = new Razorpay({
    key_id:"rzp_test_4OOAMCjqTxkzHV",
    key_secret:"vKKS6NMzmopibbqbYHvYhM0L"
})

const paymentPost =  async(request,response)=>{
    try{
        
        const razorpay_response = await instance.orders.create({
            "amount":request.body.amount,
            "currency":"INR"
        })

        response.status(201).json({
            data:razorpay_response,
            message:"Payment order Created",
            status:201
        })

    }
    catch(error){
        console.log( error )
		return response.status(500).json({

        	error: "something went wrong"

        })
    }

}

module.exports =  paymentPost