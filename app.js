require('dotenv').config()
const Router = require('./routes/routesToDo')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 7000
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors());
// app.use(Router)
app.use("/getall",Router)

//db connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`);
    })
}).catch((err)=>console.log(err))


