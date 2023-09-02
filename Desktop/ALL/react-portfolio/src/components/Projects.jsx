import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {FaPhp} from 'react-icons/fa'
import {RiBootstrapLine} from 'react-icons/ri'
import {BiLogoFirebase, BiLogoJavascript, BiLogoReact, BiLogoGithub} from 'react-icons/bi'
import Carousel from './Carousel'

import { Element } from 'react-scroll';
const Projects = () => {

  const slide1 = [
    "echeq1.png",
    "echeqlogin.png",
    "echeqregister.png", 
  ]
  const slide2 = [
    "webchat1.png",
    "webchat2.png",
    "webchat3.png", 
  ]
  const slide3 = [
    "pomodoro1.png",
    "pomodoro2.png",
    "pomodoro3.png", 
  ]
  const slide4 = [
    "tictactoe1.png",
    "tictactoe2.png",
    "tictactoe3.png", 
  ]


  return (

    <Element id="projectsPage" name='projectsPage' className=''>
      <div className='h-full flex'>
        <div className="grid sm:grid-rows-1 mx-4 md:grid-rows-2 lg:grid-rows-3 h-full md:mx-20 lg:mx-24 lg:mt-10 ">


          <div name="section1" className='grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500] rounded-lg'>
              <div name="projectDescription 1" className='text-white border border-white grid grid-rows-2 lg:grid-rows-4 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700 '>
                  <div className=' row-span-3  '>
                    <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>E-Chequer Website </h1>
                      <p className='mx-10 my-auto lg:text-xl'>The E-Chequer Website, a cornerstone of our thesis project, empowers educators with key features. 
                                                It enables seamless access to student scores, facilitates answer sheet generation, and sets answer keys 
                                                for automation. Furthermore, it streamlines score report creation through Excel exports, 
                                                enhancing student data management for teachers.
                      </p>
                  </div>

                  <div className=' row-span-1 my-auto mx-10 flex items-center '>
                      <h3 className=''>Stack used: </h3>
                      <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26] ' />
                      <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                      <FaPhp  size='35' className='mx-1 text-[#8993be]'/>
                      <RiBootstrapLine  size='30' className='mx-1 text-[#563d7c]'/>
                      <BiLogoFirebase  size='30' className='mx-1 text-[#FFA611]'/>
                      <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>
                  </div>
              </div>

              <div className=' border border-white bg-slate-800 flex justify-center '>
                  <div className='max-w-lg  flex items-center '>
                    <Carousel>
                    {slide1.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl'/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>




          <div name="section2" className=' grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500]  rounded-lg'>
              <div name="projectDescription 2" className='text-white border border-white grid grid-rows-2 lg:grid-rows-4 bg-slate-600 
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

                <div className='row-span-1 my-auto mx-10 flex items-center '>
                    <h3 className=''>Stack used:</h3>
                    <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26]'/>
                    <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                    <BiLogoFirebase  size='30' className='mx-1 text-[#FFA611]'/>
                    <FaPhp  size='35' className='mx-1 text-[#8993be]'/>
                    <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>

                </div>
              </div>
              <div className=' border border-white bg-slate-800 flex justify-center '>
                  <div className='max-w-lg   flex items-center  '>
                    <Carousel>
                    {slide2.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl '/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>

        
          <div name="section3" className=' grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500]  rounded-lg'>
              <div name="projectDescription 3" className='text-white border border-white grid grid-rows-2 lg:grid-rows-4 bg-slate-600 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700  '>
                <div className=' row-span-3'>
                  <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>POMODORO TECHNIQUE TIMER</h1>
                  <p className='mx-10 my-5 lg:text-xl'>Crafted with ReactJS and Tailwind CSS, my Pomodoro Technique Timer is a simple yet effective digital tool. Inspired by the Pomodoro Technique, it helps users boost productivity by breaking work into intervals. With a seamless user experience, this timer fosters focused work sessions followed by short breaks. As a personal project and first web app for reactjs, I've hosted it on GitHub, showcasing my passion in coding  and commitment to creating practical solutions for enhanced time management.</p>
                  <p className='mx-10'> <a href='https://helpme14.github.io/pomodoro-app/' target="_blank" rel="noopener noreferrer">https://helpme14.github.io/pomodoro-app/</a></p>
                </div>

                <div className='row-span-1 my-auto mx-10 flex items-center '>
                    <h3 className=''>Stack used:</h3>
                    <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26]'/>
                    <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                    <BiLogoReact  size='30' className='mx-1 text-[#61dafb]'/>
                    <BiLogoGithub  size='30' className='mx-1 text-[#fff]'/>
                    <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>

                </div>
              </div>
              <div className=' border border-white bg-slate-800 flex justify-center '>
                  <div className='max-w-lg   flex items-center  '>
                    <Carousel>
                    {slide3.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl'/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>



          <div name="section4" className=' grid grid-cols-1 my-3 lg:grid-cols-2 shadow-md shadow-[#FFA500]  rounded-lg'>
              <div name="projectDescription 4" className='text-white border border-white grid grid-rows-2 lg:grid-rows-4 bg-slate-600 
              bg-gradient-to-t from-[#111827] via-slate-800 to-gray-700  '>
                <div className=' row-span-3'>
                  <h1 className='text-center my-2 uppercase font-bold text-[#FFA500] lg:text-3xl'>Tic Tac Toe</h1>
                  <p className='mx-10 my-5 lg:text-xl'>Discover my rendition of the classic game with the Tic Tac Toe web application. Developed using ReactJS and styled with Tailwind CSS, this digital adaptation offers a nostalgic yet modern experience. Players can engage in strategic matches through an intuitive interface. As a personal project, I've brought this game to life and hosted it on GitHub, showcasing my ability to create enjoyable and interactive web-based applications.</p>
                  <p className='mx-10 mb-1'> <a href='https://helpme14.github.io/tic-tac-toe-reactjs/' target="_blank" rel="noopener noreferrer">https://helpme14.github.io/tic-tac-toe-reactjs/</a></p>
                </div>

                <div className='row-span-1 my-auto mx-10 flex items-center '>
                    <h3 className=''>Stack used:</h3>
                    <AiOutlineHtml5  size='30' className='mx-1 text-[#e34c26]'/>
                    <TbBrandCss3  size='30' className='mx-1 text-[#264de4]'/>
                    <BiLogoReact  size='30' className='mx-1 text-[#61dafb]'/>
                    <BiLogoGithub  size='30' className='mx-1 text-[#fff]'/>
                    <BiLogoJavascript  size='30' className='mx-1 text-[#f0db4f]'/>

                </div>
              </div>
              <div className=' border border-white bg-slate-800 flex justify-center '>
                  <div className='max-w-lg flex items-center  '>
                    <Carousel>
                    {slide4.map((s)=>(
                      <img src={s} alt="" className='rounded-3xl  '/>
                    ))}
                    </Carousel>
                   
                  </div>
              </div>
          </div>



        </div>
    </div>

    </Element>
  )
}

export default Projects