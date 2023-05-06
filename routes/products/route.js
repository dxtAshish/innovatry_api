const express = require("express")
const fetchuser = require("../../middleware/fetchuser")
const addProduct = require("./post/addProduct")
const getAllProduct = require("./get/get")
const getAllProductByCategory = require("./get/getbycategory")
const getProductById = require("./get/getbyid")
const getProductByUserId = require("./get/getbyuserid")
const router =  express.Router()

router.post("/addproduct",
    fetchuser,
    addProduct
)
router.post("/addproduct_inno",
    fetchuser,
    addProduct
)

router.get("/getproduct",getAllProduct)

router.get("/getproduct/:category_name",getAllProductByCategory )

router.get("/product/:product_id",getProductById)

router.get("/getbyuser",fetchuser,getProductByUserId)


module.exports = router