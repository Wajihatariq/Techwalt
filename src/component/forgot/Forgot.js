import React from 'react'
import "./Forgot.css"
import { Outlet, useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();

  return (
    <div className='forgot'>
<div className='forgot-left'>
<img src='./assets/log.png' alt='none'/>
</div>
<div className='forgot-right'>
<img src='./assets/mainLogo.svg' alt='none'/>
<div className='sub1-forgot-right'>
<div className='subsub1-sub1-forgot-right'>
<p>Reset Password</p>
<div className='sub1-subsub1-sub1-forgot-right'>
  <img src='./assets/logUser.svg' alt='none' />
<input placeholder='Username or Email' type='email'/>
</div>
<span>Reset link will be send to your registered Email</span>
<button onClick={()=>{navigate("/")}}>Reset</button>
</div>

</div>
</div>
    </div>
  )
}

export default Forgot