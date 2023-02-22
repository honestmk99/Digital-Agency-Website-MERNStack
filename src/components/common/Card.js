import React from 'react'
import { Chip, Button } from '@material-tailwind/react'
import Img from "../../assets/img/products/pro1-1.png"

const Card = (props) => {
    const { prod_name, first_price, current_price, img_url } = props
  return (
      <a className='w-[95%] mb-[30px] shadow-[0px_0px_8px_1px_#c471f5]' href='/details'>
            <img src={Img} alt='pro1-1' />
            <p className='text-[#c471f5] text-[15px] pl-[20px] pt-[20px] pr-[20px]'>{prod_name}</p>
            <div className='prod-price text-[#7f4db2] pl-[20px] text-[12px] pb-[40px]'>
              <span className='line-through pr-[15px]'>{first_price}</span>
              <span className='pr-[15px] text-[15px]'>{current_price}</span>
            </div>
            <div className='flex items-center justify-center'>
            <Button onClick={(e) => {
              e.preventDefault()
              window.location.href = "/cart"
            }} fullWidth className="bg-transparent w-[80%] text-[#c471f5] border-[1px] border-[#c471f5] mb-[10px] pl-[20px]">Add to cart</Button>
            </div>
          </a>
  )
}

export default Card
