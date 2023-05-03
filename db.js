const mongoose= require('mongoose');
mongoose.set("strictQuery",false)
 const mongoURI="mongodb+srv://ashishdxt121200:qdSP7Ile7EYzRWen@innovatry.old1v4i.mongodb.net/?retryWrites=true&w=majority"
 const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongo");
    })
 }
 module.exports=connectToMongo;