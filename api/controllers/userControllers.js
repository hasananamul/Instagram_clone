import bcrypt from "bcryptjs"
import User from "../models/userModel.js";
import VerifyUser from "../models/verifyModel.js";
import errorController from "./errorController.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utility/sendEmail.js";
import {json} from "express";
// import {sendSMS} from "../utility/sendSMS.js";
import errorHandeler from "../middleware/errorHandeler.js";
import {createToken} from "../utility/createToken.js";

/**
 * @access public 
 * @route /user
 * @method GET
 */
export const getAllUser = async (req, res, next) => {
      try {
            const users = await User.find()
            users.length === 0 ? next(errorController(404, "This collection has no data")) : res.status(200).json(users)   
      } catch (error) {
            next(error)
      }    
}

/**
 * @access public 
 * @route /User/:id
 * @method GET
 */
export const getSingleUser = async (req, res, next) => {
      try {
            const id = req.params.id;
            const singleData = await User.findById(id);
            !singleData ? next(errorController(404, "Data not found")) : res.status(200).json(singleData);
      } catch (error) {
            next(error)
      }
}

/**
 * @access public 
 * @route /User
 * @method POST
 */
export const createUser = async (req, res, next) => {
      try {
            const salt = await bcrypt.genSalt(10)
            const has_pass = await bcrypt.hash(req.body.password, salt)
            await User.create({...req.body, password : has_pass})
      res.send("User data created successfully")
      } catch (error) {
            next(error)
      }
}

/**
 * @access public 
 * @route /User/id
 * @method PUT/PATCH
 */
export const editUser = async (req, res, next) => {
      try {
            const {id} = req.params;
            const salt = await bcrypt.genSalt(10)
            const has_pass = await bcrypt.hash(req.body.password, salt)
            await User.findByIdAndUpdate(id, {...req.body, password : has_pass}, {new : true})
            res.send("User data update successful")
      } catch (error) {
            next(error)
      }
}

/**
 * @access public 
 * @route /user/id
 * @method DELETE
 */
export const deleteUser = async (req, res, next) => {
      try {
            const id = req.params.id;
            await User.findByIdAndDelete(id)
            res.send("Data deleted successful")
      } catch (error) {
            next(error)
      }
}

/**
 * @access public 
 * @route /User
 * @method POST
 */
export const registerUser = async (req, res, next) => {
      try {
            const salt = await bcrypt.genSalt(10)
            const has_pass = await bcrypt.hash(req.body.password, salt)
            const {email, name, userName} = req.body

            //Number regex pattern
            const numberPattern = /^[0-9]{6,}$/;

            //Email regex pattern
            const emailPattern = /^[a-z0-9_.]{1,}@[a-z0-9]{1,}\.[a-z]{1,}$/;

            //Test value patern value
            const emailTest = emailPattern.test(req.body.email)

            //Test email pattern value
            const numberTest = numberPattern.test(req.body.email)

            let user;

            //  if(numberTest){
            //       let number = req.body.email
            //       user = await User.create({...req.body, cell : number, password : has_pass})
            //       console.log(req.body);
            // }
            if(emailTest){
                  user = await User.create({...req.body, email, password : has_pass})
            }
            if(numberTest){
                  user = await User.create({...req.body, cell : email, password : has_pass})
            }
           
            // console.log(user)

            //Create json web token load token function
            const token = createToken({id : user._id}, "1m")
            await VerifyUser.create({verifyId : user._id, token})
            const verify_link = `http://localhost:3000/user/${user._id}/AccountVerify/${token}`
            await sendEmail(user.email, "Testing Verification link", `Hi ${user.name} please click the linkn to verify your account ! ${verify_link}`)
            // sendSMS()
            res.status(200).send("User data created successfully" + json(user))
      } catch (error) {
            next(error)
      }
}


/**
 * @access public 
 * @route /User
 * @method POST
 */
export const loginUser = async (req, res, next) => {
      try {
            const {email, password} = req.body;
            const validUser = await User.findOne({email});

            if (!validUser) {
                  res.status(401).json({"message" : "User email not found"})
            } 

            // console.log(validUser.password, password);

                  const check_pass = await bcrypt.compare(password, validUser.password)
                  if (!check_pass) {
                  res.status(401).json({"message" : "Wrong password !"})
            } 
            else {
                  const jwt_token = jwt.sign({id : validUser.id, isAdmin : validUser.isAdmin}, process.env.TOKEN)
                  const {password, isAdmin, ...user_info} = validUser._doc;
                  res.cookie("user_access_token", jwt_token).status(200).json({
                        token : jwt_token,
                        user : user_info
                  })                        
            }                  
      } catch (error) {
            next(error)
      }

      
}

/**
 * Authenticate loggedin user 
 * @access public 
 * @route /User/me
 * @method GET 
 */

export const authLoggedInUser = async (req, res, next) => {
            try {
                  const bearer_token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null ;
                  if(!bearer_token){
                        res.status(500).json({ "message" : "Token not found" })
                  }else{
                        //Verify bearer token
                        const verify_user = jwt.verify(bearer_token, process.env.TOKEN)
                        if(!verify_user){
                              res.status(404).json({"message" : "Token not valid !"})
                        }else{
                              const user = await User.findById(verify_user.id)
                              res.status(200).json(user)
                        }
                  }
                  res.send(bearer_token)
            } catch (error) {
                  next(error);
            }
      }


/**
 * Verify user account
 * @access private 
 * @route /User/accountVerify
 * @method POST 
 */
      export const verifyAccount = async (req, res, next ) => {
            try {
                  const {id, token} = req.body;
                  const verify = await VerifyUser.findOne({verifyId : id, token : token})
                  if(!verify){
                        res.status(401).json({"message" : "Verify not successful invalid URL"})
                        next(errorController(401, "Verify not successful invalid URL"));
                  }else{
                        await User.findByIdAndUpdate(id,{
                              isVerify : true
                        })
                        res.status(200).json({"message" : "User account verify successfull"})
                        await verify.remove()
                  }
                  res.status(200).json(verify)
            } catch (error) {
                  next(errorController(401, "Verify not successful"));
            }
      }



/**
 * Recovery user account
 * @access private 
 * @route /User/recovery_account
 * @method POST 
 */

export const recoveryAccount = async (req, res, next) => {
      try {
            const {email} = req.body
            const valid_user = await User.findOne({email})
            if(!valid_user){
                  res.status(404).json({"message" : "User email not fount"})
            }
            if(valid_user){
                  const recovery_token = createToken({ id : valid_user._id})
                  const verify_link = `http://localhost:3000/password_recovery/${recovery_token}`
                  sendEmail(valid_user.email, "Password recovery link" , verify_link )
                  res.status(200).send("Recovery link sent successfully")
            }
            
      } catch (error) {
            next(console.log(error));
      }
}

/**
 * Recovery user account
 * @access private 
 * @route /User/recovery_password
 * @method POST 
 */

export const recoveryPassword = async (req, res, next) => {
      try {
            //Get body value
            const {token, confirmpassword} = req.body

            //Verify token and get id
            const {id} = jwt.verify(token, process.env.TOKEN)

            //Change password
            if(!id) {
                  res.status(402).json({"message" : "Invalid token"})
            }else{
                  const salt = await bcrypt.genSalt(10)
                  const has_password = await bcrypt.hash(confirmpassword, salt)
                  await User.findByIdAndUpdate(id,{
                        password : has_password
                  })
                  res.send(" Password change successfully ")
            }
      } catch (error) {
            next(console.log(error));
      }
}
