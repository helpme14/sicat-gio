import React from 'react'
import { AiOutlineHome} from 'react-icons/ai'
import {PiCertificate} from 'react-icons/pi'
import {BsCodeSquare} from 'react-icons/bs'
import{LuContact} from 'react-icons/lu'
import {Link } from 'react-scroll'
import { useState, useEffect, useMemo  } from 'react';
import Scrollspy from 'react-scrollspy';


function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(0);

  const icons = useMemo(()=>[
    { icon:<AiOutlineHome size={20} />,ids:'homePage',scrollSpyId:'homePage' },
    { icon: <PiCertificate size={20}/>,ids:'cert',scrollSpyId:'cert' },
    { icon: <BsCodeSquare size={20}/>,ids:'projectsPage' , scrollSpyId:'projectsPage'},
    { icon: <LuContact size={20}/>,ids:'aboutMe', scrollSpyId:'aboutMe' }
  ],
  []);
  

  const handleIconClick = (index) => {
    setActiveIcon(index);
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
    
    <div  className=' flex justify-between items-center h-24  text-white max-w-[1140px] mx-auto px-4  xs:h-[4em] '>        

        <div className='ml-auto'>
             <button className=" bg-transparent hover:bg-gradient-to-r from-blue-500 to-[#93C5FD] text-white font-semibold
              hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  whitespace-nowrap rounded-3xl hover:rounded-xl
             transition-all duration-300 ease-linear">Contact me!</button>
        </div>
    

    
    <div className='fixed left-12 top-[19em] max-h-[500px] h-[280px] w-[45px] backdrop-blur-lg bg-gray-800 bg-opacity-20 rounded-[50px] border border-white 
     hidden md:block z-30'>


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
      
    </div>
    
    <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-20 border-t rounded-[50px] max-h-[80px] h-[40px] w-[245px]  z-50 md:hidden'>
    <div className='flex flex-row justify-center items-center h-full space-x-6 '>

        {icons.map((iconData, index) => (
           <Link key={index} to={iconData.ids} className='rounded-[50px]' spy={true} smooth={true} offset={10} duration={700}>
            <div
                key={index}
                className={`${activeIcon === index ? 'bg-gradient-to-r from-blue-500 to-[#93C5FD] text-white' : ''}
                relative flex items-center justify-center
                hover:bg-gradient-to-r from-blue-500 to-[#93C5FD] p-2 rounded-3xl
                hover:rounded-xl
                transition-all duration-300 ease-linear` } 
                onClick={() => handleIconClick(index)}>
            
                {React.cloneElement(iconData.icon, {
                    color: activeIcon === index ? '#FFA500' : 'white'
                })}
            </div>
            </Link>
        ))}
    </div>
</div>



    
  </div>

  )
}


// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center h-24 text-white max-w-[1040px] mx-auto px-4 '>
            
//             <h1 className='w-full text-4xl  text-[#FFA500] flex items-center font-kanit'><FaLessThan/>GI/O<FaGreaterThan/></h1> 
            
//             <ul className='flex text-[#0f0f0f] hidden '>
//                 <li className="p-4">Home</li>
//                 <li className="p-4">Certificates</li>
//                 <li className="p-4">Projects</li>
//                 <li className="p-4">Contact</li>
//             </ul>

//         <div >
//             <button className=" bg-transparent hover:bg-gradient-to-r from-blue-500 to-[#93C5FD] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  whitespace-nowrap rounded-3xl hover:rounded-xl
//             transition-all duration-300 ease-linear">Hire me!</button>
//         </div>

//         <div className='fixed left-12 top-[15em] max-h-[500px] h-[320px] w-[50px] backdrop-blur-lg bg-gray-100 bg-opacity-20 rounded-[50px]'>

//         <ul className="flex flex-col justify-center items-center h-full space-y-6">
//             <li><SideBarIcon icon={<AiOutlineHome size={20} />} /></li>
//             <li><SideBarIcon icon={<PiCertificate size={20}/>}/></li>
//             <li><SideBarIcon icon={<BsCodeSquare size={20}/>}/></li>
//             <li><SideBarIcon icon={<LuContact size={20}/>}/></li>
//         </ul>
//     </div>
//     </div>
//   )
// }

// export const SideBarIcon = ({icon}) => (
//     <div className="sidebar-icon">
//         {icon}
//     </div>
// )


export default Sidebar