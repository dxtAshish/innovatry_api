const express = require("express")
const router = express.Router()
const fileUpload = require("express-fileupload")
const uploadImage = require("./upload")

router.use(fileUpload({
    useTempFiles:true
}))

router.post("/uploadimage",uploadImage)

module.exports = router