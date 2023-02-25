import { Fragment, useEffect, useState } from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Card from "../components/common/Card"
import Store_img from "../assets/img/store-img.png"
import { supabase } from '../connectSupabase';


// const prodData = [
//   {
//     prod_name: "Iman Gadzhi's BEST Courses",
//     first_price: "$150.00 USD",
//     current_price: "$15.00 USD",
//     img_url: '../../assets/img/products/pro1-1.png'
//   },
//   {
//     prod_name: "product2",
//     first_price: "$50.00 USD",
//     current_price: "$3.00 USD",
//     img_url: '../../assets/img/products/pro1-1.png'
//   },
//   {
//     prod_name: "product3",
//     first_price: "$50.00 USD",
//     current_price: "$3.00 USD",
//     img_url: '../../assets/img/products/pro1-1.png'
//   },
//   {
//     prod_name: "product4",
//     first_price: "$50.00 USD",
//     current_price: "$3.00 USD",
//     img_url: '../../assets/img/products/pro1-1.png'
//   },
// ];

const Store = () => {
  const [productData, setProductData] = useState();
  const getProductData = async () => {
    await supabase
      .from('products')
      .select(`id, prod_name, created_at, first_price, current_price, img_url`)
      .then((res) => {
        res.data && setProductData(res.data);
      });
  };
  useEffect(() => {
    getProductData()
  }, [])

  return (
    <div className='bg-[#0d1245] flex flex-col items-center justify-center'>
      <div className='w-[90%]'>
        <div className='text-[40px] text-[#c471f5] font-bold pt-[50px]'>
          PRODUCT
        </div>
        {/* {
          cartData && cartData.length > 0 &&
          cartData.map((item, index)=>{
            return(
              <div key = {index}>
                {item.name}
              </div>
            )
          })

        } */}
        <div className='store-feature flex items-center justify-between'>
          <button className='text-[red] pt-[20px]'>Filter</button>
          <div className='flex items-center justify-between'>
            <label className="text-[#c471f5] pr-[10px]">Sort by : </label>
            {/* <Fragment className="">
              <Menu placement="bottom">
                <MenuHandler>
                  <Button className='bg-transparent shadow-none hover:shadow-none text-[#c471f5] flex items-center justify-between'>Sort &nbsp;
                    <svg width="10px" aria-hidden="true" focusable="false" className="icon icon-caret" viewBox="0 0 10 6">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="#c471f5">
                      </path></svg></Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>featured</MenuItem>
                  <MenuItem>Best selling</MenuItem>
                  <MenuItem>Alphabetically, A-Z</MenuItem>
                  <MenuItem>Alphabetically, Z-A</MenuItem>
                  <MenuItem>Price, low to high</MenuItem>
                  <MenuItem>Price, high to low</MenuItem>
                  <MenuItem>Date, old to new</MenuItem>
                  <MenuItem>Date, new to old</MenuItem>
                </MenuList>
              </Menu>
            </Fragment> */}
            <div className='text-[#c471f5] pl-[10px]'>
              Total : 6 products
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4'>
          {productData && productData.length > 0 &&
            productData.map((data, ind) => {
              console.log("sdfsdf", data)
              return (
                <Card key={ind} prod_name={data.prod_name} first_price={data.first_price} current_price={data.current_price} img_url={data.img_url} className='w-[95%] mb-[30px] shadow-[0px_0px_8px_1px_#c471f5]' />
              )
            })}
        </div>
      </div>
      <div className='flex items-center justify-center w-full pb-[60px] '>
        <img src={Store_img} alt="store-img" className='h-[500px] w-full' />
        <div className='absolute flex flex-col items-center justify-center bg-[#0d1245] mx-[20%] p-[35px]'>
          <div className='intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]'>
            CHANGE YOUR LIFE TODAY !
          </div>
          <div className='intro-content text-[#7f4db2] text-[18px] text-center'>
            Ready to take your life to the next level? Change your life today with our products and agency, providing you with the tools, training, and job opportunities you need to succeed.
          </div>
          <div className='flex items-center justify-center pt-[40px]'>
            <Button className='bg-[#a4ef7d] text-[#0d1245] font-thin px-[60px] mx-[10px]'>JOIN NOW</Button>
            <Button className='bg-[#a4ef7d] text-[#0d1245] font-thin px-[60px] mx-[10px]'>ABOUT US</Button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Store
