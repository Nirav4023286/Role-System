var mongoose=require('mongoose');
var roleSchema=new mongoose.Schema({
Role:{
  type:String
},
Status:{
  type:String
},
Permission:{
  type:String
}
});

module.exports=mongoose.model('roleDetail',roleSchema);