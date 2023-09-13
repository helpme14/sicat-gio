import React from 'react'
import {BiLogoFacebook, BiLogoLinkedinSquare, BiLogoGmail, BiLogoGithub, BiLogoInstagram} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800  relative">
    <div className="flex flex-col justify-between mx-auto md:flex-row">

    <div className="flex justify-center mb-4 md:w-2/6 md:ml-36 md:mt-5 md:mb-0 ">
        <img src={process.env.PUBLIC_URL +"/logo.png"} alt="Company Logo" className="w-20 h-20 md:w-24 md:h-24 " />
    </div>

    <div className="container flex flex-col   mx-auto md:flex-row items-center">
      <div className="mb-4 w-2/3 md:w-2/6 md:mb-0">
        <h2 className="text-2xl font-semibold">GIO SICAT</h2>
        <p className="mt-1  ">Computer Engineer</p>
        <p>"We can always better our best."</p>

      <div className='flex gap-4 mt-1'>
        <div><h1>Links: </h1></div>

        <a href='https://www.facebook.com/GioooSicat' target='_blank' rel='noopener noreferrer'>
            <BiLogoFacebook size={20} className='bg-[#3b5998] rounded-md hover:scale-105' />
          </a>
          <a href='https://www.instagram.com/gi_sct/' target='_blank' rel='noopener noreferrer'>
            <BiLogoInstagram size={20} className='text-white rounded-md bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-105' />
          </a>
          <a href='https://www.linkedin.com/in/gsicat14/' target='_blank' rel='noopener noreferrer'>
            <BiLogoLinkedinSquare size={20} className='text-[#0072b1] bg-white rounded-lg hover:scale-105' />
          </a>
          <a href='mailto:cpe.sicatgio14@gmail.com' target='_blank' rel='noopener noreferrer'>
            <BiLogoGmail size={20} className='text-red-500 hover:scale-105' />
          </a>
          <a href='https://github.com/helpme14' target='_blank' rel='noopener noreferrer' className='hover:scale-105'>
            <BiLogoGithub size={20} />
          </a>
        </div>


      </div>
   
      <div className="mb-4 md:mb-0 md:w-1/4  w-2/3 ">
        <h3 className="text-xl font-semibold ">Contact</h3>
        <address className="md:py-2">
          <p className=''>Email: <a href="mailto:cpe.sicatgio14@gmail.com">cpe.sicatgio14@gmail.com</a></p>
          <p className=' '>Phone: <a href="tel:+639973715004">09973715004</a></p>
          <p>Address: Bacolor, Pampanga</p>
        </address>
      </div>
     
    </div>
    </div>
  </footer>
  
  )
}

export default Footer