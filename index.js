const express= require('express')
const app = express()
const cors = require('cors')
const port =process.env.port || 5000

const chefs=require('./chefs.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.listen(port,()=>{

    console.log(`chef api is runing port : ${port}`)
})