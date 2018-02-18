var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var validator=require('validator');
var UserSchema=new mongoose.Schema({

Role:{
type:Array
},
Status:{
type:String,
}
});
module.exports=mongoose.model('User',UserSchema);