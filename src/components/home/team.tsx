import React from 'react'
import Image from 'next/image'
import Peter from '@/components/assets/Joshua-Peter.png'

function team() {

    const teamMembers = [
        {
            id: 1,
            name: 'Joshua Peter',
            role: 'Software Engineer',
            image: Peter,
            link: ''
        },
        {
            id: 2,
            name: 'Joshua Peter',
            role: 'Software Engineer',
            image: Peter,
            link: ''
        }, 
        {
            id: 3,
            name: 'Joshua Peter',
            role: 'Software Engineer',
            image: Peter,
            link: ''
        }
    ]
  return (
    <section className="w-full min-h[800px] bg-gradient-to-b from-[#FFCC00] to-[#D9D9D9] p-20 ">
        <div
        className='flex justify-center items-center text-2xl font-bold'
        >
            <h1>MEET OUR TEAM</h1>
        </div>

        {/* PROFILE AND IMAGE OF OUR TEAM MEMBERS */}
        <div className='grid md:grid-cols-3  items-center justify-center '> 

        {
            teamMembers.map((member) => (
                <div 
                key={member.id}
                className="w-[330px]">
                <Image src={Peter}
                alt={member.name}
                width={330.39}
                height={408.03}
                 />
                 <div className=" text-black bg-PRIMARY p-4">
                    <h1 className="text-2xl font-bold hover:text-white cursor-pointer">{member.name}</h1>
                    <p className="text-md">{member.role} </p>
             </div>

             </div>
            ))
        }
        </div>

    </section>
  )
}

export default team
