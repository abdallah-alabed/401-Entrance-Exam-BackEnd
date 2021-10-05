'use strict'
const {watchModel}=require('../models/Watch.model');


let showDataController= (req,res)=>{
    watchModel.find({}).then(e=>{
        res.json(e)
    })
}

let deleteDataController= async (req,res)=>{
let id=req.params.id;

watchModel.findByIdAndDelete(id, async (error)=>{
    res.status(500).send('error while deleting')
})

let watchList=await watchModel.find({})
res.json(watchList)
}


let updateDataController= async (req,res)=>{
    let id=req.params.id;

    let {myId,title,description,toUSD,image_url}=req.body;
    watchModel.findOne({_id:id}).then(e=>{
        e.id=myId,
        e.title=title,
        e.description=description,
        e.toUSD=toUSD,
        e.image_url=image_url 

        e.save()
    })
    let watchList=await watchModel.find({})
res.json(watchList)
    }

    

    let addDataController= async(req,res)=>{
        let { id, title, description, toUSD, image_url } = req.body;
    
        let newFav= new watchModel({
            id:id,
            title:title,
            description:description,
            toUSD:toUSD,
            image_url:image_url 
        })
        newFav.save();

        let watchList=await watchModel.find({})
        res.json(watchList)
    }


module.exports={
    showDataController,
    deleteDataController,
    updateDataController,
    addDataController
}