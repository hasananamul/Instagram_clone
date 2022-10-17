//Create reducer 
const AuthReducer = (state, {type, payload}) => {
      switch (type) {
            case 'USER_LOGIN_SUCCESS':
                  return {
                        isUserLogin : true,
                        user : payload
                  }

                  case 'USER_LOGOUT':
                  return {
                        isUserLogin : false,
                        user : payload,
                  }
                  
            default: 
            return state;
      }
}

//Export reducers 
export default AuthReducer;