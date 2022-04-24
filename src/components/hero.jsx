import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImage from '../assets/cyber-bg.png'

const hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-betwween '>

        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className=' flex flex-col justify-center md:items-start w-full px-2 py-8'>


            <p className='text-2xl'>Website Design & Maintainance</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Website Management</h1>
            <p className='text-2xl'>This is our Tech Space.</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>


            </div>

            <div>
                <img className='w-full' src={bgImage} alt="header image" />
            </div>
            
           


           

        </div>

    </div>
  )
}

export default hero