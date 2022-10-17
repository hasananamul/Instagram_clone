import mongoose from "mongoose";
import userModel from "./userModel.js";

//User schema
const verifySchema = mongoose.Schema({
      verifyId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : userModel ,
            required : true,
      },
      token : {
            type : "String",
            require : true
      }
},{timestamps : true})



export default mongoose.model("VerifyUser", verifySchema)