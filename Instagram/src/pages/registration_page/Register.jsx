import React from 'react'
import AuthFotter from '../../components/AuthFotter/AuthFotter'
import {RiFacebookBoxFill} from "react-icons/ri"
import {Link} from "react-router-dom"
import "../login_page/Login.scss"
import "./Register.scss"
import {useState} from 'react'
import swal from "sweetalert"
import axios from "axios"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {tosterError} from '../../utility/Toster'

const Register = () => {
  const [validEmail, setValidEmail] = useState(true)
  const [validPass, setValidPass] = useState(true)

  const [register, setRegister] = useState({
    email: "",
    name : '',
    userName : '',
    password : ''
  })
  const { email, name, userName, password} = register
  console.log(register);

  const passsPattern = /^[a-zA-Z0-9a-zA-Z0-9!@\-#$%^&*_]{8,}$/;
  // const emailPattern = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.$/;
  const emailPattern = /^[a-z0-9_.]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;
  const numberPattern = /^[0-9]{6,}$/;

  //Email test
  const emailTest = emailPattern.test(email)
  const numberTest = numberPattern.test(email)



  //Blur email feilcds
  // const blurEmail = () => {
  //     if(emailPattern.test(email)){
  //       setValidEmail(true)
  //     }else{
  //       setValidEmail(false)
  //     }
  // }

  //Blur password feild
  // const blurPassword = () => {
  //     if(passsPattern.test(password)){
  //       setValidPass(true)
  //     }else{
  //       setValidPass(false)
  //     }
  // }
  
  //Handle register form
  const handleRegister = (e) => {
    
    if(e.target.name === "email" || e.target.name === "cell"){
      if(emailTest){
        // setRegister( (prev) => ({...prev, email : e.target.value}))
        e.target.setAttribute("name", "email")
        setValidEmail(true)
      }
      else if(numberTest){
        // setRegister( (prev) => ({...prev, email : e.target.value}))
        e.target.setAttribute("name", "cell")
        setValidEmail(true)
      }
      else{
        setValidEmail(false)
      }
      setRegister( (prev) => ({...prev, email : e.target.value}))
    }  
    if(e.target.name === "name"){
      setRegister({...register, name : e.target.value})
    }
    if(e.target.name === "userName"){
      setRegister({...register, userName : e.target.value})
    }
    if(e.target.name === "password"){
      setRegister({...register,password : e.target.value})
      if(passsPattern.test(password)){
        setValidPass(true)
      }else{
        setValidPass(false)
      }
    }
    // setRegister( (prev) => ({...prev, [e.target.name ]: e.target.value}))
  }

  //Handle submit registration form
  const handleRegistartionSubmit = async (e) => {
  e.preventDefault()
    
  try {
    if (!email || !name || !userName || !password || !validEmail || !validPass)   {
      // swal("wow....!","All field are required !","error",{button : "Close"})
      tosterError("All fiels are required!")
    } else {
      await axios.post("/user/register",register)
      .then(res => {
        setRegister((prev) => ({
          email: '',
          name : '',
          userName : '',
          password : ''
        }))
      }
        )
        .then(swal("Success", ` Hi ${name} please check your email and verify your account`, "success"))
    }
  } catch (error) {
    console.log(error)
    tosterError("Something went wrong !")
    }
  }
  

    return (
    <>
        <div className="login_container">
          <ToastContainer  position = "top-center" />
         <div className="login_row">
             <div className="login_colm">
                <div className="right_colm">
                    <div className="box_top">
                      <div className="login_box">
                      <div className="login_logo">
                        <Link to={"/no-login"}><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram_logo" /></Link>
                      </div>
                      <div className="regster_text">
                        <p>Sign up to see photos and videos from your friends.</p>
                      </div>
                   <div className="facebook_login">
                        <a className='input_field_btn' href="6"><i> <RiFacebookBoxFill /> </i> Login with Facebook</a>
                   <div className="divider"> OR </div>
                   </div>
                      <div className="login_form">
                        <form action="/user/register" enctype="multipart/form-data" method='post' onSubmit={handleRegistartionSubmit}>
                          {!validEmail && <p className='text-danger mb-2 text-start'> Please input a valid email</p>}
                              <input name='email' value={email} onChange={handleRegister} type="text" className="input_field" placeholder='Mobile number or email' />
                              <input name='name' value={name} onChange={handleRegister} type="text" className="input_field" placeholder='Full name' />
                              <input name='userName' value={userName} onChange={handleRegister} type="text" className="input_field" placeholder='Username' />
                              {!validPass && <p className='text-danger mb-2 text-start'> Please use strong password !</p>}
                              <input name='password' value={register.password}  onChange={handleRegister} type="password" className="input_field" placeholder='Password' />

                              {/* <input type="file" name="photo" id="photo" /> */}
                        <div className="register_text_bottom">
                        <p className='top_text'>People who use our service may have uploaded your contact information to Instagram.
                          <Link to={"#"}> Learn More </Link>
                        </p>
                        <p className='bottom_text'>
                          By signing up, you agree to our Terms , <Link to={"#"}> Privacy Policy and Cookies Policy .</Link>
                        </p>
                      </div>
                      <div className="signup_button">
                        <button type="submit" className="input_field_btn"> Sign up </button>
                      </div>
                      </form>
                      </div>
                      </div>
                    </div>
                    <div className="singup_box register_singup">
                        <p> Don't have an account? <Link to={"/login"}> Login </Link> </p>
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

export default Register