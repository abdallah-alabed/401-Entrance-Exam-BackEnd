'use strict'
const {ApiModel} = require('../models/Api.model');
const axios = require('axios');

let handleApi= async (req,res)=>{
    let response= await axios.get('https://watches-world.herokuapp.com/watches-list');
    let Data=response.data;
    res.status(200).json(Data)
}

module.exports={handleApi}