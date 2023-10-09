import React from 'react'
import "./Signup.css"
import { Outlet, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

  return (
    <div className='signup'>
<div className='signup-left'>
<img src='./assets/log.png' alt='none'/>
</div>
<div className='signup-right'>
<img src='./assets/mainLogo.svg' alt='none'/>
<div className='sub1-signup-right'>
<div className='subsub1-sub1-signup-right'>
<p>SignUp</p>
<div className='sub1-subsub1-sub1-signup-right'>
  <img src='./assets/logUser.svg' alt='none' />
<input placeholder='First Name' type='email'/>
</div>
<div className='sub2-subsub1-sub1-signup-right'>
  <img src='./assets/logUser.svg' alt='none' />
<input placeholder='Username' type='email'/>
<input type='checkbox' />
</div>
<div className='sub3-subsub1-sub1-signup-right'>
  <img src='./assets/logmail.svg' alt='none' />
<input placeholder='Email' type='email'/>
</div>



<div className='sub4-subsub1-sub1-signup-right'>
  <img src='./assets/logLock.svg' alt='none'/>
<input placeholder='Password' type='password'/>
</div>
<div className='sub5-subsub1-sub1-signup-right'>
  <img src='./assets/logLock.svg' alt='none'/>
<input placeholder='Confirm Password' type='password'/>
</div>
<button>SignUp</button>
<span onClick={()=>{navigate("/")}}>Already have account! <p style={{textDecoration:"underLine",fontSize:"2rem",display:"inline"}}>Login</p></span></div>
<div className='subsub2-sub1-signup-right'>
<a href='https://www.google.com' target='_blank'><img src='./assets/Google.svg' alt='none' style={{width:"12.6rem",height:"4.4rem"}}/></a>
<a href='https://www.facebook.com' target='_blank'><img src='./assets/Facebook.svg' alt='none' style={{width:"12.6rem",height:"4.4rem",marginLeft:"1rem"}}/></a>
</div>
</div>
</div>
    </div>
  )
}

export default Signup