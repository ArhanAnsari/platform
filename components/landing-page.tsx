'use client'
// Imports 
import { Button } from '@/components/ui/button'
import Footer from './footer'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BiLogoHtml5, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { FaFireExtinguisher } from 'react-icons/fa';


const icons1 = [
  {
    name: "Discord",
    icon: <BsDiscord className='text-blue-500 text-4xl lg:text-5xl'/>
  },
  {
    name: "Youtube",
    icon: <BsYoutube className='text-red-500 text-4xl lg:text-5xl'/>
  },
  {
    name: "Github",
    icon: <BsGithub className='text-black text-4xl lg:text-5xl'/>
  },
]
const icons2 = [
  {
    name: "React",
    icon: <BiLogoReact className='text-cyan-500 text-5xl lg:text-6xl'/>
  },
  {
    name: "Javascript",
    icon: <BiLogoJavascript className='text-yellow-400 text-5xl lg:text-6xl'/>
  },
  {
    name: "HTML",
    icon: <BiLogoHtml5 className='text-orange-500 text-5xl lg:text-6xl'/>
  },
]


export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    
    <div className='pt-12 extra'>
      {/* Landing Page */}
      <div className='mb-20 font-extrabold '>
        {/* Text + Button */}
        <div data-aos="fade-left" className='flex-1 flex flex-col items-center justify-center'>
          
          
          {/* Sub text */}
            <h1 className='text-7xl text-slate-100 text-center pt-3 font-bold header-landing'>Learn To<span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'> Code</span></h1>
            <p className='pt-3 font-medium text-xl text-gray-200'>&& have fun doing it</p>
          {/* Button */}
          
            <Button variant='goldHover'>
              <Link href='/courses'>
                Let's Start
              </Link>
            </Button>
          
        </div>
        
        {/* Icon Display*/}
        <div className='flex-1 flex flex-col items-center justify-center' data-aos='fade-right'>
          <div className='px-6 py-6 lg:px-12 shadow-2xl shadow-black rounded  hover:shadow-slate-400 duration-500 bg-[#2e2e2e]'>
            {/*cards*/}
            <div 
            className='flex space-x-10 mb-3 lg:mb-5'>
              {icons1.map((i, index) => (
                <div key={index} className='bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center'>{i.icon}</div>
              ))}

            </div>
            {/*cards 2*/}
            <div className='flex space-x-10'>
            <div className='flex space-x-10 mb-3 lg:mb-5'>
              {icons2.map((i, index) => (
                <div key={index} className='bg-slate-200 shadow-xl shadow-black h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] rounded flex justify-center items-center'>{i.icon}</div>
              ))}

            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Page */}
      <div className='text-center space-y-[200px] pt-[90px]'>

        {/* Problem */}
        <div className='space-y-12 pb-[90px]'>
          <div className=''>
          <h1 data-aos='fade-right' className='lg:text-6xl text-4xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Why do I suck at code?</span> 😞</h1>
          </div>
          <p data-aos='fade-up' className='text-bold lg:text-2xl text-xl text-slate-200/50'>most people fail because they aren't coding the right way</p>
          <p className='text-6xl finger'>⏬</p>
        </div>

        {/* Realization */}
        <div className='space-y-12 pb-[90px]'>
          <h1 data-aos='fade-right' className='lg:text-6xl text-4xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500'>Understand this...</span> 🫥</h1>
          <p data-aos='fade-up' className='text-bold lg:text-2xl text-xl text-slate-200/50'>how you learn code matters more than the code itself.</p>
          <p className='text-6xl finger'>⏬</p>
        </div>
        
        {/* Solution*/}
        <div className='space-y-12 pb-[90px]'>
          <h1 data-aos='fade-right' className='lg:text-6xl text-4xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500'>How do I solve this?</span> 🧐</h1>
          <p data-aos='fade-up' className='text-bold lg:text-2xl text-xl text-slate-200/50'>you fix this by building projects YOU want & having fun while coding</p>
          <p className='text-6xl finger'>⏬</p>
          {/* Video */}
          <div className='flex items-center justify-center '>
            <iframe className='sproutvideo-player rounded shadow-md shadow-black' src='https://videos.sproutvideo.com/embed/d390d1b61a1fe9ce5a/e56032fb0653d246' width='640' height='360' title='Video Player'></iframe>
          </div>
          {/* Button */}
          <div>
            <Button variant='goldHover'>Let's Start</Button>
          </div>
        </div>
        
        

      </div>
    </div>
    
  )
}