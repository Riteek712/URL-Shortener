const express = require('express')
const { connectToMongoDB } = require('./connect')
const path = require('path')
const urlRoute = require('./routes/url')
const analyticsRoute = require('./routes/analytics')

const app = express()
const port = 8001
connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=>{console.log('MongoDB connection Successfull')})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(express.json())

app.use("/url", urlRoute)
app.use("/analytics", analyticsRoute)

app.get('/test', async (req,res)=>{
    return res.render('home')
})








app.listen(port, ()=> console.log(`Server started at port: ${port}`))