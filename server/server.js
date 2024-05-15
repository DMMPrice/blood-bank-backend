const express=require('express');
const app=express();
const connectDatabase= require('./config/dbconfig');

// Importing the connectDatabase function from the dbconfig.js file
connectDatabase();
env=require('dotenv').config();
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
