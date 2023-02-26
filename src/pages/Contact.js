import React from 'react'
import { Input, Textarea, Button } from '@material-tailwind/react'

const Contact = () => {
  return (
    <>
      <div className='max-w-[160rem] m-auto px-20 text-third font-ft-primary mb-20'>
        <div className='flex flex-col items-center justify-center gap-20'>
          <div className='text-left text-8xl'><h1>Contact</h1></div>
          <div className='flex flex-col gap-10 font-ft-secondary max-w-[50rem] max-md:max-w-[40rem]'>
            <div className='grid grid-cols-2 gap-8'>
              <input type="text" placeholder='Name' className='border border-third p-4 bg-transparent placeholder:text-third' />
              <input type="email" placeholder='Email*' className='border border-third p-4 bg-transparent placeholder:text-third' />
            </div>
            <input type="text" placeholder='Phone number' className='border border-third p-4 bg-transparent placeholder:text-third' />
            <textarea rows="10" cols="50" className='bg-transparent border border-third p-4 placeholder:text-third' placeholder='Comment' />
            <div className='flex'>
              <div className='bg-secondary text-center px-20 rounded-2xl text-primary py-4 cursor-pointer shadow-bs-primary'><h1>Send</h1></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-[#0d1245] flex-col flex items-center justify-center'>
        <div className='w-[50%]'>
          <div className='text-[70px] text-[#c471f5] font-bold pt-[20px] pb-[50px]' >Contact</div>
          <form className='pb-[50px]'>
            <div className='flex items-center justify-center pb-[20px]'>
              <div className='pr-[10px] w-full'>
                <Input color="purple" label="Name" className='' />
              </div>
              <div className='pl-[10px] w-full'>
                <Input color="purple" label="Email *" className='pl-[5px]' />
              </div>
            </div>
            <div className=''>
              <div className='pb-[20px] w-full'>
                <Input color="purple" label="Phone Number" className='border-[#c471f5] pb-[20px]' />
              </div>
              <div className='pb-[20px] w-full'>
                <Textarea color="purple" label="Message" className='pb-[20px] ' />
              </div>
            </div>
            <Button color="purple" type='submit' className='bg-[#a4ef7d] text-thin text-[#0d1245]'>Send</Button>
          </form>
        </div>
      </div> */}
    </>
  )
}

export default Contact
