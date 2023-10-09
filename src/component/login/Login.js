import React from 'react'
import "./Login.css"
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='login'>
<div className='login-left'>
<img src='./assets/log.png' alt='none'/>
</div>
<div className='login-right'>
<img src='./assets/mainLogo.svg' alt='none'/>
<div className='sub1-login-right'>
<div className='subsub1-sub1-login-right'>
<p>Login</p>
<div className='sub1-subsub1-sub1-login-right'>
  <img src='./assets/logUser.svg' alt='none' />
<input placeholder='Username or Email' type='email'/>
</div>
<div className='sub2-subsub1-sub1-login-right'>
  <img src='./assets/logLock.svg' alt='none'/>
<input placeholder='Password' type='password'/>
</div>
<span onClick={()=>navigate("/Forgot")}>Forgot Password?</span>
<button onClick={()=>navigate("/Dashboard")}>Login</button>
<button onClick={()=>navigate("/Signup")}>SignUp</button>
</div>
<div className='subsub2-sub1-login-right'>
<a href='https://www.google.com' target='_blank'><img src='./assets/Google.svg' alt='none' style={{width:"12.6rem",height:"4.4rem"}}/></a>
<a href='https://www.facebook.com' target='_blank'><img src='./assets/Facebook.svg' alt='none' style={{width:"12.6rem",height:"4.4rem",marginLeft:"1rem"}}/></a>
</div>
</div>
</div>
    </div>
  )
}

export default Login