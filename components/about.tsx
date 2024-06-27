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
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus dolor eos natus sed perferendis aliquam consequatur. Repellat consectetur est dolores adipisci eum inventore aliquid labore aut, eius corporis laudantium aliquam, natus odit quia doloremque debitis perspiciatis explicabo nesciunt! Necessitatibus!
   </p>
   <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore culpa consequuntur corrupti vitae aspernatur iusto minus architecto mollitia, neque quidem numquam libero perferendis, tenetur sit similique assumenda dicta deserunt, sunt excepturi velit atque doloribus ex autem quasi! Deleniti, odio sit?
   </p>
  </motion.section>
  )
}
