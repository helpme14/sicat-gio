import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import { Element } from 'react-scroll';
import "../App.css"
const Certificates = () => {
    const portfolios = [
      {
        id: 1,
        src: process.env.PUBLIC_URL +'/2ndrunnerbestthesis.png',
        desc: "Our thesis, 'E-Chequer: A Smart Exam Checking Machine Using Image Processing Technique,' blends software and hardware seamlessly. This innovative system offers a user-friendly web interface for teachers to manage scores efficiently. It promises to revolutionize assessment processes, showcasing technology's potential to enhance learning outcomes. We were honored to receive the 2nd runner-up award for Best Thesis in Community Based Projects.",
        title:"Best Thesis in Community Based Projects 2ND RUNNER UP",
      },
      {
        id: 2,
        src: process.env.PUBLIC_URL +'/CSEprof.png',
        desc: '',
        title:"Civil Service Eligible (Professional Level)"
      },
      {
        id: 3,
        src: process.env.PUBLIC_URL +'/dataAnalProf.png',
        desc: '',
        title:"Google Data Analytics (Professional Cert)",
      },
      {
        id: 4,
        src: process.env.PUBLIC_URL +'/googlemarketing.png',
        desc: '',
        title:"Fundamentals of Digital Marketing"
      },
      {
        id: 5,
        src: process.env.PUBLIC_URL +'/htmlcss.jpg',
        desc: '',
        title:"HTML And CSS"
        
      },
      {
        id: 6,
        src: process.env.PUBLIC_URL +'/solidfoundhtmlcss.jpg',
        desc: '',
        title:"Foundational HTML and CSS"
      },
      {
        id: 7,
        src: process.env.PUBLIC_URL +'/webdesign.jpeg',
        desc: '',
        title:"Web Design"
      },
      {
        id: 8,
        src: process.env.PUBLIC_URL +'/programmingFundpythong.jpg',
        desc: '',
        title:"Programming: Fundamentals of Python Programming"
      },
      {
        id: 9,
        src: process.env.PUBLIC_URL +'/cybersec.png',
        desc: '',
        title:"Intro to Cyber Security Webinar"
      },
      {
        id: 10,
        src: process.env.PUBLIC_URL +'/codecamp.jpg',
        desc: '',
        title:"Responsive Web (CodeCamp)"
      },
      
    ]
 

  
  return (
    <Element  name='cert' className='relative'>



    <div className='bg-gradient-to-b from-[#111827]  to-gray-700 lg:p-15 lg:pb-44 md:p-10 sm:p-5 p-3  clip-path-triangle '>
    <Carousel       
    prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/3 left-1 -translate-y-2/3 z-[998]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/3  !right-1 -translate-y-2/3 z-[998]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      className="rounded-xl " 
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 flex left-2/4 z-50  -translate-x-2/4  lg:gap-2 gap-1  ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-['']   ${
                activeIndex === i ? "w-8 bg-orange-500 z-[998] " : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
             
              
            />
          ))}
        </div>
      )}
    >

      {portfolios.map(({id,src,desc,title})=>(
        <div key={id} className='grid lg:grid-cols-2 items-center justify-center lg:p-24 p-6 text-white  gap-2'>
        <div className="absolute inset-0  opacity-20"></div>
        <div className="relative z-10 text-white">
        
          <div className=' col-span-1   flex justify-center'>
            <img
              src= {src}
              alt={id}
              className=" h-[300px] w-[100%] md:w-[500px] sm:w-[400px] xs:w-[300px] xs:h-[200px] lg:h-[400px]  
               lg:w-[100%] max-w-[1000px] flex   items-center justify-center lg:justify-left "/>
          </div>
          </div>

          <div className=' flex flex-col justify-center   md:px-10'>
            <h1 className=' md:text-2xl uppercase mb-4 mt-4 font-bold text-center'>{title}</h1>
            <p className='text-md font-kanit font-light lg:text-xl lg:text-justify mx-8 lg:mx-0 mb-5 text-justify'>{desc}</p>
          </div>
            
        </div>
        ))}

      
    </Carousel>



   
    
    </div>
    
   
      
    </Element>
   
  );
}


export default Certificates