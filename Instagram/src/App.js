import { Route, Routes} from "react-router-dom";
import Home from "./pages/home_page/Home";
import Login from "./pages/login_page/Login";
import Profile from "./pages/profile_page/Profile";
import Register from "./pages/registration_page/Register";
import "./App.scss"
import UserNotLogin from "./pages/user_no_login/UserNotLogin";
import AuthenticateUser from "./middleware/AuthenticateUser";
import RedirectUser from "./middleware/RedirectUser";
import {useContext, useEffect} from "react";
import cookie from "js-cookie"
import axios from "axios";
import LoadingBar from 'react-top-loading-bar'
import AuthContext from "./context/AuthContext";
import LoaderContext from "./context/LoaderContext";
import swal from "sweetalert";
import AccountVerify from "./pages/accountVerify/AccountVerify";
import PasswordRecover from "./pages/passwordRecover/PasswordRecover";
import PasswordReset from "./pages/recoveryAccount/PasswordReset";


function App() {

    //React navigate

  //Get auth context 
  const {dispatch} = useContext(AuthContext)
  const {loaderState, loaderDispatch} = useContext(LoaderContext)

  //Access token
  const token = cookie.get("token")

  //Authenticate loggedin user 
  useEffect( () => {
      try {
        axios.get("http://localhost:5050/user/me", {
            headers : {
            "Authorization" : ` Bearer ${token}`
            }
        } )
        .then( res => {
          if(res.data.isVerify && token){
            dispatch({type : "USER_LOGIN_SUCCESS", payload : res.data})
          }else{
            swal("Alert !","Please verify your account !","error",{buttons: "Close"})
            cookie.remove("token")
          }
        })
        .catch( res => {
          
        })
      } catch (error) {
        console.log(error);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

  return (
    <>

       <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({ type : "LOAD_STOP" })}
      />
      
      <Routes>
        <Route path = "/" element= { <AuthenticateUser> <Home />  </AuthenticateUser> }/>
        <Route path = "/login" element= { <RedirectUser> <Login />  </RedirectUser> }/>
        <Route path = "/register" element= {<Register />}/>
        <Route path = "/PasswordReset" element= {<PasswordReset />}/>
        <Route path = "/password_recovery/:token" element= {<PasswordRecover />}/>
        <Route path = "/no-login" element= {<RedirectUser><UserNotLogin /></RedirectUser>}/>
        <Route path = "/user/:id/AccountVerify/:token" element= {<AccountVerify/>}/>
        <Route path = "/:id" element= {<Profile />}/>
      </Routes>
    </>
  );
}

export default App;
