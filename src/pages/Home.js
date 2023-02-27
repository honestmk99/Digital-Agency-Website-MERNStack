/* eslint-disable jsx-a11y/alt-text */
// import { useState } from "react";
// import { Button } from "@material-tailwind/react";
import offerImg from "../assets/img/offer.png";
// import introImg from "../assets/img/intro-img.png";
import discordImg from "../assets/img/discord.png";
// import IntroCard from "../components/common/IntroCard";
// import EscapeStep from "../components/common/EscapeStep";
// import { Rating } from "../components/Rating";
// import { Project } from "../components/common/Project";
import { AddPanel } from "../components/AddPanel";
import { Step } from "../components/Step";
import { useContext } from "react";
import { ProductListContext } from "../App";

const Home = ({ setCount }) => {
  const { productList } = useContext(ProductListContext);

  return (
    <div className="max-w-[160rem] m-auto px-40 text-third font-ft-primary max-[600px]:px-5">
      <h1 className="py-40 text-8xl max-[1200px]:text-6xl max-[1200px]:py-20">The Red Pill</h1>
      <div className="grid grid-cols-2 gap-24 max-[850px]:grid-cols-1">
        <div>
          <img src={offerImg} />
        </div>
        <div className="flex flex-col gap-8 max-[1200px]:gap-4">
          <h1 className="font-ft-secondary">CREATUS MARKETING AGENCY</h1>
          <AddPanel id={productList[0][0]} setCount={setCount} title={productList[0][1]} f_price={productList[0][2]} c_price={productList[0][3]} />
          <div className="flex justify-between items-center text-red-800 mt-8">
            <h1 className="cursor-pointer hover:underline">Share</h1>
            <h1 className="cursor-pointer hover:underline">View full details →</h1>
          </div>
        </div>
      </div>
      <div className="my-40 grid grid-cols-2 gap-20 max-[850px]:grid-cols-1 max-[850px]:my-20 max-[850px]:gap-4">
        <div className="">
          <img src={discordImg} alt="intro-img" />
        </div>
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="text-7xl leading-[6rem] max-[1200px]:min-[850px]:text-6xl max-[450px]:text-5xl">Join Our Movement and Unlock Your Potential Today!</h1>
          <h1 className="font-ft-secondary text-3xl leading-[3rem] tracking-[0.2rem] max-[1200px]:min-[850px]:text-2xl max-[450px]:text-lg">Join our free agency and get access to exclusive training and job opportunities. Our agency offers free modules and information, as well as all the necessary tools to succeed in the industry. We provide our members with a supportive community and opportunities to earn money without any upfront costs. Don't miss out on this unique chance to build a successful career – join now!</h1>
          <div className="flex">
            <div className="bg-secondary rounded-2xl py-6 px-16 flex items-center justify-center shadow-bs-primary cursor-pointer" onClick={() => {
              window.location.href = 'https://discord.gg/Ssu5KC2Z';
            }}>
              <h1 className="uppercase text-primary font-ft-secondary text-3xl max-[600px]:text-2xl">join now</h1>
              {/* <input type="button" onclick="location.href='https://google.com';" value="Go to Google" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="uppercase font-ft-secondary">the way to</h1>
        <h1 className="uppercase text-8xl max-[1200px]:text-6xl">escape the matrix</h1>
        <Step title={'Step1'} text={'Access our e-commerce store for powerful courses on psychology, crypto, IT, and more, designed to help you develop skills and knowledge to thrive in the modern digital world.'} />
        <Step title={'Step2'} text={'Access our e-commerce store for powerful courses on psychology, crypto, IT, and more, designed to help you develop skills and knowledge to thrive in the modern digital world.'} />
        <Step title={'Step3'} text={'Access our e-commerce store for powerful courses on psychology, crypto, IT, and more, designed to help you develop skills and knowledge to thrive in the modern digital world.'} />
      </div>
    </div>
    // <div className="">
    //   <IntroCard
    //     Img={offerImg}
    //     setQuantity={setQuantity}
    //     quantity={quantity}
    //     title="Best Seller"
    //     content="Transform Your Life with Andrew Tate's OG Courses"
    //   />
    //   <div className="flex items-center justify-center pt-[60px]">
    //     <div className="intro  w-[50%] pl-[140px] pr-[30px]">
    //       <div className="intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]">
    //         The Creatus Marketing Agency: Join the Revolution and Transform the
    //         Internet
    //       </div>
    //       <Button
    //         onClick={(e) => {
    //           e.preventDefault();
    //           window.location.href = "/store";
    //         }}
    //         variant="filled"
    //         className="bg-[#a4ef7d] text-[#0d1245] font-thin"
    //       >
    //         SHOP NOW
    //       </Button>
    //     </div>
    //     <div className="intro-img  w-[50%] pr-[70px]">
    //       <img src={introImg} alt="intro-img" />
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center">
    //     <div className="intro-img  w-[50%] pr-[70px]">
    //       <img src={discordImg} alt="intro-img" />
    //     </div>
    //     <div className="intro  w-[50%] pl-[30px] pr-[140px]">
    //       <div className="intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]">
    //         Join Our Movement and Unlock Your Potential Today!
    //       </div>
    //       <div className="intro-content text-[#7f4db2] text-[15px]">
    //         Join our free agency and get access to exclusive training and job
    //         opportunities. Our agency offers free modules and information, as
    //         well as all the necessary tools to succeed in the industry. We
    //         provide our members with a supportive community and opportunities to
    //         earn money without any upfront costs. Don't miss out on this unique
    //         chance to build a successful career – join now!
    //         <br />
    //         <br />
    //       </div>
    //       <Button
    //         variant="filled"
    //         className="bg-[#a4ef7d] text-[#0d1245] font-thin"
    //       >
    //         JOIN NOW
    //       </Button>
    //     </div>
    //   </div>
    //   <div className="escape flex flex-col items-center justify-center ">
    //     <div className="text-[12px] text-[#7f4db2] ">THE WAY TO</div>
    //     <div className="text-[53px] text-[#c471f5] font-bold ">
    //       ESCAPE THE MATRIX
    //     </div>
    //     <div className="w-[50%]">
    //       {escapeData.map((data, key) => {
    //         return (
    //           <EscapeStep
    //             header={data.header}
    //             body={data.body}
    //             key={key}
    //             className="p-2.5;"
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
