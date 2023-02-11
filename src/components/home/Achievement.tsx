import React from 'react'
import CountUp from 'react-countup';

function Achievement() {
  return (
    <div className='px-[2rem] my-[2rem]'>
         <div className='flex flex-col justify-center items-center'>
            <p className='text-PRIMARY font-bold'>_We Are Clever Developers_</p>
            <p className='font-bold md:text-[3rem] text-[2rem]'>Our Achievements</p>    
        </div>
        <div className='bg-Navy md:h-[15rem] h-screen rounded-md mb-5 flex justify-between items-center flex-wrap'>
            <div className='flex flex-col justify-center items-center h-[rem] md:w-1/6 w-full  relative'>
                 <CountUp duration={5} end={100} className='text-PRIMARY text-[3rem] font-extrabold'/> <span className='text-gray-600 text-[3rem] absolute md:right-[30px] right-[70px] top-[-20px]'>+</span>
                <p className='text-white font-bold text-[18px]'>Happy</p>
                <p className='text-white font-bold text-[18px]'>Clients</p>
            </div>
            <div className='flex flex-col justify-center items-center h-[rem] md:w-1/6 w-full  relative'>
                 <CountUp duration={5} end={120} className='text-PRIMARY text-[3rem] font-extrabold'/> <span className='text-gray-600 text-[3rem] absolute md:right-[30px] right-[70px] top-[-20px]'>+</span>
                <p className='text-white font-bold text-[18px]'>Projects</p>
                <p className='text-white font-bold text-[18px]'>Done</p>
            </div>
            <div className='flex flex-col justify-center items-center h-[rem] md:w-1/6 w-full  relative'>
                 <CountUp duration={5} end={250} className='text-PRIMARY text-[3rem] font-extrabold'/> <span className='text-gray-600 text-[3rem] absolute md:right-[30px] right-[70px] top-[-20px]'>+</span>
                <p className='text-white font-bold text-[18px]'>People</p>
                <p className='text-white font-bold text-[18px]'>Consulted</p>
            </div>
            <div className='flex flex-col justify-center items-center h-[rem] md:w-1/6 w-full  relative'>
                 <CountUp duration={5} end={6} className='text-PRIMARY text-[3rem] font-extrabold'/> <span className='text-gray-600 text-[3rem] absolute md:right-[50px] right-[90px] top-[-20px]'>+</span>
                <p className='text-white font-bold text-[18px]'>Countries</p>
                <p className='text-white font-bold text-[18px]'>Served</p>
            </div>
        </div>
    </div>
  )
}

export default Achievement