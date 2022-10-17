//LoadReducer
const LoadReducer = (state, {type, payload}) => {

      switch (type) {
            case "LOAD_START":
                  return 100
                  
            
            case "LOAD_STOP":
                  return 0
      
            default: return state
      }

}

export default LoadReducer;