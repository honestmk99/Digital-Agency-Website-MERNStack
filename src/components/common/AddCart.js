import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import sellerImg from "../../assets/img/seller.png";

const AddCart = () => {
  return (
    <div className="flex flex-col justify-between p-[15px] w-[300px] h-[300px] bg-[#0d1245] border-[5px] border-[#201c57]">
      <div className="flex items-center justify-between">
        <div className="text-[#7f4db2] flex items-center justify-center">
          <svg
            class=" w-3 h-3 icon icon-checkmark color-foreground-text"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 9"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="text-[12px]">Item added to your cart</div>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          variant="filled"
          className="bg-[transparent] text-[#0d1245] font-thin w-3 h-5 shadow-none hover:shadow-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#7f4db2]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[20px]">
        <img src={sellerImg} alt="introImg" className="w-[60px]" />
        <div className="text-[#7f4db2] pl-[10px]">
          The Ultimate Learning Bundle: 1TB of Paid Courses Worth $200K+
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <Button
          fullWidth
          className="bg-transparent text-[red] border-[1px] border-[red] mb-[10px]"
        >
          View my cart
        </Button>
        <Button fullWidth className="bg-[#a4ef7d] text-[#0d1245]">
          Check out
        </Button>
        <Link to={`/store`} className="text-[red] underline">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default AddCart;
