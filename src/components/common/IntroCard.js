import { Button, Chip } from "@material-tailwind/react";

const IntroCard = (props) => {
    let {Img, quantity, setQuantity, title, content} = props
    return (<div className='offer pl-[70px] pb-[100px]'>
    <p className='offer-title text-[#c471f5] text-[45px] font-bold pb-[15px]'>
      {title}
    </p>
    <div className='prod flex items-center justify-center'>
      <div className='prod-img pt-[70px] w-[50%] pl-[7%]'>
        <img src={Img} alt="prod-img1" width="80%" />
      </div>
      <div className='pord-into w-[50%] pl-[7%] pr-[7%]'>
        <p className='text-[10px] text-[#7f4db2] '>
          MATRIXAIMOVEMENT
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
                setQuantity(e.target.value)
              }
              className="quantity-input border-none bg-transparent text-[#7f4db2] w-[50px] text-center outline-none"
              min={1}
              type={"number"}
            />
            <button className='w-[45px] h-full text-[#7f4db2] cursor-pointer' onClick={() => {
              setQuantity(quantity + 1)
            }}>+</button>
          </div>
          <p className='text-[#7f4db2] text-[18px] pb-4'>MARKET VALUE :$1.600</p>

        </div>
      </div>
    </div>
  </div>)
}

export default IntroCard