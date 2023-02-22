import React from 'react'
import { Input, Textarea, Button } from '@material-tailwind/react'

const Contact = () => {
  return (
    <div className='bg-[#0d1245] flex-col flex items-center justify-center'>
      <div className='w-[50%]'>
        <p className='text-[70px] text-[#c471f5] font-bold pt-[20px] pb-[50px]' >Contact</p>
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
    </div>
  )
}

export default Contact
