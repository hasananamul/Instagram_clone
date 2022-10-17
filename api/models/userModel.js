import mongoose from "mongoose";

//User schema
const userSchema = mongoose.Schema({
      name : {
            type : String,
            required : true,
            trim : true
      },
      cell : {
            type : String,
            trim : true
            },
      email : {
            type : String,
            trim : true,
            unique : true
      },
      
      age : {
            type : Number,
      },

      gender : {
            type : String,
      },
      userName : {
            type : String,
            required : true,
            trim : true,
            unique : true
      },
      password : {
            type : String,
            required : true,
            trim : true
      },
      photo : {
            type : String,
            trim : true
      },
      isAdmin : {
            type : Boolean,
            default : false
      },
      isVerify : {
            type : Boolean,
            default : false
      },
      status : {
            type : Boolean,
            default : true
      },
      trash :{
            type : Boolean,
            default : false
      }
},{timestamps : true})



export default mongoose.model("User", userSchema)