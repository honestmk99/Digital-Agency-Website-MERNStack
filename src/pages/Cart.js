/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../assets/img/products/pro1-1.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const Cart = () => {
    return (<div className="bg-[#0d1245] px-20">
        <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-[rgb(196,113,245)] font-primary text-7xl">Your cart is empty</h1>
            <div className="rounded-xl px-6 py-3 bg-[rgb(146,239,125)] shadow-[0px_2px_6px_1px_rgb(196,113,245)] cursor-pointer transition-all duration-100 ease-in-out tracking-widest font-semibold hover:scale-105">Continue shopping</div>
        </div>
        <div className="text-[rgb(196,113,245)] font-primary">
            <div className="flex justify-between items-center">
                <h1 className="text-6xl font-medium my-7">Your cart</h1>
                <h2 className="underline underline-offset-4 text-red-800">Continue shopping</h2>
            </div>
            <div className="grid grid-cols-4">
                <h2 className="text-xs font-thin tracking-widest py-5 col-span-2">PRODUCT</h2>
                <h2 className="text-xs font-thin tracking-widest py-5 col-span-1">QUANTITY</h2>
                <h2 className="text-xs font-thin tracking-widest py-5 col-span-1 text-right">TOTAL</h2>
            </div>
            <div className=" border-y border-y-[rgba(197,113,245,0.47)]">
                <div className="grid grid-cols-4 my-10">
                    <div className="col-span-2 flex gap-4">
                        <img src={Img} alt="pro1-1" className="w-[150px] h-[150px]" />
                        <div className="w-5/12">
                            <h1 className="text-xl font-semibold tracking-[0.12rem] cursor-pointer hover:underline">Unlock the Secrets of Cryptocurrency with our Premium Crypto Courses!</h1>
                            <h2 className="text-sm tracking-[0.12rem] mt-2 font-thin">1.518,20</h2>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex gap-8 items-center">
                            <div className="w-[142px] h-[47px] flex items-center justify-center border-[1px] border-[#7f4db2] ">
                                <button
                                    className="w-[45px] h-full text-[#7f4db2] cursor-pointer"
                                // onClick={() => {
                                //     if (quantity > 1) setQuantity(quantity - 1);
                                // }}
                                >
                                    -
                                </button>
                                <input
                                    // value={quantity}
                                    // onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="quantity-input border-none bg-transparent text-[#7f4db2] w-[50px] text-center outline-none"
                                    min={1}
                                    type={"number"}
                                />
                                <button
                                    className="w-[45px] h-full text-[#7f4db2] cursor-pointer"
                                // onClick={() => {
                                //     setQuantity(quantity + 1);
                                // }}
                                >
                                    +
                                </button>
                            </div>
                            <div className="text-red-800">delete</div>
                        </div>
                    </div>
                    <div className="col-span-1 text-right">1.518,20</div>
                </div>
            </div>
            <div className="flex items-end my-10 gap-3 flex-col">
                <div className="flex gap-5 items-end">
                    <h1 className="text-2xl font-bold">Subtotal</h1>
                    <h1>12.536,39</h1>
                </div>
                <h1 className="text-sm font-thin tracking-wide">Taxes and shipping calculated at checkout</h1>
                <div className="r rounded-xl py-4 px-32 bg-[#a4ef7d] font-sans text-black shadow-[0px_2px_12px_-3px_rgb(196,113,245)]">Check out</div>
                <div className="r rounded-xl py-4 px-32 bg-[#ffc439] font-sans text-black shadow-[0px_2px_12px_-3px_rgb(196,113,245)]">Check out</div>
            </div>
        </div>
        <div className="px-32">
            <h1 className="text-[rgb(196,113,245)] font-primary mb-8">Recently Viewed</h1>
            <Swiper
                // onSwiper={setSwiperRef}
                slidesPerView={6}
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

            <p className="append-buttons">
                {/* <button onClick={() => prepend2()} className="prepend-2-slides">
                    Prepend 2 Slides
                </button>
                <button onClick={() => prepend()} className="prepend-slide">
                    Prepend Slide
                </button>
                <button onClick={() => append()} className="append-slide">
                    Append Slide
                </button>
                <button onClick={() => append2()} className="append-2-slides">
                    Append 2 Slides
                </button> */}
            </p>
        </div>
        <div className="text-[rgb(196,113,245)] font-primary px-10">
            <h1 className="uppercase text-7xl mb-10">you may also like</h1>
            <div className="grid grid-cols-3 gap-10">
                <div className="group flex-col flex justify-center relative overflow-hidden rounded-md cursor-pointer shadow-[0px_0px_11px_3px_rgb(196,113,245)]">
                    <div className="overflow-hidden">
                        <img src={Img} alt="pro1-1" className="rounded-md w-full object-cover ease-in-out duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                        <h1 className="group-hover:underline mt-10 text-3xl">Iman Gadzhi's BEST Courses</h1>
                        <div className="grid grid-cols-3 mt-5">
                            <h1 className="text-sm line-through font-light col-span-1 tracking-[0.15em]">11.402,25</h1>
                            <h1 className="text-base col-span-1 tracking-[0.15em]">1.140,22</h1>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <div className="rating rating-lg rating-half">
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>)
}