'use strict'
const mongoose=require('mongoose');


let watchSchema=new mongoose.Schema({

    id:String,
    title:String,
    description:String,
    toUSD:String,
    image_url:String


})

const watchModel=mongoose.model('watch',watchSchema);


module.exports={watchModel}