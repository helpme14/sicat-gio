import React, {useState} from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {FaPhp} from 'react-icons/fa'
import {RiBootstrapLine} from 'react-icons/ri'
import {BiLogoFirebase, BiLogoJavascript, BiLogoReact, BiLogoGithub} from 'react-icons/bi'
import { Carousel, IconButton } from "@material-tailwind/react";
import Details from './Details'
import { Element } from 'react-scroll';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import '../App.css';


const Projects = () => {


  const [activeTab, setActiveTab] = useState("reactjs");

  return (

    <Element id="projectsPage" name='projectsPage' className='relative '>
      <div className=' '>
      <section className='my-5 flex flex-col   w-screen '>
        
        {/* <div className="grid w-screen h-full mx-4 sm:grid-rows-1 md:grid-rows-2 lg:grid-rows-3 md:mx-20 lg:mx-24 lg:mt-10 ">


          <div name="section1" className='grid  grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500] rounded-lg'>
            
              <div name="projectDescription 1" className=' text-white  grid grid-cols-1 grid-rows-2 lg:grid-rows-4 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700 '>

                  <div className='grid row-span-3 '>
                    <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>E-Chequer Website </h1>
                      <p className='mx-10 text-sm lg:text-xl'>The E-Chequer Website, a cornerstone of our thesis project, empowers educators with key features. 
                                                It enables seamless access to student scores, facilitates answer sheet generation, and sets answer keys 
                                                for automation. Furthermore, it streamlines score report creation through Excel exports, 
                                                enhancing student data management for teachers.
                      </p>
                  </div>

                  <div className='flex items-center row-span-1 mx-10 my-auto '>
                      <h3 className=''>Stack used: </h3>
                      <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26] ' />
                      <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                      <FaPhp  size='35' className='mx-1 text-[#8993be]'/>
                      <RiBootstrapLine  size='30' className='mx-1 text-[#563d7c]'/>
                      <BiLogoFirebase  size='30' className='mx-1 text-[#FFA611]'/>
                      <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>
                  </div>
              </div>

              <div className='flex justify-center  bg-slate-800'>
                  <div className='flex items-center max-w-lg '>
                    <Carousel>
                    {slide1.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl'/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>




          <div name="section2" className=' grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500]  rounded-lg'>
              <div name="projectDescription 2" className=' grid-cols-1 text-white  grid grid-rows-2 lg:grid-rows-4 bg-slate-600 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700  '>
                <div className='row-span-3'>
                  <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>ChikChat: Real-time Local Web Chat  </h1>
                  <p className='mx-10 my-5 lg:text-xl'>ChikChat: Real-Time Local Chat is a personal project I've crafted with HTML5, CSS3, JavaScript, 
                                      Firebase, and PHP. It facilitates immediate conversations within the same network, ensuring localized interactions. 
                                      Users can initiate chats by entering their names, fostering a personalized touch. 
                                      This project showcases my exploration of web technologies, 
                                      demonstrating real-time connections for a specific network. 
                    </p>
                </div>

                <div className='flex items-center row-span-1 mx-10 my-auto '>
                    <h3 className=''>Stack used:</h3>
                    <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26]'/>
                    <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                    <BiLogoFirebase  size='30' className='mx-1 text-[#FFA611]'/>
                    <FaPhp  size='35' className='mx-1 text-[#8993be]'/>
                    <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>

                </div>
              </div>
              <div className='flex justify-center  bg-slate-800'>
                  <div className='flex items-center max-w-lg '>
                    <Carousel>
                    {slide2.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl '/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>

        
          <div name="section3" className=' grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500]  rounded-lg'>
              <div name="projectDescription 3" className='grid-cols-1 text-whitegrid grid-rows-2 lg:grid-rows-4 bg-slate-600 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700  '>
                <div className='row-span-3 '>
                  <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>POMODORO TECHNIQUE TIMER</h1>
                  <p className='mx-10 my-5 lg:text-xl text-white'>Crafted with ReactJS and Tailwind CSS, my Pomodoro Technique Timer is a simple yet effective digital tool. Inspired by the Pomodoro Technique, it helps users boost productivity by breaking work into intervals. With a seamless user experience, this timer fosters focused work sessions followed by short breaks. As a personal project and first web app for reactjs, I've hosted it on GitHub, showcasing my passion in coding  and commitment to creating practical solutions for enhanced time management.</p>
                  <p className='mx-10 my-2'> <a href='https://helpme14.github.io/pomodoro-app/' target="_blank" rel="noopener noreferrer"
                  className='flex text-white justify-center text-[.9rem] lg:text-xl'>https://helpme14.github.io/pomodoro-app/</a></p>
                </div>

                <div className='flex items-center row-span-1 mx-10 my-auto '>
                    <h3 className='text-white'>Stack used:</h3>
                    <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26]'/>
                    <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                    <BiLogoReact  size='30' className='mx-1 text-[#61dafb]'/>
                    <BiLogoGithub  size='30' className='mx-1 text-[#fff]'/>
                    <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>

                </div>
              </div>
              <div className='flex justify-center  bg-slate-800'>
                  <div className='flex items-center max-w-lg '>
                    <Carousel>
                    {slide3.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl'/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>



          <div name="section4" className=' grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500]  rounded-lg'>
              <div name="projectDescription 4" className='grid-cols-1 text-white grid grid-rows-2 lg:grid-rows-4 bg-slate-600 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700  '>
                <div className='row-span-3 '>
                  <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>Tic Tac Toe</h1>
                  <p className='mx-10 my-5 lg:text-xl'>Discover my rendition of the classic game with the Tic Tac Toe web application. Developed using ReactJS and styled with Tailwind CSS, this digital adaptation offers a nostalgic yet modern experience. Players can engage in strategic matches through an intuitive interface. As a personal project, I've brought this game to life and hosted it on GitHub, showcasing my ability to create enjoyable and interactive web-based applications.</p>
                  <p className='mx-10 my-2'> <a className='flex  justify-center text-[.9rem] lg:text-xl'
                   href='https://helpme14.github.io/tic-tac-toe-reactjs/' target="_blank" rel="noopener noreferrer">https://helpme14.github.io/tic-tac-toe-reactjs/</a></p>
                </div>

                <div className='flex items-center row-span-1 mx-10 my-auto '>
                    <h3 className=''>Stack used:</h3>
                    <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26]'/>
                    <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                    <BiLogoReact  size='30' className='mx-1 text-[#61dafb]'/>
                    <BiLogoGithub  size='30' className='mx-1 text-[#fff]'/>
                    <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>

                </div>
              </div>
              <div className='flex justify-center bg-slate-800'>
                  <div className='flex items-center max-w-lg '>
                    <Carousel>
                    {slide4.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl '/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>



        </div> */}

        
        <span className='underline flex  text-orange-500 my-10 mx-6 md:mx-24 lg:mx-36 justify-center '>
          <h1 className=' font-bold text-4xl lg:text-4xl '>PROJECTS</h1>
        </span>


          <Tabs value={activeTab} className=" mx-2 md:mx-24 lg:mx-36 mb-10 z-[998] custom-tabs ">
          <TabsHeader className='flex items-center rounded-b-none '>
            {Details.map(({ label, value }) => (
              <Tab key={value} value={value} 
              onClick={() => setActiveTab(value)} className={`${activeTab === value ? "text-orange-500 font-bold " :"text-black "} ` } >
                <span className='flex font-kanit text-sm  font-bold md:text-lg  '>{label}</span>
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody className=''> 
          {Details.map(({ value, desc, imgSrc }) => (
              <TabPanel key={value} value={value} className='text-black  text-md bg-gray-400 rounded-b-2xl font-kanit font-normal '>
                <div className=' text-xs md:text-lg'>
                  {desc}
                  
                </div>
              </TabPanel>
            ))}

          </TabsBody>
          
          <TabsBody className=''>
            {Details.map(({ value, desc, imgSrc }) => (
              <TabPanel key={value} value={value} className='text-white '>
                <div className='grid grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-4  md:mx-0 lg:mx-0 w-full object-cover '>
                  
                  {Array.isArray(imgSrc) && imgSrc.map((src, index) => (
                    <div className='border-b-2 shadow-md shadow-orange-500  rounded-xl  border-orange-500 '>
                    <img key={index} src={src} alt={`${index}`} className='border-2  w-full h-full rounded-xl hover:scale-105 duration-500' />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>

        </section>
        </div>

    </Element>



  )
}

export default Projects