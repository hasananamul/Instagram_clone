import React, {useState} from 'react'
import AuthFotter from '../../components/AuthFotter/AuthFotter';
import Header from '../../components/Header/Header';
import axios from "axios"
import "../login_page/Login.scss"
import "./PasswordReset.scss"
import {Link} from 'react-router-dom';

const PasswordReset = () => {

      const [msg, setMsg] = useState({
            status : "",
            active : false,
            message : ""
      })

      const [resetValue, setresetValue] = useState("");
      const [btn, setBtn] = useState("dissable");

      const {email} = resetValue

      const onChangeHandeler = (e) => {
            setresetValue(prev => ({...prev, [e.target.name] : e.target.value}))
            
      }

      //Handle key up
      const handleKeyUp = () => {
            if(email){
                  setBtn("success")
            }else if(!email){ 
                  setBtn("dissable")
            }
      }

       //Handle reset all blur
      const handeBlur = () => {
            setMsg({
                  active : false,
            })
      }

      //Handle password recovery 
      const handleRecoveryPassword = async (e) => {
            e.preventDefault()

                  try {
                        await axios.post(`/user/recoveryAccount`,resetValue)
                  .then(res => {
                        setMsg({
                              status : "success",
                              active : true,
                              message : "A verification link sent to your email, plese reset password within 5 munits "
                        })
                        setresetValue({email : ""})
                        setBtn("dissable")
                  })
                  .catch(error =>{
                        setMsg({
                              status : "danger",
                              active : true,
                              message : "Email dosen't found !"
                        })
                        setresetValue({email : ""})
                        setBtn("dissable")
                  })
                  } catch (error) {
                        console.log(error);
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
                        <div className="reset_icon"></div>
                        <div className="reset_title"><h4>Trouble Logging In?</h4></div>
                        <div className="reset_text"><p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p></div>
                        <form onSubmit={handleRecoveryPassword} onBlur={handeBlur}  method="post">
                              <div className="form-group">
                                    {msg.active && <p className={` mb-3 p-1 alert alert-${msg.status}`}> {msg.message} </p>}
                                    <input value={email} onKeyUp={handleKeyUp} onChange={onChangeHandeler} className='form-control' type="text" name="email" id="email" placeholder='Email,Phone or User name' />
                              </div>
                              
                              <div className="form-group mt-3 text-center">
                                    <input className={`btn ${btn} w-100`} type="submit" value="Sent login link" />
                              </div>

                              <div className=" unable_sent_link_text form-group mt-3 text-center">
                                    <Link to={"/"}>Can't reset your password?</Link>
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

export default PasswordReset;