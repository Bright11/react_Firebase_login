import React, { useContext, useState } from 'react'
import './Login.css'
import mylogo from '../navbar/logo/mylogo.jpg'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
const Login = () => {
    const [error, setError] = useState(false)
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate( )
    const handleLogin =(e)=>{
        e.preventDefault()
        //createUserWithEmailAndPassword(auth, email, password)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user)
    //successful login
    dispatch({type:"LOGIN",payload:user})
    navigate('/');

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    setError(true)
    // ..
  });
    }
  return (
    <div className='login'>
        <form className='loginform' onSubmit={handleLogin}>
        <img className='loginlogo' src={mylogo} alt=""/>
        <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
        <input  type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <button className='loginbtn'> Login</button>
        {error && <span className='erroremail'>Wrong email or password</span>}
        </form>
        <p>Dont have an account</p>
        <button className='register'>Register</button>
    </div>
  )
}

export default Login