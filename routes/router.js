const express=require('express')
const router=express.Router()

const path=require('path')
const { getMaxListeners } = require('process')
const db=[]
const User=[]

 
router.get('/buy',(req,res)=>{
    res.render("buy2",{db:db})
})
router.get('/',(req,res)=>{
    

    res.render("indexnew")
})
router.post('/sell',(req,res)=>{
   
    const newdata={
     donationtype:req.body.donationtype,
     type:req.body.type,
     nameofmed:req.body.nameofmed,
     quantity:req.body.quantity,
     phnnumber:req.body.phnnumber,
     email:req.body.email,
     city:req.body.city,
     name:"priya"
 
 
    }
    db.push(newdata)
    res.render("sell.ejs",{db:"okay"})
    
 
 })
 router.get('/login',(req,res)=>{
     res.render("login.ejs")
 })
 router.get('/success',(req,res)=>{
     res.render("success.ejs")
 })
 router.get('/sell',(req,res)=>{

    res.render("sell.ejs",{db:"not"})
})

router.post('/',(req,res)=>{
    const userdata={
        user:req.body.name,
        email:req.body.email,
        city:req.body.city,
        phonenumber:req.body.phnnumber

    }
    User.push(userdata)
   // console.log(User)
   const info={
       user:req.body.name,
       email:req.body.email

   }

    res.render("indexnew.ejs",{db:info})
})
 


 
router.get('/about',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../public', 'about.html'))
})
router.get('/getpayload',(req,res)=>{
    const email=req.query.email;
    

    const indx=User.findIndex(x=> {
      
        return x.email==email})
    if(indx!=-1)
   {
  //  console.log(" found",req.query)
     res.json({
        email:User[indx].email,
        user:User[indx].user,
        found:true
    })
    }
    else
    {
       // console.log("not found")
        res.json({
            found:false
        })
    }
})
router.get('/getpayload-contact',(req,res)=>{
    const email=req.query.email;
    

    const indx=User.findIndex(x=> {
       
        return x.email==email})
    if(indx!=-1)
   {
   // console.log(" found",req.query)
     res.json({
     ... User[indx],

        found:true
    })
    }
    else
    {
       // console.log("not found")
        res.json({
            found:false
        })
    }
})
module.exports=router