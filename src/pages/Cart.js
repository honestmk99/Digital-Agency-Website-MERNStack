/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { useContext } from "react";
import { Project } from "../components/common/Project";
import { ProductContext, ProductListContext, TotalPrice } from "../App";
import { BuyCategory } from "../components/BuyCategory";

export const Cart = ({ setCount }) => {
    const { products } = useContext(ProductContext);
    const { productList } = useContext(ProductListContext);
    const { totalPrice, setTotalPrice } = useContext(TotalPrice);

    console.log('PRODC->>', products);

    const goStore = () => {
        window.location.href = '/store'
    }
    const goPayment = () => {
        window.location.href = '/payment'
    }
    return (
        <div className="max-w-[160rem] m-auto text-third font-ft-primary px-20 mb-40 max-sm:px-5 max-sm:mb-20">
            {products.length !== 0 ? (<>
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
                        {products.map((item, key) => {
                            return (<BuyCategory item={item} setTotalPrice={setTotalPrice} totalPrice={totalPrice} setCount={setCount} key={key} />)
                        })}


                    </div>
                    <div className="flex items-end my-10 gap-3 flex-col">
                        <div className="flex gap-5 items-end">
                            <h1 className="text-6xl max-lg:text-4xl">Subtotal</h1>
                            <h1 className="text-5xl max-lg:text-3xl">${totalPrice}</h1>
                        </div>
                        <h1 className="text-2xl font-thin tracking-wide">Taxes and shipping calculated at checkout</h1>
                        <div className="rounded-xl py-4 px-32 bg-secondary font-sans text-black shadow-bs-primary max-lg:px-20 cursor-pointer" onClick={() => goPayment()}>Check out</div>
                    </div>
                </>
                <div className="px-10">
                    <h1 className="uppercase text-7xl mb-10 max-md:text-5xl">you may also like</h1>
                    <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:gap-5 max-md:grid-cols-1">
                        {
                            productList.map((item) => {
                                return (
                                    <Project type={0} title={item[1]} f_price={item[2]} c_price={item[3]} id={item[0]} key={item[0]} />
                                )
                            })
                        }
                    </div>
                </div>
            </>) : (
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-7xl text-center max-md:text-5xl">Your cart is empty</h1>
                    <div className="rounded-xl px-6 py-3 bg-secondary shadow-bs-primary cursor-pointer transition-all duration-100 ease-in-out tracking-widest font-ft-secondary text-primary hover:scale-105 max-md:text-xl">Continue shopping</div>
                </div>

            )}
        </div>
    )
}