import React from 'react'
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className='footer bg-[black]'>
                <div className='grid justify-center justify-items-center w-full shadow'>
                    <p className='font-sm text-[white]'>NEWSLETTER FOR G'S</p>
                    <p className="font-sm text-[white] font-bold  text-[40px] my-[20px]">WEEKLY KNOWLEDGE EXCLUSIVELY FOR G'S.</p>
                    <div className="w-72 my-[15px]">
                        <Input className='' label="Email" icon={<i className="fas fa-heart" />} />
                    </div>
                    <div className='about flex'>
                        <div className='aboutus grid'>
                            <p className='text-[20px] text-[white]'>ABOUT US</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
