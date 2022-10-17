import jwt from "jsonwebtoken"

//Create Json web token
export const createToken = (data, expire = '5m') => {
      return jwt.sign(data, process.env.TOKEN,{expiresIn : expire})
}