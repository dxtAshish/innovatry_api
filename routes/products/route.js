const express = require("express")
const fetchuser = require("../../middleware/fetchuser")
const addProduct = require("./post/addProduct")
const getAllProduct = require("./get/get")
const getProductById = require("./get/getbyid")
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

router.get("/product/:product_id",getProductById)


module.exports = router