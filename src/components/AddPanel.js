/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { useLocalStorage } from "react-use";
import { ProductContext } from "../App";
import { Rating } from "./Rating"

export const AddPanel = ({ id, f_price, c_price, img_url, title, setCount }) => {
    const [buyCount, setBuyCount] = useState(1);
    const [localFlag, setLocalFlag] = useState(false);
    const { products, setProducts } = useContext(ProductContext);
    const [projects, storeProjects] = useLocalStorage('project', []);

    const buyProject = (prop) => {
        if (buyCount > 1 && prop < 0) {
            setBuyCount(buyCount + prop);
        } else if (prop > 0) {
            setBuyCount(buyCount + prop);
        }
    }

    const goCart = async () => {
        let count = 0;
        let list = products;
        let fleg = false;
        list.map((item) => {
            if (item[0] === id) {
                item[1] += buyCount;
                fleg = true
            }
            count += item[1];
        })
        if (!fleg) {
            list = [...list, [id, buyCount]]
            count += buyCount;
        }
        setProducts(list);
        setCount(count);
        setLocalFlag(true)
    }

    useEffect(() => {
        if (localFlag) {
            storeProjects(products);
        }
    }, [products, localFlag])

    useEffect(() => {
        if (projects.length && localFlag) {
            window.location.href = '/cart'
        }
    }, [projects, localFlag])

    return (
        <>
            <h1 className="text-7xl max-[1200px]:min-[850px]:text-5xl max-[600px]:text-5xl">{title}</h1>
            <div className="flex items-center justify-center">
                <div className="flex gap-2">
                    <Rating type={1} />
                    <h1>(14)</h1>
                </div>
            </div>
            <div className="flex gap-4 font-ft-secondary items-center">
                <h1 className="line-through brightness-90 max-[1200px]:min-[850px]:text-2xl">${f_price}</h1>
                <h1 className="t text-4xl max-[1200px]:min-[850px]:text-3xl">${c_price}</h1>
                <div className="bg-secondary rounded-full text-black text-xl py-1 px-5"><h1>Sale</h1></div>
            </div>
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
            <div className="max-w-[44rem] flex flex-col gap-4">
                <div className="border border-red-800 text-red-800 w-full rounded-2xl font-ft-secondary text-center py-4 hover:shadow-bs-rhover cursor-pointer box-border shadow-bs-primary max-[1200px]:min-[850px]:min-[850px]:py-2" onClick={() => goCart()}>
                    <h1>Add to cart</h1>
                </div>
                <div className="border border-secondary text-primary w-full rounded-2xl font-ft-secondary text-center py-4 cursor-pointer box-border shadow-bs-primary bg-secondary max-[1200px]:min-[850px]:py-2">
                    <h1>Buy it now</h1>
                </div>
            </div>
        </>
    )
}