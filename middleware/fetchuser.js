var jwt=require('jsonwebtoken');
const JWT_SECRET= 'ashihsdxt$';
const fetchuser=(req,res,next)=>{
    //get the user from jwt token and id to req object
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error: "please authenticate with a valid token" })
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        console.log(data,"data")
        req.user= data.user;
    next();
    } catch (error) {
        res.status(401).send({error: "please authenticate with a valid token" })
    }
 
}
module.exports=fetchuser;