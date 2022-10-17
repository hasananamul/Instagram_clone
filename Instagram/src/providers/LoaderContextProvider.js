import {useReducer} from "react";
import LoaderContext from "../context/LoaderContext"
import LoadReducer from "../reduchers/LoadReducer";


// Initial state 
const INITIAL_STATE = 0;

//LoaderContextProvider
const LoaderContextProvider = ({children}) => {

      const [loaderState, loaderDispatch] = useReducer(LoadReducer, INITIAL_STATE)
      return <LoaderContext.Provider
      value={
                  { 
                        loaderState,
                        loaderDispatch 
                  } 
            }
            >
            {children}
             </LoaderContext.Provider>
}

//Export default 
export default LoaderContextProvider;