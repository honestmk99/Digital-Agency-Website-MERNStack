// import { Button } from "@material-tailwind/react";
import Img from "../../assets/img/products/pro1-1.png";

import { Link } from "react-router-dom";

const Card = (props) => {
  const { prod_name, first_price, current_price } = props;
  // const navigate = useNavigate();
  // const [detail, setDetail] = useState(false);
  // const [slide, setSlide] = useState(false);

  // const details = () => {
  //   navigate("/details");
  // };
  // useEffect(() => {}, [detail])
  // useEffect(() => {setDetail(false); setSlide(false);}, [slide])

  // useEffect(() => {
  //   console.log(detail, slide)
  //   if (slide && detail) {
  //     setDetail(false); setSlide(false);
  //     console.log('/')
  //     // window.location.href = '/'
  //   } else if (detail && !slide) {
  //     setDetail(false); setSlide(false);
  //     console.log('de')
  //     // window.location.href = '/detail'
  //   }
  // }, )
  return (
    <a
      className="w-[95%] mb-[30px] shadow-[0px_0px_8px_1px_#c471f5] flex flex-col content-between relative"
      href="/product"
    // onClick={() => {
    //   setDetail(true)
    //   console.log('WWWWWWW')
    //   // navigate("/details")
    // }}
    >
      <img src={Img} alt="pro1-1" />
      <div className="flex flex-col items-center ">
        <div className="">
          <div className="text-[#c471f5] text-[15px] pl-[20px] pt-[20px] pr-[20px] line-clamp-3">
            {prod_name}
          </div>
          <div className="prod-price text-[#7f4db2] pl-[20px] text-[12px] pb-[20px] mb-10">
            <span className="line-through pr-[15px]">{first_price}</span>
            <span className="pr-[15px] text-[15px]">{current_price}</span>
          </div>
        </div>

        <div className="flex justify-center content-between">
          <Link

            to="/cart"
            className="bg-transparent w-[80%] text-[#c471f5] border-[1px] border-[#c471f5] mb-[10px] pl-[20px]  bottom-[5px]"
          >
            Add to cart
          </Link>
          {/* <Button
            onClick={(e) => {
              e.preventDefault();

              window.location.herf = "/cart";
            }}
            className="bg-transparent w-[80%] text-[red] border-[1px] border-[red] mb-[10px] absolute"
          >
            Add to cart
          </Button> */}
        </div>
      </div>
    </a>
  );
};

export default Card;
