import React,{useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import swal from "sweetalert"


const AccountVerify = () => {
  const param = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.post("/user/accountVerify",param)
  .then(res => {
    swal("Success",`Account verification successful `,"success",{buttons: "Close"})
    navigate("/login")
  })
  .catch(
    swal("Erroir",`Account verification failed ! `,"error",{buttons: "Close"})
    )
  });
  return (
    <>
    <h2 className='text-center'> Account verification failed ! </h2>
    </>
  )
}

export default AccountVerify;