import React, {useState,useEffect} from 'react';
import {Link } from 'react-scroll'
function Hamburger({initialValue}) {
  //burger logic
const [isChecked, setIsChecked] = useState(initialValue);
const [activeIcon, setActiveIcon] = useState(0);


const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
};
useEffect(() => {
    // console.log(isChecked); // This will log the value whenever it changes
  }, [isChecked]);
//burger logic
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
  return (
    <div className=''>


    <div  onClick={()=> setIsChecked(isChecked)} className={`relative z-[999]  ${ isChecked ? "text-gray-900":"text-gray-100" } text-md md:hidden m-5`}>
      <label className="hamburger ">
        <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}/> 
       
      
        <svg viewBox="0 0 32 32" >
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
      

   
      <div className={`absolute w-2/3 h-screen bg-gradient-to-b from-[#111827] via-slate-600 to-gray-800 top-0 left-0 duration-200   
      shadow-md shadow-black   md:hidden  ${isChecked ? "left-0":"left-[-100%]"} ` }>
        <ul className='flex gap-10 justify-center flex-col px-7 py-2  text-3xl uppercase  h-full text-right'>
          {navLinks.map((descData,index)=>(   
             <Link key={index} to={descData.ids} className='rounded-[50px]' spy={true} smooth={true} offset={-100} duration={700}>
            <li key={index} onClick={() => handleIconClick(index)} className=' hover:text-[#FFA500] relative px-2 py-1 border-b-2 hover:border-[#FFA500]'>{descData.desc}</li>
            </Link> 
          ))}
        </ul>
        
      </div>
      {/* Blur effect */}
    <div className={`fixed right-0 top-0 h-full bg-blur backdrop-blur-xl transition-all  ${isChecked ? 'opacity-80' : 'hidden opacity-0 pointer-events-none'}`} 
    style={{ width: 'calc(100vw - 2/3 * 100vw)' }}>
      
    </div>
  
      
    </div>
  );
}

export default Hamburger;
