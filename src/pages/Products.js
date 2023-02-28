/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import introImg from '../assets/img/seller.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Rating } from '../components/Rating';
import { AddPanel } from '../components/AddPanel';
import { ProductListContext, SelectProduct } from '../App';
import { useContext, useEffect, useState } from 'react';

export const Products = ({ setCount }) => {
    const { productID } = useContext(SelectProduct);
    const { productList } = useContext(ProductListContext);
    const [product, setProduct] = useState();

    useEffect(() => {
        productList.map((item) => {
            if (item[0] === +productID) {
                setProduct(item);
            }
        })
    }, [productID, productList])

    return (
        <>
            <div className='max-w-[160rem] m-auto  text-third font-ft-primary px-20 max-md:px-5'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1'>
                    <div className='w-9/12 flex flex-col gap-8 max-lg:order-2 max-lg:mt-16'>
                        {product ?
                            <>
                                <AddPanel id={product[0]} f_price={product[2]} c_price={product[3]} title={product[1]} setCount={setCount} />
                                <div className='flex flex-col gap-8'>
                                    <h1 className='font-ft-secondary leading-[4rem] tracking-wide'>
                                        {product[4]}
                                    </h1>
                                </div>
                            </>
                            : <></>}
                    </div>
                    <div className='flex flex-col gap-10 justify-center text-black max-lg:order-1'>
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
                <div className='flex items-center justify-center my-10'>
                    <div className='flex gap-20 items-center font-ft-secondary max-xl:flex-col'>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <h1 className='text-5xl'>4.67</h1>
                            <Rating />
                            <h2 className='text-2xl'>6 reviews</h2>
                        </div>
                        <div className=''>
                            <div className="flex items-center mt-4">
                                <div className="text-2xl font-medium flex gap-2 rating rating-lg rating-half">
                                    <h1>5</h1>
                                    <input type="radio" className="bg-yellow-700 mask mask-star-2 mask-half-1 w-4 h-4" />
                                </div>
                                <div className="w-[60rem] h-5 mx-4 bg-gray-200 rounded-full max-lg:w-[40rem] max-md:w-[25rem]">
                                    <div className="h-5 bg-yellow-700 rounded-full w-[70%]"></div>
                                </div>
                                <span className="text-2xl font-medium">(4)</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="text-2xl font-medium flex gap-2 rating rating-lg rating-half">
                                    <h1>4</h1>
                                    <input type="radio" className="bg-yellow-700 mask mask-star-2 mask-half-1 w-4 h-4" />
                                </div>
                                <div className="w-[60rem] h-5 mx-4 bg-gray-200 rounded-full max-lg:w-[40rem] max-md:w-[25rem]">
                                    <div className="h-5 bg-yellow-700 rounded-full w-[70%]"></div>
                                </div>
                                <span className="text-2xl font-medium">(2)</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="text-2xl font-medium flex gap-2 rating rating-lg rating-half">
                                    <h1>3</h1>
                                    <input type="radio" className="bg-yellow-700 mask mask-star-2 mask-half-1 w-4 h-4" />
                                </div>
                                <div className="w-[60rem] h-5 mx-4 bg-gray-200 rounded-full max-lg:w-[40rem] max-md:w-[25rem]">
                                    <div className="h-5 bg-yellow-700 rounded-full w-[70%]"></div>
                                </div>
                                <span className="text-2xl font-medium">(0)</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="text-2xl font-medium flex gap-2 rating rating-lg rating-half">
                                    <h1>2</h1>
                                    <input type="radio" className="bg-yellow-700 mask mask-star-2 mask-half-1 w-4 h-4" />
                                </div>
                                <div className="w-[60rem] h-5 mx-4 bg-gray-200 rounded-full max-lg:w-[40rem] max-md:w-[25rem]">
                                    <div className="h-5 bg-yellow-700 rounded-full w-[50%]"></div>
                                </div>
                                <span className="text-2xl font-medium">(0)</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="text-2xl font-medium flex gap-2 rating rating-lg rating-half">
                                    <h1>1</h1>
                                    <input type="radio" className="bg-yellow-700 mask mask-star-2 mask-half-1 w-4 h-4" />
                                </div>
                                <div className="w-[60rem] h-5 mx-4 bg-gray-200 rounded-full max-lg:w-[40rem] max-md:w-[25rem]">
                                    <div className="h-5 bg-yellow-700 rounded-full w-[30%]"></div>
                                </div>
                                <span className="text-2xl font-medium">(0)</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-8'>
                            <h1>Share your experience</h1>
                            <Rating />
                            <div className='bg-black text-white p-3'>Write a Review</div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[120rem] m-auto font-ft-secondary text-black my-12'>
                    <div className='grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                        <div className='flex flex-col flex-1 gap-6'>
                            <div className='rounded-2xl bg-white p-3 flex flex-col gap-4'>
                                <div>
                                    <h1 className=' font-semibold'>Emelie</h1>
                                    <Rating />
                                </div>
                                <h1>2023-02-25</h1>
                                <h1>I am a huge fan of Grant Cardone's work, so I purchased this bundle. I am so happy that I did because these materials have helped me see the success that is possible for me.</h1>
                            </div>
                            <div className='rounded-2xl bg-white p-3 flex flex-col gap-4'>
                                <div>
                                    <h1 className=' font-semibold'>Emelie</h1>
                                    <Rating />
                                </div>
                                <h1>2023-02-25</h1>
                                <h1>I found that the strategies in this book were easy to follow and will help anyone reach their goals.</h1>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 gap-6'>
                            <div className='rounded-2xl bg-white p-3 flex flex-col gap-4'>
                                <div>
                                    <h1 className=' font-semibold'>Emelie</h1>
                                    <Rating />
                                </div>
                                <h1>2023-02-25</h1>
                                <h1>I recommend this bundle for anyone looking for a way to finally get ahead in life.</h1>
                            </div>
                            <div className='rounded-2xl bg-white p-3 flex flex-col gap-4'>
                                <div>
                                    <h1 className=' font-semibold'>Emelie</h1>
                                    <Rating />
                                </div>
                                <h1>2023-02-25</h1>
                                <h1>I am a big fan of Grant Cardone because he always has great advice and he is always motivating.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}