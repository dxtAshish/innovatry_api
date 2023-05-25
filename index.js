const express=require('express');
const connectToMongo=require('./db');
connectToMongo();

const app =express();
const cors = require("cors")
app.use(cors())
const port =5000
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/item', require('./routes/item'))
app.use("/api/product",require("./routes/products/route"))
app.use("/api/order",require("./routes/order/routes"))
app.use("/api/upload",require("./routes/uploads/routes"))
app.use("/api/payment",require("./routes/payment/routes"))
app.listen(port,()=>{
    console.log("app listining")
})