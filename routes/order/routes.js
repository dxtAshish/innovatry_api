const express = require("express")
const getProduct = require("../../middleware/fetchProduct")
const fetchuser = require("../../middleware/fetchuser")
const addorder=require("./post/addOrder")
const router =  express.Router()


router.post("/order/:product_id",
   getProduct,
   fetchuser,
   addorder)
   
   module.exports = router