const express = require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
    dbName:"text-to-image"
})
.then(()=>{console.log("connected to db");})
.catch(()=>{console.log('error connecting to db');})


//cors
const cors = require('cors');
app.use(cors());
//router
const dallerouter = require('./router/dallerouter')
const postrouter = require('./router/postrouter');
app.use("/api/v1/dalle",dallerouter);
app.use("/api/v1/post",postrouter);




app.listen(process.env.PORT,()=>{
    console.log('server running ');
})