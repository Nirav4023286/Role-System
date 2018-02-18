var mongoose=require('mongoose');
var RoleSchema=new mongoose.Schema({
Role:Array,
Status:String,
Permission:Object
});
module.exports=mongoose.model('Role',RoleSchema);
