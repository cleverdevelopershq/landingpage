import React from 'react'
import ProgressBarComponent from '../progressBar/ProgressBar'
import Launching from '@/components/assets/Launching.gif'
import Image from 'next/image'
import { motion } from "framer-motion"

function WhatWeDo() {

  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      value: 95
    },
    {
      id: 2,
      title: 'MOBILE DEVELOPMENT',
      value: 96
    },
    {
      id: 3,
      title: 'UI/UX DESIGN',
      value: 98
    },
    {
      id: 4,
      title: 'CUSTOM SOFTWARE SOLUTION',
      value: 95
    },
    {
      id: 5,
      title: 'IT CONSULTING',
      value: 95
    }, {
      id: 6,
      title: 'DIGITAL MARKETING',
      value: 97
    },
    {
      id: 7,
      title: 'ENTERPRISE APPLICATIONS',
      value: 95
    }
  ] 
  return (
    <>
    <section className="flex justify-between items-center flex-col md:flex-row md:px-20 px-10">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ 
          opacity: 1, x: 0 ,
          scale: [1, 1.5, 1, 1, 1],
        }}
        transition={{ 
          duration: 1,
          delay: 0.5,
          type: 'spring',
          stiffness: 120,
         }}
        className='md:w-1/2 animate-pulse hover:cursor-pointer'>
          <Image src={Launching} alt="Launching" width={500} height={500} />
      </motion.div>

        <div className='md:w-1/2'>
          <p className="font-bold mb-2 text-[#FFCC00]">About Clever Developers</p>
          <h1 className="text-4xl font-bold mb-5">What We Do </h1>
          <p className='mb-5'>Clever Developers is a software development, IT consulting and solution providing company that`s driven by a passion for innovation and a commitment to delivering world-class solutions.
          Our approach is collaborative, with a focus on understanding your unique needs and goals. 
          </p>

          <div>
            {services.map((service) => (
              <div key={service.id} className=''>
                <div className='my-4'>
                  <div className='flex justify-between items-center'>
                  <p className='font-bold'>{service.title}</p>
                  <p className='font-bold pr-10'>{service.value}%</p>
                  </div>
                <ProgressBarComponent value={service.value} />
                </div>
              </div>
            ))}
          </div>
      </div>



    </section>
    </>
  )
}

export default WhatWeDo
