/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@material-tailwind/react";
import { AmexIcon, MasterIcon, PaypalIcon, VisaIcon, AppleIcon, InstagramIcon, TwitterIcon, DiscordIcon } from '../../icon';
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
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {

        console.log("here")
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                console.log("overflow 500")
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className='text-third font-ft-primary'>
            <div className='my-16 flex flex-col gap-12 items-center justify-center max-w-[160rem] m-auto tracking-wider'>
                <h1 className='uppercase font-ft-secondary text-3xl'>newsletters for g's</h1>
                <h1 className='uppercase text-center text-[7rem] max-[1200px]:text-5xl max-sm:text-3xl'>WEEKLY KNOWLEDGE EXCLUSIVELY FOR G'S.</h1>
                <div className='relative'>
                    <input type='email' className='bg-primary p-8 text-third border border-third text-4xl placeholder:text-third w-[50rem] max-lg:w-[30rem] max-lg:p-4 max-lg:text-2xl' placeholder='Email' />
                    <h1 className='absolute top-10 bottom-10 right-10 text-4xl max-lg:top-4 max-lg:bottom-4 max-lg:right-4'>→</h1>
                </div>
            </div>
            <div className='py-16 border-y border-y-third'>
                <div className='px-40 m-auto max-w-[160rem] grid grid-cols-2 max-md:px-5'>
                    <div className='flex flex-col gap-12 max-lg:gap-6'>
                        <h1 className='text-5xl max-md:text-3xl'>ABOUT US</h1>
                        <h1 className='text-3xl font-ft-secondary cursor-pointer brightness-75 hover:underline hover:brightness-100 max-md:text-xl'>About Us</h1>
                        <h1 className='text-3xl font-ft-secondary cursor-pointer brightness-75 hover:underline hover:brightness-100 max-md:text-xl'>Refund Policy</h1>
                        <h1 className='text-3xl font-ft-secondary cursor-pointer brightness-75 hover:underline hover:brightness-100 max-md:text-xl'>Privacy Policy</h1>
                        <h1 className='text-3xl font-ft-secondary cursor-pointer brightness-75 hover:underline hover:brightness-100 max-md:text-xl'>Terms of Service</h1>
                        <h1 className='text-3xl font-ft-secondary cursor-pointer brightness-75 hover:underline hover:brightness-100 max-md:text-xl'>Logal Notice</h1>
                        <h1 className='text-3xl font-ft-secondary cursor-pointer brightness-75 hover:underline hover:brightness-100 max-md:text-xl'>Contact Information</h1>
                    </div>
                    <div className='flex flex-col gap-12 max-md:gap-3'>
                        <h1 className='text-5xl max-md:text-3xl'>Our Mission</h1>
                        <h1 className='text-3xl font-ft-secondary brightness-75 hover:brightness-100 leading-[4rem] tracking-wider max-md:text-xl'>Matrix AI Movement empowers individuals with digital tools and resources to thrive. We offer courses and job opportunities in tech and marketing, encouraging personal growth and development to become your own boss.</h1>
                    </div>

                </div>
                <div className='flex justify-center justify-items-center mt-10'>
                    <div
                        className="px-4 py-2 bg-none rounded-md text-third"
                    >
                        <InstagramIcon />
                    </div>
                    <div
                        className="px-4 py-2 bg-none rounded-md"
                    >
                        <TwitterIcon />
                    </div>
                    <div
                        className="px-4 py-2 bg-none rounded-md"
                    >
                        <DiscordIcon />
                    </div>
                </div>
            </div>
            <div className='px-20 m-auto max-w-[160rem] flex items-center font-ft-secondary py-12 gap-28 max-md:px-5 max-md:flex-col max-md:gap-10'>
                <div className='flex items-center max-md:text-xl'>
                    <div className='text-third'>
                        <h1>@ 2023,</h1>
                    </div>
                    <div
                        className="text-third ml-4 hover:underline"
                    >
                        <h1>CreatusMarketingAgency</h1>
                    </div>
                </div>
                <div className='flex justify-center justify-items-center gap-12 max-md:gap-6' >
                    <a
                        // href="javascript:void(0)"
                        className="text-gray-800 bg-none rounded-md shadow "
                    >
                        <AmexIcon />
                    </a>
                    <a
                        // href="javascript:void(0)"
                        className="text-gray-800 bg-none rounded-md shadow "
                    >
                        <AppleIcon />
                    </a>
                    <a
                        // href="javascript:void(0)"
                        className="text-gray-800 bg-none rounded-md shadow "
                    >
                        <MasterIcon />
                    </a>
                    <a
                        // href="javascript:void(0)"
                        className="text-gray-800 bg-none rounded-md shadow "
                    >
                        <PaypalIcon />
                    </a>
                    <a
                        // href="javascript:void(0)"
                        className="text-gray-800 bg-none rounded-md shadow "
                    >
                        <VisaIcon />
                    </a>
                </div>
                {/* {isVisible && (
                    <button
                        onClick={scrollToTop}
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="fixed bottom-5 right-5 inline-block rounded-full bg-danger p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="h-4 w-4">
                            <path
                                fillRule="evenodd"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                )} */}
            </div>
        </div>
    )
}

export default Footer
