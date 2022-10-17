import {useContext} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../context/AuthContext";

// Redirect user 
const RedirectUser = ({children}) => {
      const {isUserLogin} = useContext(AuthContext);
      return isUserLogin ? <Navigate to="/" /> : children
       
}

//Export redirect user
export default RedirectUser;


