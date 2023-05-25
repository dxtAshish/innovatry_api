const express = require("express")
const router = express.Router()
const paymentPost = require("./controller/post")
router.post("/",paymentPost)

module.exports = router