import React from 'react'

import { Element } from 'react-scroll';

const Certificates = () => {
    const portfolios = [
      {
        id: 1,
        src: '2ndrunnerbestthesis.png',
        desc: '2nd Runner up Best Thesis : Community Based Project',
      },
      {
        id: 2,
        src: 'CSEprof.png',
        desc: 'Civil Service Eligible (Professional Level)',
      },
      {
        id: 3,
        src: 'dataAnalProf.png',
        desc: 'Google Data Analytics (Professional Cert)',
      },
      {
        id: 4,
        src: 'googlemarketing.png',
        desc: 'Fundamentals of Digital Marketing',
      },
      {
        id: 5,
        src: 'htmlcss.jpg',
        desc: 'HTML And CSS',
      },
      {
        id: 6,
        src: 'solidfoundhtmlcss.jpg',
        desc: 'Foundational HTML and CSS',
      },
      {
        id: 7,
        src: 'webdesign.jpeg',
        desc: 'Web Design',
      },
      {
        id: 8,
        src: 'programmingFundpythong.jpg',
        desc: 'Programming: Fundamentals of Python Programming',
      },
      {
        id: 9,
        src: 'cybersec.png',
        desc: 'Intro to Cyber Security Webinar',
      },
      {
        id: 10,
        src: 'codecamp.jpg',
        desc: 'Responsive Web (CodeCamp)',
      },
      
    ]
  
  
  return (
    <Element  name='cert'>
    <div  name="portfolio"  className=' w-full text-white bg-gradient-to-b from-[#111827] via-black to-gray-700'>
      <div className='flex flex-col justify-center w-full max-w-screen-xl p-4 mx-auto'>
        <div className='pb-8 text-center font-kanit'> 
          <p id="cert" className='inline text-4xl font-bold border-b-4 border-[#FFA500] uppercase md:ml-24 sm:ml-0'>Certificates</p>
        </div>
        
        <div className='grid gap-6 px-4 sm:px-6 md:px-8 lg:px-20  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          
          {portfolios.map(({ id, src, desc }) => (
            <div key={id} className='rounded-lg shadow-md shadow-[#FFA500]'>
              <img src={src} alt='' className='w-full h-[250px] object-cover duration-200 rounded-md hover:scale-105' />
              <div className='text-center'>
                <p className='uppercase font-kanit pt-2 mb-0'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
   
  );
}


export default Certificates