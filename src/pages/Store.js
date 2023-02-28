import { useContext } from 'react'
import { ProductListContext } from '../App';
// import {
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@material-tailwind/react";
// import Card from "../components/common/Card"
import Store_img from "../assets/img/store-img.png"
// import { supabase } from '../connectSupabase';
import { Project } from '../components/common/Project';


const Store = ({ setCount }) => {
  const { productList } = useContext(ProductListContext);

  return (
    <>
      <div className='max-w-[160rem] m-auto text-third font-ft-primary px-20 mb-40 max-sm:px-5 max-sm:mb-20'>
        <h1 className='text-8xl py-16 max-md:text-6xl'>Products</h1>
        <div className='grid grid-cols-4 gap-12 max-lg:grid-cols-3 max-md:grid-cols-1'>
          {
            productList.map((item) => {
              return (
                <Project type={1} id={item[0]} title={item[1]} f_price={item[2]} c_price={item[3]} setCount={setCount} key={item[0]} />
              )
            })
          }
        </div>
      </div>
      <div className="min-h-[56rem] relative flex items-center justify-center max-lg:min-h-[40rem] max-md:min-h-[30rem]">
        <div className="h-full w-full left-0 top-0 absolute overflow-hidden block ">
          <img src={Store_img} alt="store-img" className='absolute max-w-full block object-cover object-center' />
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center z-50 w-full'>
            <div className='bg-primary text-third flex items-center justify-center flex-col gap-12 max-w-[100rem] p-20 max-xl:max-w-[50rem] max-xl:p-10 max-md:gap-4 max-md:p-4'>
              <h1 className='uppercase text-7xl font-ft-primary text-center max-xl:text-5xl'>change your life today!</h1>
              <h2 className='font-ft-secondary text-center text-4xl leading-[4rem] max-xl:text-2xl'>Ready to take your life to the next level? Change your life today with our products and agency, providing you with the tools, training, and job opportunities you need to succeed.</h2>
              <div className='flex gap-8 text-primary'>
                <div className='cursor-pointer rounded-2xl px-20 py-8 bg-secondary max-xl:py-4 max-md:px-10'>
                  <h1 className='uppercase font-ft-secondary max-md:text-xl'>join now</h1>
                </div>
                <div className='cursor-pointer rounded-2xl px-20 py-8 bg-secondary max-xl:py-4 max-md:px-10'>
                  <h1 className='uppercase font-ft-secondary max-md:text-xl'>about us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-[#0d1245] flex flex-col items-center justify-center'>
        <div className='w-[90%]'>
          <div className='text-[40px] text-[#c471f5] font-bold pt-[50px]'>
            PRODUCT
          </div>
          {
          cartData && cartData.length > 0 &&
          cartData.map((item, index)=>{
            return(
              <div key = {index}>
                {item.name}
              </div>
            )
          })

        }
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
      {/* <div className='text-[#c471f5] pl-[10px]'>
        Total : 6 products
      </div>
    </div>
          </div >
  <div className='grid grid-cols-4'>
    {productData && productData.length > 0 &&
      productData.map((data, ind) => {
        console.log("sdfsdf", data)
        return (
          <Card key={ind} prod_name={data.prod_name} first_price={data.first_price} current_price={data.current_price} img_url={data.img_url} className='w-[95%] mb-[30px] shadow-[0px_0px_8px_1px_#c471f5]' />
        )
      })}
  </div>
        </div >
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
      </div > */}
    </>
  )
}

export default Store
