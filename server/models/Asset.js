
const mongoose=require('mongoose')
const AssetSchema=new mongoose.Schema({
    Assetname:String,
    purchaseDate:Date,
    serial_No:String,
    status:{type:String,enum:["availbale","assigned","inrepair","retired"],default:"available"},
    assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:"Employee",default:null},
   

})
const AssetModel=mongoose.model("Asset",AssetSchemaeSchema)
module.exports=AssetModel