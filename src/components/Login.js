import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';




const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const email=useRef("");
    const password=useRef("");
    const name=useRef("");

    const handleButtonClick=()=>{
      const nameValue=name.current.value;
      const emailValue = email.current.value; 
    const passwordValue = password.current.value;
      const message=checkValidateData(nameValue,emailValue,passwordValue);
      setErrorMessage(message);
      if(message) return;

      if(!isSignInForm){
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse");
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
    console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
  });
      }
      else{
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)

  });
      }


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
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='bg-black w-full border border-white border-solid  m-2 p-2'/>}

            <input ref={email} type='text' placeholder='Email Address' className='bg-black w-full border border-white border-solid  m-2 p-2'/>
            <input ref={password} type='password' placeholder='Password' className='bg-black w-full border border-white border-solid m-2 p-2'/>
            <p className='text-red-600 font-bold text-lg p-2'>{errorMessage}</p>
            <button className='w-full  rounded-lg p-4 m-4  bg-red-700 text-center font-bold' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='my-4 cursor-pointer' onClick={toggleSignup}>{isSignInForm ? "New to Netflix? Sign up now!" : "Already have an account? Sign In" }</p>

        </form>
        
    </div>
  )
}

export default Login;
