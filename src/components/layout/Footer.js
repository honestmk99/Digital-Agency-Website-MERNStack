import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const listData = [
    {
        label: 'About Us',
        path: '/about'
    },
    {
        label: 'Refund Policy',
        path: '/refund'
    },
    {
        label: 'Privacy Policy',
        path: '/privacy'
    },
    {
        label: 'Terms of Service',
        path: '/service'
    },
    {
        label: 'Legal Notice',
        path: '/legal'
    },
    {
        label: 'Contact Information',
        path: '/contactinfo'
    }
];

const Footer = () => {
    return (
        <div>
            <div className='footer bg-[black]'>
                <div className='grid justify-center justify-items-center w-full shadow mb-[20px]'>
                    <p className='font-sm text-[white]'>NEWSLETTER FOR G'S</p>
                    <p className="font-sm text-[white] font-bold  text-[40px] my-[20px]">WEEKLY KNOWLEDGE EXCLUSIVELY FOR G'S.</p>
                    <div className="w-72 my-[15px]">
                        <Input className='' label="Email" icon={<i className="fas fa-heart" />} />
                    </div>
                </div>
                <div className='about border-t border-[#3e3e3e]'>
                    <div className='flex aboutmission mb-[30px] mt-[20px]'>
                        <div className='aboutus w-[50%]'>
                            <p className='text-[20px] text-[gray] mb-[20px] ml-[80px]'>ABOUT US</p>
                            <div className='aboutlist grid ml-[80px]'>
                                {listData.map((tab, idx) => {
                                    return (
                                        <Link
                                            to={tab.path}
                                            key={idx}
                                            className={"text-white text-sm hover:text-indigo-200 mb-[10px] mr-[30px]"}
                                        >
                                            {tab.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='mission w-[50%]'>
                            <p className='text-[20px] text-[white] mb-[20px]'>Our Mission</p>
                            <p className='text-[white] text-[15px] mr-[80px]'>
                                At Matrix AI Movement, our mission is to empower individuals with the necessary tools and resources to thrive in the ever-changing digital landscape. We strive to create a community of like-minded individuals who share a passion for personal growth and development. Our ecommerce store offers a wide range of courses and information to help individuals achieve their goals and enhance their skills. In addition, our agency provides free training and job opportunities in various industries, including tech and marketing. We believe that by offering these resources and opportunities, we can help individuals escape the constraints of traditional employment and become their own bosses.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center justify-items-center sociallink'>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <svg aria-hidden="true" focusable="false" class="icon icon-instagram" width="20px" height="20px" viewBox="0 0 18 18">
                                <path fill="white" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                                <path fill="white" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
                                </path></svg>
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <svg aria-hidden="true" focusable="false" class="icon icon-twitter" width="20px" height="20px" viewBox="0 0 18 15">
                                <path fill="white" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z">
                                </path></svg>
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="white" class="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path> </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
