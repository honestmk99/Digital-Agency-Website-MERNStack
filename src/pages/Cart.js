/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
// import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../assets/img/products/pro1-1.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper";
import { useContext, useState } from "react";
import { Project } from "../components/common/Project";
import { ProductContext } from "../App";

export const Cart = () => {
    const [buyCount, setBuyCount] = useState(1);
    const { products, setProducts } = useContext(ProductContext);

    const buyProject = (prop) => {
        if (buyCount > 1 && prop < 0) {
            setBuyCount(buyCount + prop);
        } else if (prop > 0) {
            setBuyCount(buyCount + prop);
        }
    }

    const goStore = () => {
        window.location.href = '/store'
    }
    const goPayment = () => {
        window.location.href = '/payment'
    }
    return (
        <>
            <div className="max-w-[160rem] m-auto text-third font-ft-primary px-20 mb-40 max-sm:px-5 max-sm:mb-20">
                {products.length === 0 ? (<>
                    <>
                        <div className="flex justify-between items-center">
                            <h1 className="text-6xl font-medium my-7 max-md:text-4xl">Your cart</h1>
                            <div onClick={() => goStore()} className="cursor-pointer">
                                <h2 className="underline underline-offset-4 text-red-800 max-md:text-xl">Continue shopping</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 font-ft-secondary">
                            <h2 className="text-2xl font-thin tracking-widest py-5 col-span-2 max-md:text-xl">PRODUCT</h2>
                            <h2 className="text-2xl font-thin tracking-widest py-5 col-span-1 max-lg:hidden">QUANTITY</h2>
                            <h2 className="text-2xl font-thin tracking-widest py-5 col-span-1 text-right max-lg:col-span-2 max-md:text-xl">TOTAL</h2>
                        </div>
                        <div className="border-y border-y-third">
                            <div className="grid grid-cols-4 my-10 gap-5">
                                <div className="col-span-2 flex gap-4 max-lg:col-span-1">
                                    <img src={Img} alt="pro1-1" className="w-[150px] h-[150px]" />
                                    <div className="w-5/12 max-lg:hidden">
                                        <h1 className="text-3xl tracking-[0.12rem] cursor-pointer hover:underline">Unlock the Secrets of Cryptocurrency with our Premium Crypto Courses!</h1>
                                        <h2 className="text-2xl tracking-[0.12rem] mt-2">$1.518,20</h2>
                                    </div>
                                </div>
                                <div className="col-span-1 max-lg:col-span-2">
                                    <div className="flex gap-8 max-lg:flex-col">
                                        <div className="hidden max-lg:block">
                                            <h1 className="text-4xl tracking-[0.12rem] cursor-pointer hover:underline">Unlock the Secrets of Cryptocurrency with our Premium Crypto Courses!</h1>
                                            <h2 className="text-2xl tracking-[0.12rem] mt-2">$1.518,20</h2>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="brightness-75">
                                                <h1 className="text-xl font-ft-secondary">Quantity</h1>
                                                <div className="flex pt-4">
                                                    <div className="border border-third p-4 grid grid-cols-3 gap-4 max-[1200px]:min-[850px]:p-2 max-[1200px]:min-[850px]:gap-2">
                                                        <div className="flex items-center justify-center cursor-pointer" onClick={() => buyProject(-1)}>
                                                            <h1>-</h1>
                                                        </div>
                                                        <div className="min-w-[3rem] flex justify-center items-center max-[1200px]:min-[850px]:min-w-[2rem] max-[1200px]:min-[850px]:text-xl">
                                                            <h1>{buyCount}</h1>
                                                        </div>
                                                        <div className="flex items-center justify-center cursor-pointer" onClick={() => buyProject(1)}>
                                                            <h1>+</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-red-800">delete</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 text-right">1.518,20</div>
                            </div>
                        </div>
                        <div className="flex items-end my-10 gap-3 flex-col">
                            <div className="flex gap-5 items-end">
                                <h1 className="text-6xl max-lg:text-4xl">Subtotal</h1>
                                <h1 className="text-5xl max-lg:text-3xl">$12.536,39</h1>
                            </div>
                            <h1 className="text-2xl font-thin tracking-wide">Taxes and shipping calculated at checkout</h1>
                            <div className="rounded-xl py-4 px-32 bg-secondary font-sans text-black shadow-bs-primary max-lg:px-20 cursor-pointer" onClick={() => goPayment()}>Check out</div>
                        </div>
                    </>
                    <div className="px-10">
                        <h1 className="uppercase text-7xl mb-10 max-md:text-5xl">you may also like</h1>
                        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1">
                            <Project />
                            <Project />
                            <Project />
                        </div>
                    </div>
                </>) : (
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <h1 className="text-7xl text-center max-md:text-5xl">Your cart is empty</h1>
                        <div className="rounded-xl px-6 py-3 bg-secondary shadow-bs-primary cursor-pointer transition-all duration-100 ease-in-out tracking-widest font-ft-secondary text-primary hover:scale-105 max-md:text-xl">Continue shopping</div>
                    </div>

                )}
            </div>
            {/* <div className="bg-[#0d1245] px-20">

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
                        <button onClick={() => prepend2()} className="prepend-2-slides">
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
                        </button>
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
                            <div className="flex justify-center">
                                <div className="rating rating-lg rating-half">
                                    <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}