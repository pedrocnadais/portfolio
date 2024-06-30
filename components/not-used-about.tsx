"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About');

  return (
  <motion.section 
    ref={ref}
    className='mb-16 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
    id='about'
  >
   <SectionHeading>About me</SectionHeading>
   <p className='mb-3'>
    While I&apos;m mainly focused on frontend development, I believe it&apos;s crucial to be versatile across all aspects of a project. I enjoy working with React because of how its components seamlessly interact. For backend, Node.js is my go-to choice. In my view, PostgreSQL is the best database to work with—very user-friendly. I&apos;m proactive with an entrepreneurial mindset, finding satisfaction in supporting the team and driving results. Feel free to reach out; I&apos;m always up for a chat.
   </p>
  </motion.section>
  )
}
