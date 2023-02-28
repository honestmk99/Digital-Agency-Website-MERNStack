/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { ProductContext, SelectProduct } from "../../App";
import Img from "../../assets/img/products/pro1-1.png";
import { Rating } from "../Rating";

export const Project = ({ type, title, f_price, c_price, id, setCount }) => {
    const { products, setProducts } = useContext(ProductContext);
    const { setProductID } = useContext(SelectProduct);
    const [localFlag, setLocalFlag] = useState(false);
    const [projects, storeProjects] = useLocalStorage('project', []);
    const [pID, setPID] = useLocalStorage('productId', null);
    let fleg = false;
    const goDetail = () => {
        if (!fleg) {
            window.location.href = '/product';
            setProductID(id);
            setPID(id)
        } else {
            let count = 0;
            let list = products;
            let ffleg = false;
            // eslint-disable-next-line array-callback-return
            list.map((item) => {
                if (item[0] === id) {
                    item[1]++;
                    ffleg = true
                }
                count += item[1];
            })
            if (!ffleg) {
                list = [...list, [id, 1]]
                count++;
            }
            setProducts(list);
            setCount(count);
            setLocalFlag(true)
        }
    }

    const goCart = () => {
        fleg = true
    }

    useEffect(() => {
        if (localFlag) {
            storeProjects(products);
        }
    }, [products, localFlag, storeProjects])

    useEffect(() => {
        if (projects.length && localFlag) {
            window.location.href = '/cart'
        }
    }, [projects, localFlag])

    return (
        <div className="group flex flex-col rounded-xl cursor-pointer shadow-bs-secondary text-third" onClick={() => goDetail()}>
            <div className="overflow-hidden">
                <img src={Img} alt="pro1-1" className="rounded-md w-full object-cover ease-in-out duration-500 group-hover:scale-105" />
            </div>
            <div className="grid p-12 max-xl:p-8 grid-rows-gt-primary grow">
                <div className="row-start-2">
                    <h1 className="font-ft-primary font-bold text-[2.5rem] tracking-wider group-hover:underline max-xl:md:text-2xl">{title}</h1>
                    {type ? <div className="flex justify-center items-center gap-4 mt-8 max-xl:mt-4">
                        <Rating />
                        <h1 className="text-4xl max-xl:md:text-2xl">(9)</h1>
                    </div> : <></>}
                    <div className="flex items-center gap-4 font-ft-secondary mt-8 max-xl:md:mt-4 max-lg:gap-2">
                        <h1 className="line-through max-xl:md:text-base">${f_price}</h1>
                        <h1 className="font-ft-secondary text-3xl max-xl:md:text-xl">${c_price}</h1>
                    </div>
                </div>
                {type ? (<div className="border border-third rounded-3xl m-10 py-8 shadow-bs-primary flex items-center justify-center transition-all duration-200 ease-in-out hover:shadow-bs-hover row-start-4" onClick={() => goCart()}>
                    <h1 className="text-4xl font-ft-secondary max-xl:text-3xl">Add to cart</h1>
                </div>) : <></>}
            </div>
        </div>
    )
}