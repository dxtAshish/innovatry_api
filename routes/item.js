const express=require('express');
const router=express.Router();
const Product=require('../models/Product');
//ROUTE 1: add item in scrapyard section using POST: "/api/item/scrapyard" Login required
router.get('/scrapyard',(req,res)=>{
  
      res.json([])
})
module.exports=router