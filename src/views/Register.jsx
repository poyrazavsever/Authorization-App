import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

function Register() {

    const user = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
      if(user.user){
        navigate("/")
      }
    }, [])
    
    return (
      <div>Register</div>
    )
}

export default Register