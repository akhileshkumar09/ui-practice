import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../Firebase';

function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () =>{
    setShowPassword((prev)=>!prev)
  }

  const handleSignInWithGoogle = async (e) => {
    e.preventDefault();
    try{
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user;
      console.log(user)
    } catch(err){
      console.log(err);
    } 
  }


  return (
    <div>
        <form action='' className=" ">
            <h2 className="text-4xl  text-white"> Create an account</h2>
            <p className="text-gray-400 mt-3">Already have an account? <a href='#'className="text-purple-400 underline">Login</a></p>
            <div className='flex flex-col gap-4 mt-6'>
            <div className='flex gap-4 md:flex-row flex-col'>
              <input type='text' name='first name' placeholder='First Name' className='rounded bg-purple-200'/>
              <input type='text' name='last name' placeholder='Last Name' className='rounded bg-purple-200'/>   
            </div>
            <input type='email' name='email' placeholder='Email'className='rounded bg-purple-200'/>
            <div className='group relative'>
            <input type={showPassword ? "text" : 'password'} name='password' placeholder='Enter your password' className='rounded bg-purple-200 w-full'/>
            <button className='absolute right-4 top-3 hidden group-hover:block' type='button' onClick={(e)=>togglePasswordVisibility}>{showPassword ? (<FaEye/>) : (<FaEyeSlash/>)}</button>
            </div>
            <div className='flex gap-4 '>
            <input type='checkbox' name='checked' className='relative top-1 border-0' />
            <span className='text-gray-400'>I agree to the <span className='text-purple-400 underline'>Terms & Condition</span></span>
            </div>
            </div> 
            <button type='submi' className="text-white text-center bg-purple-400 w-full mt-6 rounded py-1 font-bold hover:bg-purple-500">Create account</button>
            <div className='flex items-center gap-2 justify-between text-gray-400 mt-4'>
              <hr className='w-1/3'/> Or register with <hr className='w-1/3'/>
            </div>

            <div className='flex gap-4 md:flex-row flex-col mt-6  '>
            <button className='text-gray-300 border p-1 w-full rounded flex items-center justify-center gap-2 hover:bg-purple-200 hover:text-gray-400' onClick={handleSignInWithGoogle}> <FcGoogle/> <span> Google</span></button>
            <button className='text-gray-300 border p-1 w-full rounded flex items-center justify-center gap-2 hover:bg-purple-200 hover:text-gray-400'> <FaApple/> <span>Apple </span> </button>
            </div>
        </form>
    </div>
  )
}

export default Form