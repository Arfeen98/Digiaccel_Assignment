const {model, Schema}= require('mongoose');

const UserSchema=new Schema({
    email:String,
    password:String,
    role:String
})

const UserModel = model ('user',UserSchema);
module.exports=UserModel;