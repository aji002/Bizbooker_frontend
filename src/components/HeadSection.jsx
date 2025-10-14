import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon,ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function HeadSection() {

    const nav=useNavigate()

  return (
    <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='flex flex-col items-start justify-center gap-4
    px-6 md:px-16 lg:px-36 bg-[url("/bg-img.jpg")]
    bg-cover bg-center h-screen'>

        <img src={assets.onlineApp} alt="" className='max-h-11 lg:h-11 mt-20' />

        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold
        max-w-110'>“Your time <br/> perfectly scheduled.”</h1>

        <div className='flex items-center gap-4 text-gray-300'>
            <span>Fast | Simple | Easy</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/>
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/>
            </div>
        </div>
        <p className='max-w-md text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro eligendi corrupti 
        nihil consequatur, recusandae cumque repudiandae excepturi id accusantium possimus quam officia 
        aut et omnis ratione temporibus itaque quaerat.</p>
        <button onClick={()=>nav('/biss')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary
        hover:bg-primary-dull transition rounded-full font-medium cursor-ponter'>
            Book Slot 
            <ArrowRight className='w-5 h-5'/>
        </button>
      
    </div>
  )
}

export default HeadSection
