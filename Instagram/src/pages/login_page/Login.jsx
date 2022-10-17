import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import { RiFacebookBoxFill } from "react-icons/ri";
import AuthFotter from '../../components/AuthFotter/AuthFotter';
import "./Login.scss"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import cookie from "js-cookie"
import AuthContext from '../../context/AuthContext';
import LoaderContext from '../../context/LoaderContext';
import {tosterError} from '../../utility/Toster';
import swal from 'sweetalert';

/**
 * Login component function 
 */
const Login = () => {

  //use auth reducer
  const {dispatch} = useContext(AuthContext);
  const {loaderDispatch} = useContext(LoaderContext)

  //React navigate
  const navigate = useNavigate()


  const [ login, setLogin ] = useState({
    auth : '',
    password : ''
  })


  // Handle login
  const loginField = (e) => {
    setLogin((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  //Handle login form
  const handleLoginForm = async (e) => {
    e.preventDefault()
    try {
      if (!login.auth || !login.password ) {
        tosterError("All field are required !")
      } else {
        await axios.post("/user/login",{email : login.auth, password : login.password})
        .then(res => {
          // swal(` Hi ${res.data.user.name}`, "You are login successfully!", "success");
          // cookie.set("user", JSON.stringify(res.data.user))
          if(res.data.user.isVerify){
            cookie.set("token", res.data.token)
            dispatch ({type : "USER_LOGIN_SUCCESS", payload : res.data.user})
          }else{
            // console.log(res.data.user.isVerify)
            swal("Alert !","Please verify your account !","error",{buttons: "Close"})
            cookie.remove("token")
          }
          // console.log(res.data);

          //Loading start
          loaderDispatch({type : "LOAD_START"})
          if(res.data.user.isVerify){
            navigate("/")
          }
        })
      }
    } catch (error) {
      tosterError("Wrong email or password !")
    }
  }

  return (
    <>
      <div className="login_container">
        <ToastContainer position = "top-center"
        autoClose={1000}
        hideProgressBar={true} />
         <div className="login_row">
             <div className="login_colm">
                <div className="right_colm">
                    <div className="box_top">
                      <div className="login_box">
                      <div className="login_logo">
                        <Link to={"/no-login"}><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram_logo" /></Link>
                      </div>
                      <div className="login_form">
                        <form onSubmit={handleLoginForm} action="#">
                              <input value={login.auth} onChange={loginField} name='auth' type="text" className="input_field" placeholder='Phone number, username or email' />
                              <input value={login.password} onChange={loginField} name='password' type="password" className="input_field" placeholder='Password' />
                              <button type="submit" className="input_field_btn"> Login </button>
                        </form>
                        <div className="divider"> OR </div>
                      <div className="facebook_login">
                        <a href="6"><i> <RiFacebookBoxFill /> </i> Login with Facebook</a>
                      </div>
                      <div className="forgot_password">
                        <Link to={"/PasswordReset"}> Forgot password?</Link>
                      </div>
                      </div>
                      </div>
                    </div>
                    <div className="singup_box">
                        <p> Don't have an account? <Link to={"/register"}>Sign Up</Link> </p>
                    </div>
                    <div className="get_apps">
                        <p> Get an apps. </p>
                    </div>
                    <div className="apps_logo">
                        <div className="apple_store"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="Apple store" /></div>
                        <div className="play_store"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="Play store" /></div>
                    </div>
                </div>
             </div>
         </div>
         <div className="fotter">
          <AuthFotter />
         </div>
      </div> 
    </>
  )
}

export default Login