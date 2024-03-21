import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignup=()=>{
        setIsSignInForm(!isSignInForm);

    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg'/>
        </div>
        <form className='w-3/12 h-[400px] rounded-md absolute p-10 mx-auto my-36 right-0 left-0 bg-black text-white bg-opacity-80'>
            <h1 className='text-white p-4 font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input type='text' placeholder='Email Address' className='bg-black w-full border border-white border-solid  m-2 p-2'/>
            <input type='text' placeholder='Password' className='bg-black w-full border border-white border-solid m-2 p-2'/>
            <button className='w-full  rounded-lg p-4 m-4  bg-red-700 text-center font-bold '>Sign In</button>
            <p className='my-4' onClick={toggleSignup}>New to Netflix? Sign up now!</p>

        </form>
        
    </div>
  )
}

export default Login;
