const express = require("express");
const getProduct = require("../../middleware/fetchProduct");
const fetchuser = require("../../middleware/fetchuser");
const addorder = require("./post/addOrder");
const getByUserId = require("./get/getByUserId");
const router = express.Router();

router.post("/order/:product_id", getProduct, fetchuser, addorder);


router.get("/order/getorderbyuser",fetchuser,getByUserId)

module.exports = router;
