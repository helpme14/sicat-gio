import React from 'react'
import { AiOutlineHome} from 'react-icons/ai'
import {PiCertificate} from 'react-icons/pi'
import {BsCodeSquare} from 'react-icons/bs'
import{LuContact} from 'react-icons/lu'
import {Link } from 'react-scroll'
import { useState, useEffect, useMemo  } from 'react';
import Scrollspy from 'react-scrollspy';
import Hamburger from './Burger';
import './Burger.css';



function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(0);

  const icons = useMemo(()=>[
    { icon:<AiOutlineHome size={20} />,ids:'homePage',scrollSpyId:'homePage' },
    { icon: <PiCertificate size={20}/>,ids:'cert',scrollSpyId:'cert' },
    { icon: <BsCodeSquare size={20}/>,ids:'projectsPage' , scrollSpyId:'projectsPage'},
    { icon: <LuContact size={20}/>,ids:'aboutMe', scrollSpyId:'aboutMe' }
  ],
  []);
  
  const navLinks = [
    {
      desc: "Home",
      ids:'homePage'
    },
    {
      desc: "Certificates",
      ids:'cert'
    },
    {
      desc: "Projects",
      ids:'projectsPage'
    },
    {
      desc: "About me",
      ids:'aboutMe'
    },
  ]



  const handleIconClick = (index) => {
    setActiveIcon(index);
    console.log(activeIcon); // Added this line to use activeIcon
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = icons.map((iconData) =>
        document.getElementById(iconData.ids)?.offsetTop
      );
  
      const scrollPosition = window.scrollY + 160; // Adjust this value based on your design
  
      const activeIndex = sectionOffsets.findIndex(
        (offset, index) =>
          offset <= scrollPosition && (sectionOffsets[index + 1] || Infinity) > scrollPosition
      );
  
      setActiveIcon(activeIndex !== -1 ? activeIndex : icons.length - 1);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [icons]);
  
  
  return (
    <header>
    <div  className=' flex fixed justify-between items-center h-24  text-white w-screen  xs:h-[4em] 
     bg-[#111827]  z-[999] border-b-1 border-[#FFA500] md:shadow-md md:shadow-black shadow-md shadow-[#FFA500] '>        
      
        <div className=' hidden md:flex md:ml-[4ch] lg:ml-[8ch] gap-10 items-center'>
        
        <img src={process.env.PUBLIC_URL +"/logo.png"} alt="Company Logo" className="w-10 h-10 md:w-10 md:h-10 flex " />
        <Scrollspy items={icons.map((descData) => descData.ids )}  currentClassName="active" className=" flex flex-col">
       
             
             
             <ul className='flex gap-4'>
              {navLinks.map((descData,index)=>(
                 <Link key={index} to={descData.ids} className='rounded-[50px]' spy={true} smooth={true} offset={-100} duration={700}>

                <li key={index} onClick={() => handleIconClick(index)} className={`${activeIcon === index ? 
                '' : ''} nav-link relative px-2 py-1` } >
                  {descData.desc}
                </li>
                </Link>
                ))}
             </ul>
             </Scrollspy>
        </div>
        <div className="md:hidden ml-6">
            <Hamburger initialValue={false} />

            
        </div>
        
    

    
    {/*<div className='fixed translate-x-[-50%] translate-y-[-50%] left-[5%] top-[50%] max-h-[500px] h-[280px] w-[45px] backdrop-blur-lg bg-gray-800 bg-opacity-20 rounded-[50px] border border-white 
      z-30 hidden'>
hidden md:block 

<Scrollspy items={icons.map((iconData) => iconData.ids)} currentClassName="active" className=" flex flex-col h-full">
      <ul className=" flex flex-col justify-center items-center h-full space-y-6 ">
        {icons.map((iconData, index) => ( 
            
        <Link key={index} to={iconData.ids} className='rounded-[50px]' spy={true} smooth={true} offset={0} duration={700}>
        
          <li  key={index} className={`${activeIcon === index ? 'bg-gradient-to-r from-blue-500 to-[#93C5FD] text-white' : ''}
                                        relative flex items-center justify-center
                                        hover:bg-gradient-to-r from-blue-500 to-[#93C5FD] p-2 rounded-3xl
                                        hover:rounded-xl
                                        transition-all duration-300 ease-linear` } 
                                        onClick={() => handleIconClick(index)}>
  
                {React.cloneElement(iconData.icon, {
                  style: {
                    color: activeIcon === index ? '#FFA500' : 'white',
                  },
                })}
            
            
        
          </li> 
          </Link> 
        
         
          
        ))}
      </ul>
      </Scrollspy>
      
              </div> */}
    
    {/*<div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-20 border-t rounded-[50px] max-h-[80px] h-[55px] w-[245px]  z-50 md:hidden'>
    <div className='flex flex-row justify-center items-center h-full space-x-6 '>

        {icons.map((iconData, index) => (
           <Link key={index} to={iconData.ids} className='rounded-[50px]' spy={true} smooth={true} offset={10} duration={700}>
            <div
                key={index}
                className={`${activeIcon === index ? ' text-white' : ''}
                relative flex items-center justify-center
               
                ` } 
                onClick={() => handleIconClick(index)}>
            
                {React.cloneElement(iconData.icon, {
                    color: activeIcon === index ? '#FFA500' : 'white'
                })}
            </div>
            </Link>
        ))}
    </div>
</div>*/}



    
  </div>
  </header>

  )
}

export default Sidebar