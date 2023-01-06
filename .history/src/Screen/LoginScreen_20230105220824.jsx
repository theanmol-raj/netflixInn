import React, { useState } from 'react'

function LoginScreen({Cred ,SCred ,handle}) {


  const [signup ,setSignUp] = useState(true) ;


  function handleChange(e){
    const {name ,value} = e.target ;
    SCred(prev => ({...prev , [name] : value}))

  }



  return (
    <div className='flex flex-col bg-black h-screen bg-[url("https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-netflixa--default--1280.jpg")] opacity-80 bg-cover bg-no-repeat bg-center  '>
        <img className='h-28 w-48' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"/>
        
       <div className='bg-black/80 h-auto mt-10 w-[28rem] mx-auto px-12 py-12 space-y-8 rounded-lg'>
         <p className='text-white font-bold text-2xl'>{signup ? "Sign Up" : "Sign In"}</p>
         <input onChange={handleChange} name='email' value={Cred.email}  placeholder='Email or Phone Number' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
         <input onChange={handleChange} name='pass' value={Cred.pass} type="password"  placeholder='Password' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
          <div className='flex flex-col space-y-2 text-gray-600'>
            <button onClick={()=>{signup ? handle.createUser() : handle.loginUser() }}  className='text-white bg-red-600 px-4 py-3 rounded-md w-[22rem] font-bold'>{signup ? "Sign Up" : "Sign In"}</button>
            <div className='flex justify-between text-xs text-slate-300'>
                <p>Remember Me </p>
                <p>Need Help</p>
            </div>
            </div>
             {/* downside */}
             <div className='text-slate-500 space-y-2 pt-4 font-semibold'>
                <p >{!signup ? "New to Netflix " : "Already have an Account "} ?<button onClick={()=> setSignUp(!signup)} className=' text-white pl-1 hover:underline cursor-pointer'>{!signup ? " Sign Up" : " Sign In"} Now</button></p>
                <p>This page is protected by Google <br/>reCaptche to ensure you are not a bot.<br/><span className='text-blue-800'>Learn More</span></p>
             </div>
       </div>
    </div>
  )
}

export default LoginScreen