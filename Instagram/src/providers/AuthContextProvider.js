import {useReducer} from "react"
import AuthContext from "../context/AuthContext"
// import cookie from "js-cookie"
import AuthReducer from "../reduchers/AuthReducer"

//Initial state 
const INITIAL_STATE = {
      isUserLogin : false,
      user : {}
}

//authContext provider
const AuthContextProvider = ({children}) => {

      //Use reducer 
      const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

      return <AuthContext.Provider
            value = {
                  {
                    isUserLogin : state.isUserLogin, 
                    user : state.user, 
                    dispatch,
                  }
              }
            >
            {children}
      </AuthContext.Provider>
}

//Export default 
export default AuthContextProvider;