/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { ProductContext, ProductListContext } from "../App";
import Img from "../assets/img/products/pro1-1.png";

export const BuyCategory = ({ item, totalPrice, setTotalPrice, setCount }) => {
    const { productList } = useContext(ProductListContext);
    const { products } = useContext(ProductContext);
    const [projects, storeProjects] = useLocalStorage('project', []);
    const [buyCount, setBuyCount] = useState(1);
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        if (!title) {
            productList.map((product) => {
                if (product[0] === item[0]) {
                    setTitle(product[1])
                    setPrice(product[3].toFixed(2))
                    setBuyCount(item[1]);
                }
            })
        }
    })

    const buyProject = (prop) => {
        let current;
        let count = 0;
        products.map((product) => {
            if (product[0] === item[0]) {
                current = product;
            }
            count += product[1]
        })
        if (buyCount > 1 && prop < 0) {
            setBuyCount(buyCount + prop);
            current[1] += prop;
            count += prop;
            const amount = +totalPrice + prop * price;
            setTotalPrice(amount.toFixed(2))
        } else if (prop > 0) {
            setBuyCount(buyCount + prop);
            current[1] += prop;
            count += prop;
            const amount = +totalPrice + prop * price;
            console.log('TTTTT', +totalPrice, prop * price)
            setTotalPrice(amount.toFixed(2))
        }
        setCount(count);
        storeProjects(products)
    }
    return (
        <div className="grid grid-cols-4 my-10 gap-5">
            <div className="col-span-2 flex gap-4 max-lg:col-span-1">
                <img src={Img} alt="pro1-1" className="w-[150px] h-[150px]" />
                <div className="w-5/12 max-lg:hidden">
                    <h1 className="text-3xl tracking-[0.12rem] cursor-pointer hover:underline">{title}</h1>
                    <h2 className="text-2xl tracking-[0.12rem] mt-2">${price}</h2>
                </div>
            </div>
            <div className="col-span-1 max-lg:col-span-2">
                <div className="flex gap-8 max-lg:flex-col">
                    <div className="hidden max-lg:block">
                        <h1 className="text-4xl tracking-[0.12rem] cursor-pointer hover:underline">{title}</h1>
                        <h2 className="text-2xl tracking-[0.12rem] mt-2">${price}</h2>
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
            <div className="col-span-1 text-right">${(buyCount * price).toFixed(2)}</div>
        </div>
    )
}