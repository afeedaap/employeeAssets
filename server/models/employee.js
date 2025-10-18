
const mongoose=require('mongoose')
const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String, 
     role:{type:String,enum:["Admin","Employee"],default:"Employee"},  
     assets:[{type:mongoose.Schema.Types.ObjectId,ref:"Asset"}]

})
const EmployeeModel=mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel