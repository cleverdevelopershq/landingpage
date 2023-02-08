import React from 'react'
import Button from '@/components/button/button'
import {HiOutlineLocationMarker, HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import {BiSupport}  from 'react-icons/bi'
import {FaFacebook, FaPinterestP} from 'react-icons/fa'
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMedium, }  from 'react-icons/ai'


function footer() {

    const footerContents = [
        {
          id: 1,
          title: 'Clever Developers, 1234 Street Name, Ijapo Estate, Akure',
          icon : <HiOutlineLocationMarker size={30} className='text-PRIMARY'/>,
          link: 'https://google.com'
        }, 
        {
          id: 2,
          title: 'info@cleverdevelopers.com',
          icon : <HiOutlineMail size={30} className='text-PRIMARY'/>,
          link: "mailto:info@cleverdevelopers.com"
        },   {
          id: 1,
          title: 'Sales: (+234) 81 12345678',
          icon : <FiPhoneCall size={30} className='text-PRIMARY'/>,
          link: "tel:12345678"
        },
        {
          id: 1,
          title: 'Support: support@cleverdevelopers.com',
          icon : <BiSupport size={30} className='text-PRIMARY'/>,
          link: "mailto:support@cleverdevelopers.com"
        },
      ]
      
      const quickLink = [
        {
          id: 1,
          title: 'Home',
          link: '/'
        }, {
          id: 2,
          title: 'About Us',
          link: '/about-us'
        },
        {
          id: 3,
          title: 'Services',
          link: '/services'
        }, 
        {
          id: 4,
          title: 'Contact Us',
          link: '/contact-us'
        }, 
        {
          id: 5,
          title: 'Blog',
          link: 'https://medium.com/cleverdevelopers'
        }, 
      
      ]
      
      const socials = [{
        id: 1,
        icon:<FaFacebook />,
        link: 'https://facebook.com/cleverdevelopershq'
      }, {
        id: 2,
        icon:<AiOutlineInstagram />,
        link: 'https://instagram.com/cleverdevelopershq'
      }, 
      {
        id: 3,
        icon:<AiOutlineTwitter />,
        link: 'https://twitter.com/cleverdevshq'
      }, 
      {
        id: 4,
        icon:<AiOutlineLinkedin />,
        link: 'https://linkedin.com/company/cleverdevelopershq'
      }, {
        id: 5,
        icon:<AiOutlineMedium />,
        link: 'https://medium.com/cleverdevelopers'
      }, {
        id: 6,
        icon:<FaPinterestP />,
        link: 'https://pinterest.com/cleverdevelopershq'
      }
      
      ]

  return (
    <footer className='bg-black text-white p-5 lg:px-20 '>
    <section className='mb-10 border-b pb-10' >
      <div className='flex justify-between items-center'>
        <h1 className='md:text-3xl text-2xl font-bold'>Start Your Journey to Better Business</h1>
        <Button 
          title='GET IN TOUCH'
          link='/contact-us'
        />
      </div>
    </section>

    <section className='flex justify-between lg:flex-row flex-col w-full'>
      <div className="lg:w-1/4 lg:mr-20">
        <div>
        {footerContents.map((content) => (
              <div className='flex pb-4 cursor-pointer' key={content.id}>
                {content.icon}
                <a
                  href={content.link}
                >
                  <p className='pl-5 hover:text-PRIMARY'>{content.title}</p>
                </a>
           </div>
        ))}
        </div>

        {/* SOCIAL MEDIA ICONS STARTS HERE */}
        <div className="flex justify-evenly my-5 md:mt-10">
          {socials.map((social) => (

            <a
            key={social.id}
              href={social.link}
            >
              <p
              className=" bg-white p-2 text-md text-black  cursor-pointer hover:text-PRIMARY rounded"
              >
                {social.icon}
              </p>
            </a>
          ))}

        </div>
      </div>

      {/* QUICKLINK STARTS HERE */}

      <div className='lg:w-1/4'>
        <h1 className='text-2xl font-bold text-PRIMARY mb-5'>QUICK LINKS</h1>
        <ul>
          {quickLink.map((link) => (
            <li className='cursor-pointer hover:text-PRIMARY py-2' key={link.id}>
              <a
                href={link.link}
              >
              {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>


      {/* EMAIL SUBSCRIBE NEWSLETTER STARTS HERE */}
      <div className="lg:w-2/4 pt-5">
        <h1 className='text-2xl font-bold text-PRIMARY mb-5'>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <div className='flex'>
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-[#1F1F1F] text-white px-5 py-3 mx-3 w-full'
          />
          <Button
            title='SUBSCRIBE'
            link='/'
          />
        </div>

        {/* MAP DISPLAY STARTS HERE */}
        <div className='mt-10'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d5.207999314769869!3d7.240000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7a7b7b7b7b%3A0x1b3b3b3b3b3b3b3b!2sClever%20Developers!5e0!3m2!1sen!2sng!4v1634041000000!5m2!1sen!2sng" width="400" height="300" style={{
            border:0,
            borderRadius: '15px',
            width: '100%',
            height: '250px'
            }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
      </div>

    </section>


    <section>
      <div className='flex justify-between items-center py-10'>
        <p className=''>© {new Date().getFullYear()} Clever Developers. All rights reserved.</p>
        <p className=''>Designed by <a href='https://cleverdevelopers.com' className='hover:text-PRIMARY'>Clever Developers</a></p>
        </div>
    </section>
  </footer>
  )
}

export default footer
