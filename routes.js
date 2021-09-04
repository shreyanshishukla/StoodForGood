const express=require("express")
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("not okay")
})
module.exports=router