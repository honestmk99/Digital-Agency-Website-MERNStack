import Img from "../../assets/img/products/pro1-1.png";
import { Rating } from "../Rating";

export const Project = ({ type }) => {
    let fleg = false;
    const goDetail = () => {
        if (!fleg) {
            window.location.href = '/product'
        } else {
            console.log('twer')
            window.location.href = '/cart'
        }
    }
    const goCart = () => {
        fleg = true
    }
    return (
        <div className="group flex flex-col rounded-xl cursor-pointer shadow-bs-secondary text-third" onClick={() => goDetail()}>
            <div className="overflow-hidden">
                <img src={Img} alt="pro1-1" className="rounded-md w-full object-cover ease-in-out duration-500 group-hover:scale-105" />
            </div>
            <div className="p-12 max-xl:p-8">
                <h1 className="font-ft-primary font-bold text-[2.5rem] tracking-wider group-hover:underline max-xl:md:text-2xl">Iman Gadzhi's BEST Courses</h1>
                {!type ? <div className="flex justify-center items-center gap-4 mt-8 max-xl:mt-4">
                    <Rating />
                    <h1 className="text-4xl max-xl:md:text-2xl">(9)</h1>
                </div> : <></>}
                <div className="flex items-center gap-4 font-ft-secondary mt-8 max-xl:md:mt-4">
                    <h1 className="line-through max-xl:md:text-xl">11.402,51</h1>
                    <h1 className="font-ft-secondary text-3xl max-xl:md:text-2xl">11.140,25</h1>
                </div>
            </div>
            {!type ? (<div className="border border-third rounded-3xl m-10 py-8 shadow-bs-primary flex items-center justify-center transition-all duration-200 ease-in-out hover:shadow-bs-hover" onClick={() => goCart()}>
                <h1 className="text-4xl font-ft-secondary max-xl:text-3xl">Add to cart</h1>
            </div>) : <></>}
        </div>
    )
}