const bodyParser=require('body-parser');
const path=require('path');
const express=require('express')
const app=express()
const ejs=require('ejs')
const port=process.env.PORT || 3000


//Using Public FOlder to serve Static files
app.use(express.static(__dirname+'/css'))
app.use(express.static(__dirname+'/views'))
app.use(express.static(__dirname+'/images'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});