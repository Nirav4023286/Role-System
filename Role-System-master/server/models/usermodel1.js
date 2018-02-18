var mongoose=require('mongoose');
var user1Schema=mongoose.Schema({
Role:String,
Status:Number,
Permission:Number,
});

module.exports=mongoose.model('User1',user1Schema);