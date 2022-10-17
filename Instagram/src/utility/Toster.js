  import {toast} from 'react-toastify';
  
  
  //react toaster for error alert
  export const tosterError = (msg) => {
    return toast.error(msg)
  }


    //react toaster for success alert
  export const tosterSuccess = (msg) => {
    return toast.success(msg)
  }