// const mongoose=require('mongoose')



// const UserSchema=new mongoose.Schema({
// name:String,
// email:String,
// phoneno:Number,
// age:Number
// })


// const UserModel=mongoose.model('users',UserSchema)
// module.exports=UserModel

//  const mongoose = require('mongoose');
import mongoose from 'mongoose';
// Define the User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true, 
    },
    email: {
        type: String,
        required: true, 
        unique: true, 
        lowercase: true, 
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'], 
    },
    phoneno: {
        type: String, 
        required: true, 
        match: [/^\d{10}$/, 'Please enter a valid phone number.'], 
    },
    age: {
        type: Number,
        required: true, 
        min: 0, 
        max: 120, 
    },
},);


 const UserModel = mongoose.model('User ', UserSchema);

 export default UserModel
// module.exports = UserModel;