import {useContext} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../context/AuthContext";

// Create Authenticate User
const AuthenticateUser = ({children}) => {
      const {isUserLogin} = useContext(AuthContext);
      return isUserLogin ? children : <Navigate to = "/login" />
}

//Export authenticate user 
export default AuthenticateUser;