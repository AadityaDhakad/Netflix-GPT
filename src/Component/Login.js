import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);

  }
  return (
  <div>
    <Header/>
    <div className='absolute'>
    <img src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg'
    alt='logo'/>

    </div>
    <form className='w-3/12 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className=' font-bold text-3xl py-4'> 
     {isSignInForm ? "Sign In" :" Sign Up"}
      </h1> 

      {!isSignInForm &&(
      <input 
      type='text'
      placeholder='Full Name' 
      className='p-4 my-4 w-full bg-gray-700'
      />)}

      <input 
      type='text'
       placeholder='email address' 
       className='p-4 my-4 W-full bg-gray-700'
       />

      <input 
      type='password'
       placeholder='password' 
       className='p-4 my-4 w-full bg-gray-700'
       />

      <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
      {isSignInForm ? "Sign In" :" Sign Up"}
      </button>

      <p className='py-4 ' onClick={toggleSignInForm}>
        {isSignInForm ?
       " New to Netflix? Sign up Now"
       :"Already registered? Sign In Now "}
       </p>

    </form>
    </div>
  )
}

export default Login
