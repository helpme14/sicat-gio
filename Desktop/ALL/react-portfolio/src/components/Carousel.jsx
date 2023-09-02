import React from 'react'
import { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export default function Carousel({children:slide1}){
    const [curr,setCurrent] = useState(0)

    const prev = () => 
    setCurrent((curr) => (curr ===0 ? slide1.length-1: curr -1))
    const next = () => 
    setCurrent((curr) => (curr === slide1.length-1 ? 0 : curr +1))
     
    return(
        <div className=' overflow-hidden relative '>
            <div className='flex transistion-transform ease-out duration-500 ' style={{transform:`translateX(-${curr*98}%)`}}>
                {slide1}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow  bg-gradient-to-r from-[#111827]  to-gray-700 hover:scale-105 '>
                <BiChevronLeft size={40} color='#FFA500' className=''/>
            </button>
            <button onClick={next} className='p-1 rounded-full shadow  bg-gradient-to-l from-[#111827]  to-gray-700 hover:scale-105'>
                <BiChevronRight  size={40} color='#FFA500'/>
            </button>
            </div>
        </div>
    )
}