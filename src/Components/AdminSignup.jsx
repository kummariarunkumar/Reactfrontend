import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/email.png'


const AdminSignup = () => {

    const[action,setAction]=useState("Admin Signup");
 
  return (
   

  
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
    <div className='inputs'>
        {action=='Login'?<div> </div>: <div className='input'>
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
        </div>}
        
        <div className='inputs'>
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email id'/>
        </div>
    </div>
    <div className='inputs'>
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
        </div>
    </div>
    </div>
    {action=="Admin Signup"?<div></div>:    <div className="forgot-password">Lost Password? <span>Click here</span></div>
 }
    <div className='submit-container'>
        <div className={action=="Admin Login"?"submit gray":"submit"} onClick={()=>{setAction("Admin Signup")}}>Signup</div>
        <div className={action=='Admin Signup'?"submit gray":"submit"} onClick={()=>{setAction("Admin Login")}}>Login</div>
    </div>
    </div>

  )
}

export default AdminSignup
