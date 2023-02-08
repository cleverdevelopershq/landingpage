import React from 'react'
import Link from 'next/link'


interface BtnData {
    title: string
    link: string
}

function button({title, link}: BtnData) {
  return (
    <div>
        <button
        className='bg-[#FFCC00] hover:bg-white text-black md:px-5 px-3 md:py-4 py-2 rounded-sm font-bold'>
         <Link href= {link}>{title}</Link>
        </button>
    </div>
  )
}

export default button
