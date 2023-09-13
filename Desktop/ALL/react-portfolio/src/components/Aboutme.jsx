import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Element } from 'react-scroll';
import {BiLogoFacebook, BiLogoLinkedinSquare, BiLogoGmail, BiLogoGithub, BiLogoInstagram} from 'react-icons/bi'


const Aboutme = () => {
  const form = useRef();
  
  const initialFormData = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const [formData,setFormData] = useState(initialFormData);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };
  
  const handleSendClick = () => {
    // Your logic to send the form data goes here
  
    // Clear the form data by resetting it to its initial values
    setFormData(initialFormData);
  };






const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ird4lbl', 'template_q6qnpck', form.current, 'weHc-0ujQM398_06g')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <Element  id="aboutMe" name='aboutMe' className=''>
  <div className='mx-5 my-16 lg:mx-24'>

    {/* Use grid for layout */}
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>

      {/* Left Column - Contact Form */}
      <div className='rounded-lg shadow-md shadow-[#FFA500] bg-gradient-to-t from-[#111827] via-slate-600 to-gray-600 text-white p-4 lg:p-6'>

        <form ref={form} onSubmit={sendEmail} className='grid gap-2 my-5'>
          <label>Name</label>
          <input
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            name="user_name"
            className='text-black'
            required
          />
          <label>Email</label>
          <input
            value={formData.name}
            onChange={handleInputChange}
            type="email"
            name="user_email"
            className='text-black'
            required
          />
          <label>Message</label>

          <textarea
            value={formData.name}
            onChange={handleInputChange}
            name="message"
            rows="8"
            cols="40"
            className="w-full p-2 text-sm text-black border"
          >
          </textarea>
          <input
            onClick={handleSendClick}
            type="submit"
            value="Send"
            className='bg-transparent hover:bg-gradient-to-r from-blue-500 to-[#93C5FD] text-white font-semibold hover:text-[#FFA500] py-2 px-4 border
             border-blue-500 hover:border-transparent whitespace-nowrap rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear my-2 '
          />
        </form>
      </div>

      {/* Right Column - About Me */}
      <div name="section2" className='text-white'>

        {/* About Me content */}
        {/* <div className='my-4 bg-gradient-to-b from-[#111827] via-slate-600 to-gray-800 pb-2 border border-t-0 border-r-0 border-l-0 duration-300 hover:scale-105 hover:rounded-xl shadow-md shadow-[#FFA500]'>
          <h1 className='text-xl text-center uppercase text-[#FFA500] font-bold'>About me</h1>
          <p className='mx-4'>
            Hello! I'm Gio, a passionate Computer Engineer. With a strong background in technology and a commitment to lifelong learning, I've achieved significant milestones in both my academic and professional journey.
          </p>
        </div> */}

        {/* Achievements content */}
        <div className='my-4 bg-gradient-to-b from-[#111827] via-slate-600 to-gray-800 pb-2 border border-t-0 border-r-0 border-l-0 duration-300 hover:scale-105 hover:rounded-xl shadow-md shadow-[#FFA500]'>
          <h1 className='text-xl text-center uppercase  text-[#FFA500]  font-bold'>Achievements</h1>
          <p className='mx-4'>
            During my undergraduate studies, I was part of a team that received the prestigious title of "2nd Runner-Up for Best Thesis," highlighting our innovative and impactful research. I also passed the Civil Service Exam (Professional Level) while in my last year of college. I had enrolled in various online free courses and gained certificates about programming.
          </p>
        </div>

        {/* Passion for Programming content */}
        <div className='my-4 bg-gradient-to-b from-[#111827] via-slate-600 to-gray-800 pb-2 border border-t-0 border-r-0 border-l-0 duration-300 hover:scale-105 hover:rounded-xl shadow-md shadow-[#FFA500]'>
          <h1 className='text-xl text-center uppercase  text-[#FFA500] font-bold'>Passion for Programming</h1>
          <p className='mx-4'>
            My love for coding and programming is at the core of my identity. I've always been fascinated by the endless possibilities technology offers, and I've eagerly embraced it. In pursuit of excellence, I've enrolled in various free online programming courses, constantly expanding my skill set and staying up-to-date with the latest trends and technologies.
          </p>
        </div>

        {/* Beyond Graduation content */}
        <div className='my-4 bg-gradient-to-b from-[#111827] via-slate-600 to-gray-800 pb-2 border border-t-0 border-r-0 border-l-0 duration-300 hover:scale-105 hover:rounded-xl shadow-md shadow-[#FFA500]'>
          <h1 className='text-xl text-center uppercase  text-[#FFA500] font-bold'>Beyond Graduation</h1>
          <p className='mx-4'>
             I'm excited to apply my knowledge and skills to real-world challenges. I'm eager to embark on a fulfilling career where I can contribute to the ever-evolving world of technology. Whether it's software development, system design, or any other aspect of computer engineering, I'm ready to make a meaningful impact.

            I'm always open to new opportunities, collaborations, and connections. If you share my passion for technology or have a project in mind, please don't hesitate to reach out. Let's connect and explore the incredible possibilities that lie ahead.

            Thank you for visiting my "About Me" page. I look forward to crossing paths with fellow tech enthusiasts and innovators on this exciting journey.
          </p>
        </div>

      </div>

      {/* Social Media Links */}
      {/* <div className='flex flex-row rounded-md text-white col-span-1 shadow-md shadow-[#FFA500] my-10 p-0 
      lg:p-6 bg-gradient-to-b from-[#111827] via-slate-700 to-gray-500'>

        <div className='flex items-center justify-center gap-2 flex-wrap lg:gap-10 p-2 mx-4 '>
          <div><h1>Links: </h1></div>
          <a href='https://www.facebook.com/GioooSicat' target='_blank' rel='noopener noreferrer'>
            <BiLogoFacebook size={30} className='bg-[#3b5998] rounded-md hover:scale-105' />
          </a>
          <a href='https://www.instagram.com/gi_sct/' target='_blank' rel='noopener noreferrer'>
            <BiLogoInstagram size={30} className='text-white rounded-md bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-105' />
          </a>
          <a href='https://www.linkedin.com/in/gsicat14/' target='_blank' rel='noopener noreferrer'>
            <BiLogoLinkedinSquare size={30} className='text-[#0072b1] bg-white rounded-lg hover:scale-105' />
          </a>
          <a href='mailto:cpe.sicatgio14@gmail.com' target='_blank' rel='noopener noreferrer'>
            <BiLogoGmail size={30} className='text-red-500 hover:scale-105' />
          </a>
          <a href='https://github.com/helpme14' target='_blank' rel='noopener noreferrer' className='hover:scale-105'>
            <BiLogoGithub size={30} />
          </a>
        </div>

      </div> */}
    </div>
  </div>

    </Element>
  )
}

export default Aboutme