'use strict'

class ApiModel {
    constructor(id,title,description,toUSD,image_url){
        this.id=id,
        this.title=title,
        this.description=description,
        this.toUSD=toUSD,
        this.image_url=image_url
    }
}

module.exports={ApiModel}