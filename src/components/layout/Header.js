import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const tabsData = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Catalog',
        path: '/catalog'
    },
    {
        label: 'Contact',
        path: '/contact'
    },
    {
        label: 'About us',
        path: '/about'
    }
];

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='header'>
            <div className="bg-[#c471f5] bg-opacity-100 h-10 text-center flex items-center justify-center">
                <span className="my-auto text-[#2a2a72] tracking-[2px] font-bold">The Legendary Course Collection</span>
            </div>
            <nav className="w-full bg-[black] shadow">
                <div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="w-[20%]">
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="javascript:void(0)">
                                <h2 className="text-2xl font-bold text-white">MatrixAIMovement</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%]">
                        <div
                            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >

                            {tabsData.map((tab, idx) => {
                                return (
                                    <Link
                                        to={tab.path}
                                        key={idx}
                                        className={"text-white text-sm hover:text-indigo-200 mr-[30px]"}
                                    >
                                        {tab.label}
                                    </Link>
                                )
                            })}

                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 font-thin text-white rounded-md shadow "
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <svg class="icon icon-cart" width="30px" height="30px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                <path fill="white" fill-rule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header
