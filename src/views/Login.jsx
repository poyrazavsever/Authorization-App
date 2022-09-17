import React from 'react'
import {useDispatch} from "react-redux"
import { login } from "../stores/auth"
import {useNavigate} from "react-router-dom"

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogin = () => {
    const userData = {
      id:1,
      name:"RecepKedisi",
      token:"123KALŞJSAK21J"
    }

    dispatch(login(userData))
    navigate("/")
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <button className='px-6 py-3 bg-blue-200 transition-all rounded text-lg hover:bg-slate-400' onClick = {handleLogin}>Giriş yap</button>
    </div>
  )
}

export default Login