import React, { useState } from "react";
import { Button, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AddCart from "./AddCart";

const IntroCard = (props) => {
  let { Img, quantity, setQuantity, title, content } = props;
  const [isShow, setIsShow] = useState(false);

  const cartClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div className="pl-[70px] pt-[70px] pb-[60px] ">
        <div className="text-[#c471f5] text-[45px] font-bold pb-[15px] mb-[50px]">
          {title}
        </div>
        <div className="prod flex items-center justify-center">
          <div className="prod-img w-[50%] pl-[5%]">
            <img src={Img} alt="prod-img1" width="80%" />
          </div>
          <div className="pord-into w-[50%] pl-[5%] pr-[7%]">
            <div className="text-[10px] text-[#7f4db2] ">
              CREATUS MARKETING AGENCY
            </div>
            <div className="text-[40px] text-[#7f4db2] font-bold ">
              {content}
            </div>
            <div className="prod-price text-[#7f4db2]">
              <span className="line-through pr-[15px]">$300 USD</span>
              <span className="pr-[15px]">$29.99 USD</span>
              <Chip
                value="sale"
                className="text-[#0d1245] rounded-[15px] bg-[white] "
              />
            </div>
            <div>
              <div className="text-[#7f4db2] text-[15px]">Quantity</div>
              <div className="w-[142px] h-[47px] flex items-center justify-center border-[1px] border-[#7f4db2] ">
                <button
                  className="w-[45px] h-full text-[#7f4db2] cursor-pointer"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="quantity-input border-none bg-transparent text-[#7f4db2] w-[50px] text-center outline-none"
                  min={1}
                  type={"number"}
                />
                <button
                  className="w-[45px] h-full text-[#7f4db2] cursor-pointer"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="text-[#7f4db2] text-[18px] pt-[20px] pb-[20px]">
                MARKET VALUE :$1.600
              </div>
              <Button
                fullWidth
                onClick={cartClick}
                className="bg-transparent text-[red] border-[1px] border-[red] mb-[10px]"
              >
                Add to cart
              </Button>
              <Button fullWidth className="bg-[#a4ef7d] text-[#0d1245]">
                But it now
              </Button>
              <div className="flex justify-between">
                <button className="text-[red] pt-[20px]">Share</button>
                <Link to={`/details`} className="text-[red] pt-[20px]">
                  View full details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isShow && <AddCart />}
    </>
  );
};

export default IntroCard;