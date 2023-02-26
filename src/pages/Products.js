/* eslint-disable jsx-a11y/alt-text */
import introImg from '../assets/img/seller.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const Products = () => {
    return (
        <>
            <div className='max-w-[160rem] m-auto'></div>
            <div className="bg-[#0d1245] px-40 font-primary text-font-primary">
                <div className="grid grid-cols-2  gap-20">
                    <div className="w-8/12">
                        <h1 className="font-bold text-6xl leading-[5rem] tracking-wider">Sebastian Ghiorghiu's Elite Courses</h1>
                        <div className="flex gap-3">
                            <div className="rating rating-lg rating-half">
                                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-5 h-5" />
                                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-5 h-5" />
                                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-5 h-5" />
                                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-5 h-5" />
                                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-5 h-5" />
                            </div>
                            <h1>4.88 (8 reviews)</h1>
                        </div>
                        <div className="flex gap-6 items-center mt-2">
                            <h1 className="line-through font-thin">3.800,75</h1>
                            <h1 className="">380,70</h1>
                            <div className="rounded-full px-3 text-sm text-black bg-secoudary">Sale</div>
                        </div>
                        <div>
                            <div className="text-[#7f4db2] text-[15px]">Quantity</div>
                            <div className="w-[142px] h-[47px] flex items-center justify-center border-[1px] border-[#7f4db2] ">
                                <button
                                    className="w-[45px] h-full text-[#7f4db2] cursor-pointer"
                                >
                                    -
                                </button>
                                <input
                                    value='3'
                                    className="quantity-input border-none bg-transparent text-[#7f4db2] w-[50px] text-center outline-none"
                                    min={1}
                                    type={"number"}
                                />
                                <button
                                    className="w-[45px] h-full text-[#7f4db2] cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="bg-transparent text-red-700 border-[1px] border-red-700 mb-[10px] w-full mt-5 rounded-xl py-2"
                            >
                                Add to cart
                            </button>
                            <button className="bg-[#a4ef7d] text-[#0d1245] w-full rounded-xl py-2">
                                But it now
                            </button>
                        </div>
                        <h3 className="mt-4 font-secondary-family tracking-[0.03em] leading-7">Looking to master the art of trading and make profitable investments in today's fast-paced market? Look no further than the Ultimate Trading Mastery Bundle. This comprehensive collection of courses covers everything from basic trading principles to advanced techniques in crypto, forex, stocks, and more. With expert instructors and real-world examples, you'll gain the knowledge and skills needed to succeed in the world of trading. Whether you're a beginner or an experienced trader, the Ultimate Trading Mastery Bundle is the perfect tool to take your trading to the next level.</h3>
                        <h1 className="text-red-800 font-secondary-family mt-7">Share</h1>
                    </div>
                    <div className='flex flex-col gap-10 justify-center text-black'>
                        <img src={introImg} alt="intro-img" className='' />
                        <div>
                            <Swiper
                                // onSwiper={setSwiperRef}
                                slidesPerView={4}
                                centeredSlides={true}
                                spaceBetween={30}
                                pagination={{
                                    type: "fraction",
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-2xl'>4.67</h1>
                        <div className="rating rating-lg rating-half">
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-5 h-5" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-5 h-5" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-5 h-5" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-5 h-5" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-5 h-5" />
                        </div>
                        <h2 className='text-sm'>6 reviews</h2>
                    </div>
                    <div className='w-10/12'>
                        <div className="flex items-center mt-4">
                            <div className="text-sm font-medium flex gap-2 rating rating-lg rating-half">
                                <h1>5</h1>
                                <input type="radio" className="bg-yellow-800 mask mask-star-2 mask-half-1 w-4 h-4" />
                            </div>
                            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="h-5 bg-yellow-800 rounded-full w-[70%]"></div>
                            </div>
                            <span className="text-sm font-medium">(4)</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="text-sm font-medium flex gap-2 rating rating-lg rating-half">
                                <h1>4</h1>
                                <input type="radio" className="bg-yellow-800 mask mask-star-2 mask-half-1 w-4 h-4" />
                            </div>
                            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="h-5 bg-yellow-800 rounded-full w-[70%]"></div>
                            </div>
                            <span className="text-sm font-medium">(2)</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="text-sm font-medium flex gap-2 rating rating-lg rating-half">
                                <h1>3</h1>
                                <input type="radio" className="bg-yellow-800 mask mask-star-2 mask-half-1 w-4 h-4" />
                            </div>
                            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="h-5 bg-yellow-800 rounded-full w-[70%]"></div>
                            </div>
                            <span className="text-sm font-medium">(0)</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="text-sm font-medium flex gap-2 rating rating-lg rating-half">
                                <h1>2</h1>
                                <input type="radio" className="bg-yellow-800 mask mask-star-2 mask-half-1 w-4 h-4" />
                            </div>
                            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="h-5 bg-yellow-800 rounded-full w-[50%]"></div>
                            </div>
                            <span className="text-sm font-medium">(0)</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="text-sm font-medium flex gap-2 rating rating-lg rating-half">
                                <h1>1</h1>
                                <input type="radio" className="bg-yellow-800 mask mask-star-2 mask-half-1 w-4 h-4" />
                            </div>
                            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="h-5 bg-yellow-800 rounded-full w-[30%]"></div>
                            </div>
                            <span className="text-sm font-medium">(0)</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1>Share your experience</h1>
                        <div className="rating rating-lg rating-half">
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-4 h-4" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-4 h-4" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-4 h-4" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-4 h-4" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-4 h-4" />
                        </div>
                        <div className='bg-black text-white p-3'>Write a Review</div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}