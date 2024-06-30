"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
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
      While I&apos;m mainly focused on frontend development, I believe it&apos;s crucial to be versatile across all aspects of a project. I enjoy working with React because of how its components seamlessly interact with one another. For backend, Node.js is my go-to choice. In my view, PostgreSQL is the best database to work with—very user-friendly. I&apos;m proactive with an entrepreneurial mindset, finding satisfaction in supporting the team and driving results. Feel free to reach out; I&apos;m always up for a chat.
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
      <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href='/Pedro JavaScript Developer CV.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/></a>

      {/* Linkedin button */}
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack' href='https://www.linkedin.com/in/pedrocorsin/' target='_blank'><BsLinkedin /></a>

      {/* Github button */}
      <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href='https://github.com/pedaaro' target='_blank'><FaGithubSquare /></a>
     </motion.div>
    </section>
  )
}
