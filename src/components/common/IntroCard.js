import React, { useState } from "react";
import { Button, Chip } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { ShareIcon } from "../../icon";

const IntroCard = (props) => {
    let { Img, quantity, setQuantity, title, content } = props
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div className='offer pl-[70px] pb-[60px] '>
            <p className='offer-title text-[#c471f5] text-[45px] font-bold pb-[15px] mb-[50px]'>
                {title}
            </p>
            <div className='prod flex items-center justify-center'>
                <div className='prod-img w-[50%] pl-[5%]'>
                    <img src={Img} alt="prod-img1" width="80%" />
                </div>
                <div className='pord-into w-[50%] pl-[5%] pr-[7%]'>
                    <p className='text-[10px] text-[#7f4db2] '>
                    CREATUS MARKETING AGENCY
                    </p>
                    <p className='text-[40px] text-[#7f4db2] font-bold '>
                        {content}
                    </p>
                    <div className='prod-price text-[#7f4db2]'>
                        <span className='line-through pr-[15px]'>$300 USD</span>
                        <span className='pr-[15px]'>$29.99 USD</span>
                        <Chip value="sale" className='text-[#0d1245] rounded-[15px] bg-[white] ' />
                    </div>
                    <div>
                        <p className='text-[#7f4db2] text-[15px]'>Quantity</p>
                        <div className='w-[142px] h-[47px] flex items-center justify-center border-[1px] border-[#7f4db2] '>
                            <button className='w-[45px] h-full text-[#7f4db2] cursor-pointer' onClick={() => {
                                if (quantity > 1) setQuantity(quantity - 1)
                            }}>-</button>
                            <input value={quantity}
                                onChange={(e) =>
                                    setQuantity(parseInt(e.target.value))
                                }
                                className="quantity-input border-none bg-transparent text-[#7f4db2] w-[50px] text-center outline-none"
                                min={1}
                                type={"number"}
                            />
                            <button className='w-[45px] h-full text-[#7f4db2] cursor-pointer' onClick={() => {
                                setQuantity(quantity + 1)
                            }}>+</button>
                        </div>
                        <p className='text-[#7f4db2] text-[18px] pt-[20px] pb-[20px]'>MARKET VALUE :$1.600</p>
                        <Button onClick={() => setShowModal(true)} fullWidth className="bg-transparent text-[red] border-[1px] border-[red] mb-[10px]">Add to cart</Button>
                        <Button fullWidth className="bg-[#a4ef7d] text-[#0d1245]">But it now</Button>
                        <div className='flex justify-between'>
                            <button className='text-[red] pt-[20px]'>Share</button>
                            <Link to={`/details`} className="text-[red] pt-[20px]">
                                View full details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
        
        </>
    )
}

export default IntroCard