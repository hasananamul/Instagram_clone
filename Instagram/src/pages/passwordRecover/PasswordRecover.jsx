import React, {useContext, useState} from 'react'
// import {useParams} from "react-router-dom"
import AuthFotter from '../../components/AuthFotter/AuthFotter';
import Header from '../../components/Header/Header';
import axios from "axios"
import {Link, useNavigate, useParams} from 'react-router-dom';
import "../recoveryAccount/PasswordReset.scss"
import "./PasswordRecovery.scss"
import AuthContext from '../../context/AuthContext';

const PasswordRecover = () => {

      const {user} =  useContext(AuthContext);
      console.log(user);
      const navigate = useNavigate()
      const {token} = useParams()
      const [msg, setMsg] = useState({
            status : "",
            active : false,
            message : ""
      })

      const [pass, setPass] = useState("");
      const [btn, setBtn] = useState("dissable");
      const {password ,confirmpassword} = pass

      //Password regex pattern
      const passsPattern = /^[a-zA-Z0-9a-zA-Z0-9!@\-#$%^&*_]{8,}$/;
      const password_test = passsPattern.test(pass.password)

      //Handle input password
      const handleInputPass = (e) => {

        if(e.target.name === "password" || e.target.name === "confirmpassword"){
          if(!password_test){
          setMsg({
            active : true,
            message : "Please input a strong password !",
            status : "danger"
          })
        }
        if(password_test){
          setMsg({
            active : false,
            message : "",
            status : ""
          })
        }
        setPass( prev => ({...prev, [e.target.name] : e.target.value}))
        }
        
      }

      //Handle key up
      const handleKeyUp = () => {
            if(password || confirmpassword){
                  setBtn("success")
            }else if(!password || !confirmpassword){ 
                  setBtn("dissable")
            }
      }

      //Blur Handle
      const blurHandle = () => {
            setMsg({
            active : false,
          })
      } 
      //Handle password recovery 
      const handleRecoveryPassword = async (e) => {
            e.preventDefault()
            
            try {
                  if(password !== confirmpassword){
                      setMsg({
                        active : true,
                        message : "Password don't match !",
                        status : "danger"
                      })
                      setBtn("dissable")
                    }else{
                      console.log(token);
                      await axios.post(`/user/recoveryPassword`,{
                        token : token,
                        confirmpassword 
                      })
                  .then(res => {
                       setMsg({
                         status : "success",
                         active : true,
                         message : "Password changed successfully"
                        })
                        setBtn("dissable")
                        setPass({password : "", confirmpassword : ""})
                        setTimeout(() => {navigate("/login")},2000)
                  })
                  .catch(error =>{
                        setPass({password : "", confirmpassword : ""})
                        setMsg({
                          status : "danger",
                          active : true,
                          message : "Invalid token or time out ! Password can't change !"
                        })
                        setBtn("dissable")
                  })
                    }
                  
            } catch (error) {
                  console.log(error)
            }
      }

  return (
    <>
      <Header />
    <div className="login_container recovery_container">
        
         <div className="login_row">
             <div className="login_colm">
                <div className="right_colm">
                    <div className="box_top">
                      <div className="login_box">
                      <div className="login_form">
                        <div className="profile_image">
                          <img src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658218763916%2F1CUPd9TGd.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75" alt="profile_image" />
                        </div>
                        <div className="reset_title">
                            <h4> 
                              <a href='1'>
                                {user.userName}
                              </a>
                            </h4>
                          </div>
                        <form onSubmit={handleRecoveryPassword} onBlur={blurHandle} method="post">
                        <div className="form-group mt-3 text-center">
                              {msg.active && <p className={` mb-3 p-1 alert alert-${msg.status}`}> {msg.message} </p>}
                              <input value={password} onKeyUp={handleKeyUp} onChange={handleInputPass} className='form-control' type="text" name="password" id="password" placeholder='New password' />
                        </div>

                        <div className="form-group mt-3 text-center">
                              <input value={confirmpassword} onKeyUp={handleKeyUp} onChange={handleInputPass}  className='form-control' type="text" name="confirmpassword" id="email" placeholder='Confirm new password' />
                        </div>
                        
                        <div className="form-group mt-3 text-center">
                              <input className={`btn ${btn} w-100`} onKeyUp={handleKeyUp} type="submit" value="Change password" />
                        </div>

                        <div className="form-group mt-3 text-center">
                              <Link to={"/login"}> Skip </Link>
                        </div>
                       </form>
                      </div>
                      </div>
                    </div>
                </div>
             </div>
         </div>
      </div> 
      <AuthFotter />
    </>
  )
}

export default PasswordRecover