/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import introImg from "../../assets/img/intro-img.png";
// import { Sidebar } from "../Navbar";
import { useMedia } from "react-use";

// const tabsData = [
//     {
//         label: "Home",
//         path: "/",
//     },
//     {
//         label: "Store",
//         path: "/store",
//     },
//     {
//         label: "Contact",
//         path: "/contact",
//     },
//     {
//         label: "About us",
//         path: "/about",
//     },
// ];

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    // const [isVisible, setIsVisible] = useState(false);
    // const [isSearch, setIsSearch] = useState(false);
    const [url, setUrl] = useState("");
    const isMobile = useMedia("(max-width: 800px)");
    useEffect(() => {
        const doc = document.documentElement;
        const w = window;

        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        const header = document.getElementById("site-header");

        const checkScroll = function () {
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) {
                //scrolled up
                direction = 2;
            } else if (curScroll < prevScroll) {
                //scrolled down
                direction = 1;
            }

            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }

            prevScroll = curScroll;
        };

        var toggleHeader = function (direction, curScroll) {
            if (direction === 2 && curScroll > 134) {
                //replace 52 with the height of your header in px

                header.classList.add("hidden");
                prevDirection = direction;
            } else if (direction === 1 && curScroll > 134) {
                header.classList.remove("hidden");
                prevDirection = direction;
            }
        };
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    useEffect(() => {
        switch (url) {
            case "home":
                window.location.href = "/";
                return;
            case "store":
                window.location.href = "/store";
                return;
            case "contact":
                window.location.href = "/contact";
                return;
            case "about":
                window.location.href = "/about";
                return;
            default:
                break;
        }
    }, [url]);

    return (
        <>
            <div id="site-header" className="fixed w-full bg-primary z-10">
                <div className="bg-secondary cursor-pointer text-primary group uppercase hover:bg-secondary-hv font-ft-primary text-[2rem] p-2">
                    <div className="max-w-[160rem] m-auto">
                        <div className="flex justify-center items-center gap-2">
                            <h1>the legendary courses collection</h1>
                            <h1 className="group-hover:translate-x-2 transition-all duration-200">
                                →
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="max-w-[160rem] m-auto">
                    <div className="grid grid-cols-4 gap-5 py-8 px-20">
                        <div className="grid grid-cols-1 max-lg:grid-cols-2 col-span-1 justify-self-start gap-4">
                            {/* <div className='bg-white' id="outer-container">
                                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                            </div> */}
                            <button
                                className="text-gray-700 rounded-md outline-none focus:border-gray-400 col-span-1 justify-self-center hidden max-lg:block"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#7f4db2]"
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
                                        className="w-6 h-6 text-[#7f4db2]"
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
                            <div className="col-span-1 justify-self-center cursor-pointer flex items-center">
                                <FontAwesomeIcon icon={faSearch} className="text-[#7f4db2]" />
                            </div>
                        </div>
                        <div className="col-span-2 justify-self-center cursor-pointer">
                            <img
                                src={introImg}
                                alt="intro-img"
                                width="70px"
                                className="rounded-[50px]"
                            />
                        </div>
                        <div className="col-span-1 justify-self-end flex items-center relative cursor-pointer">
                            <svg
                                className="w-16 h-16 text-third"
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"
                                ></path>
                            </svg>
                            {/* <div className="rounded-full bg-secondary w-8 h-8 absolute right-1 bottom-5 flex items-center justify-center">
                                <h1 className="text-base font-bold">1</h1>
                            </div> */}
                        </div>
                        <div className="col-start-2 col-span-2 grid grid-cols-4 gap-5 justify-self-center mt-4 max-lg:hidden">
                            <div
                                className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                onClick={() => setUrl("home")}
                            >
                                <h1>Home</h1>
                            </div>
                            <div
                                className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                onClick={() => setUrl("store")}
                            >
                                <h1>Store</h1>
                            </div>
                            <div
                                className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                onClick={() => setUrl("contact")}
                            >
                                <h1>Contact</h1>
                            </div>
                            <div
                                className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                onClick={() => setUrl("about")}
                            >
                                <h1>About Us</h1>
                            </div>
                        </div>
                        {isMobile && navbar && (
                            <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0`}>
                                <ul className="flex-col text-left">
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <div
                                            className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                            onClick={() => setUrl("home")}
                                        >
                                            <h1>Home</h1>
                                        </div>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <div
                                            className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                            onClick={() => setUrl("store")}
                                        >
                                            <h1>Store</h1>
                                        </div>{" "}
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <div
                                            className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                            onClick={() => setUrl("contact")}
                                        >
                                            <h1>Contact</h1>
                                        </div>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                        <div
                                            className="text-third font-semibold hover:underline hover:brightness-150 cursor-pointer"
                                            onClick={() => setUrl("about")}
                                        >
                                            <h1>About Us</h1>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* <div className='relative'>
                <div className='b border-t-4 visible transition-all duration-200 ease-in-out absolute'>HHHHHHHHHHHHHHHH</div>
            </div> */}
            {/* <div className=' fixed w-full' id='site-header'>
                <div className='max-w-[160rem] m-auto'>
                    <div className='flex items-center justify-between'>
                        <nav className="w-full bg-[#0d1245] shadow ">
                            <div className="px-4 mx-auto  md:items-center md:flex md:px-8">
                                <div className="w-[10%]">
                                    <div className="flex items-center justify-center px-4 py-2 font-thin text-white rounded-md shadow cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out">
                                        <FontAwesomeIcon icon={faSearch} className="text-[#7f4db2]" />
                                    </div>
                                </div>
                                <div className="w-[80%] flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-center py-3 md:py-5 md:block">
                                        <a href="/" className=''>
                                            <img src={introImg} alt="intro-img" width="70px" className='rounded-[50px]' />
                                        </a>
                                        <div className="md:hidden">
                                            <button
                                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                                onClick={() => setNavbar(!navbar)}
                                            >
                                                {navbar ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6 text-[#7f4db2]"
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
                                                        className="w-6 h-6 text-[#7f4db2]"
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
                                    <div
                                        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                            }`}
                                    >

                                        {tabsData.map((tab, idx) => {
                                            return (
                                                <Link
                                                    to={tab.path}
                                                    key={idx}
                                                    className={"text-[#7f4db2] text-sm hover:text-indigo-200 mr-[30px]"}
                                                >
                                                    {tab.label}
                                                </Link>
                                            )
                                        })}

                                    </div>
                                </div>
                                <div className="w-[10%]">
                                    <a
                                        className="px-4 py-2 flex items-center justify-center text-gray-800 bg-none rounded-md shadow "
                                    >
                                        <svg className="icon icon-cart" width="30px" height="30px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                            <path fill="#7f4db2" fillRule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;