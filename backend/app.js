const express = require('express');
require('./mangoDB/connectDB');
const router = require('./router/router');
const app = new express();
const portNo = 4000; 
require('dotenv').config();

const connectDB = require('./mangoDB/connectDB');
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/v1/tasks',router)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(portNo,console.log(`Server Listening to the port ${portNo}...`))
    }catch(err){
        console.log(err);
    }
}

start();










