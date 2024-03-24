import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../utils/validate';

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true);

    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{
      console.log(email);
      console.log(password);

    }

    const toggleSignup=()=>{
        setIsSignInForm(!isSignInForm);

    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg'/>
        </div>
        <form onSubmit={(e)=>{ e.preventDefault();}} className='w-3/12  rounded-md absolute p-10 mx-auto my-36 right-0 left-0 bg-black text-white bg-opacity-80'>
            <h1 className='text-white p-4 font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='bg-black w-full border border-white border-solid  m-2 p-2'/>}

            <input ref={email} type='email' placeholder='Email Address' className='bg-black w-full border border-white border-solid  m-2 p-2'/>
            <input ref={password} type='password' placeholder='Password' className='bg-black w-full border border-white border-solid m-2 p-2'/>
            <button className='w-full  rounded-lg p-4 m-4  bg-red-700 text-center font-bold' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='my-4 cursor-pointer' onClick={toggleSignup}>{isSignInForm ? "New to Netflix? Sign up now!" : "Already have an account? Sign In" }</p>

        </form>
        
    </div>
  )
}

export default Login;
