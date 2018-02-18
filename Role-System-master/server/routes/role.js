var express=require('express');
var router=express.Router();
var Role=require('../models/RoleModel1');

router.post('/AddRole',function(req,res){
newRole=new Role();
newRole.Role=req.body.Role,
newRole.Status=req.body.Status,
newRole.Permission=req.body.Permission,
newRole.save().then(function(docs){
  console.log('Data Saved',docs);
},function(err){
  console.log(err);
});
});

router.delete('/Delete/:Role', function(req, res) {
    Role.remove({
        Role: req.params.Role
    }, function(err) {
        if (err) {
            throw err;
        } else {
            res.json({
                success: true
            });
            console.log('Deleted');
        }
    });
});

router.get('/getDetail/:Role',function(req,res){
  Role.find({
    Role: req.params.Role
  },function(err,data) {
    if(err){
      throw err;
    }
    else{
      res.json(data);
    }
  });
});

router.put('/UpdateDetails/:id/:Role',function(req,res){
Role.findByIdAndUpdate({
  _id:req.params.id
},{
$set:{

  Role:req.params.Role,
  Status:req.body.Status,
  Permission:req.body.Permission,
}
},{
    upsert: true
  },
  function(err, docs) {
    if (err)
 console.log(err);
  else {
res.status(200).json(docs);
console.log(docs);
}
});
});
module.exports=router;