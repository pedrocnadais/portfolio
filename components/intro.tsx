"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare, FaWhatsapp } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick }  = useActiveSectionContext();
  
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
     <div className='flex items-center justify-center'>
      <div className='relative'>
       <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
        type: "tween",
        duration: 0.2
       }}
       >
        <Image 
        src="/pedro-corsi2.jpg" 
        alt='Pedro Corsi' 
        width={349} 
        height={388} 
        quality={90} 
        className='h-max w-max mt-[-2rem] rounded-2xl object-cover border-[0.15rem] border-white shadow-xl'
        />
        </motion.div>
       <motion.span className='absolute -bottom-3.5 -right-3.5  text-4xl'
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7
       }}>
        ✌️
       </motion.span>
      </div>
     </div>
     <motion.p className='mb-10 mt-12 px-4 text-xl !leading-[1.5]'
     initial={{ opacity: 0, y: 100 }}
     animate={{ opacity: 1, y: 0}}>
      Frontend developer skilled in React, Next.js, JavaScript, and TypeScript, with experience in Node.js as well. I strive to create efficient and visually appealing solutions. I&apos;m a proactive, curious, and highly motivated professional, known for my attention to detail, strong communication, and problem-solving abilities. Fluent in English and Portuguese, and conversational in Spanish.
     </motion.p>
     <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
     initial={{ opacity: 0, y: 0 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{
      delay: 0.1
     }}>
      
      {/* Contact button */}
      <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
      onClick={()=>{
        setActiveSection('Contact');
        setTimeOfLastClick(Date.now());
      }}>
      Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
      </Link>

      {/* Download button */}
      <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href='/[EN] CV Pedro [UPDATED 16-10-2024]' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/></a>

      {/* Linkedin button */}
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack' href='https://www.linkedin.com/in/pedrocorsin/' target='_blank'><BsLinkedin /></a>

      {/* Github button */}
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href='https://github.com/pedaaro' target='_blank'><FaGithubSquare /></a>

      {/* Whatspp button */}
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href='https://api.whatsapp.com/send/?phone=5511910788778&text&type=phone_number&app_absent=0' target='_blank'><FaWhatsapp /></a>

     </motion.div>
    </section>
  )
}
