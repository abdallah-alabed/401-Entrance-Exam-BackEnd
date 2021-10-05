'use strict'
const axios=require('axios');
const express=require('express');
const cors = require('cors');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const mongoose=require('mongoose');
const PORT=process.env.PORT;
const ATLAS=process.env.ATLAS;
const {handleApi}=require('./controllers/Api.controller');
const {
    showDataController,
    deleteDataController,
    updateDataController,
    addDataController
}= require('./controllers/Watch.controller');
mongoose.connect(`${ATLAS}`,{ useNewUrlParser: true,useUnifiedTopology: true})

/// data from API
app.get('/api',handleApi)


/// data from Database
app.get('/watch',showDataController)
app.put('/updateWatch/:id',updateDataController)
app.post('/addWatch',addDataController)
app.delete('/deleteWatch/:id',deleteDataController)


app.listen(PORT,()=>{
    console.log(`at PORT ${PORT}`)
})
