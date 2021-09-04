const express=require('express')
const app=express()
const expresslayouts=require('express-ejs-layouts')
const indexRouter=require('./routes/router')
const bodyParser=require('body-parser')


const publicpath=__dirname+"/public"
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
//app.set('layout','layouts/layout')
//app.use(expresslayouts)
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:false}))

app.use('/',indexRouter)

app.listen(process.env.PORT || 3000)
module.exports=publicpath