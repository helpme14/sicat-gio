import React from 'react'

import '../index.css';

import { Element } from 'react-scroll';

import { useTypewriter, Cursor } from 'react-simple-typewriter'

const AvatarProf = ({ isChecked }) => {
    const [text1] = useTypewriter({
        words: ['Computer Engineer | Innovator | Problem Solver', ],
        
    }) ;

    const [text2] = useTypewriter({
        words: [' innovation','technology','coding','computers',],
        loop:{},
        delaySpeed:2000,
    });
  return (

    <Element name='homePage'>
    <div id='homePage' className={`flex flex-col text-white justify-center items-center p-6 space-y-4 font-kanit my-14 
    bg-gradient-to-t from-[#111827] via-gray-800 to-[#111827] h-screen   ${isChecked ? 'blur' : ''}`}>
        

    <div className="flex   sm:flex  mt-[6em] sm:mb-[30em]  xs:mb-[15em] md:m-[5em] md:flex md:items-center md:justify-center "> 

        <div name="Sulat" className=" mt-[13em] mb-[4em]  ml-[10em]   xs:text-sm xs:ml-[0] xs:mb-[10em]  sm:m-[0] md:mb-[15em] md:ml-[5em]  z-20">

            <p className="text-left   text-3xl  xs:text-xl uppercase">Hi there,</p>
            <h1 className=' uppercase text-5xl text-left mb-5  xs:text-4xl  '>I'm <span className='font-bold text-[#FFA500] text-6xl  xs:text-6xl '>Gio</span>, passionate about  </h1>
          <span className='text-5xl text-left mb-5  xs:text-4xl uppercase'>{text2}<Cursor/></span>
            
            <div className="text-left text-2xl ">
                <div className='   xs:text-sm mt-12'>
                    <p className='xs:text-xl uppercase text-gray-300'>{text1}<span className='text-gray-100'><Cursor/></span></p>
                    
                </div>
            </div>
        </div>

        <div className=" items-center justify-center w-[400px] hidden lg:flex ">
            <img src={process.env.PUBLIC_URL + '/avat1.png'} alt='avatar' className=' mr-32 max-w-[550px]   hidden lg:flex  z-10 md:w-[400em]'  />

        </div>
    </div>
   
</div></Element>



  
  )
}

export default AvatarProf