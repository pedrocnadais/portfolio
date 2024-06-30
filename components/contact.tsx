"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
 const { ref } = useSectionInView('Contact');

  return (
   <section 
   id='contact' 
   ref={ref} 
   className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'>
    <SectionHeading>Contact me</SectionHeading>
    <p className='text-gray-700 -mt-5'>Please contact me directly at <a className='underline' href='mailto:pedrocorsi1@outlook.com'>pedrocorsi1@outlook.com</a>{' '} or through this form
    </p>

    <form 
     className='mt-10 flex flex-col' 
     action={async (formData) => {
      const { data, error } = await sendEmail(formData);

      if(error) {
        toast.error(error)
        return;
      }

      toast.success("Email sent successfully. Talk to you soon :)")
     }}
    >
     <input 
      className='h-14 px-4 rounded-lg borderBlack' 
      type="email" 
      name='senderEmail' 
      required 
      maxLength={500} 
      placeholder='Your email' 
     />
     <textarea 
      className='h-52 my-3 rounded-lg borderBlack p-4'  name='message' 
      placeholder='Your message to me :)' 
      required 
      maxLength={1000} 
      />
     <SubmitBtn />
    </form>
   </section>
  )
}
