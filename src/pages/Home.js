/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import offerImg from "../assets/img/offer.png";
import introImg from "../assets/img/intro-img.png";
import discordImg from "../assets/img/discord.png";
import IntroCard from "../components/common/IntroCard";
import EscapeStep from "../components/common/EscapeStep";
import { Rating } from "../components/Rating";
import { Project } from "../components/common/Project";

const escapeData = [
  {
    header: "Step 1",
    body: "- Access our e-commerce store for powerful courses on psychology, crypto, IT, and more, designed to help you develop skills and knowledge to thrive in the modern digital world.",
  },
  {
    header: "Step 2",
    body: "- Join our agency to gain access to exclusive job opportunities, training, and powerful tools that can help you start or grow your career and business for FREE.",
  },
  {
    header: "Step 3",
    body: "- In order to truly escape the matrix, it's important to surround yourself with people who share your mindset and values. That's why our agency offers a community of like-minded individuals who are all working towards financial freedom and personal growth. Through our online platform, you can connect with others, share your experiences, and learn from each other. This community is a great place to find support and encouragement as you work towards your goals.",
  },
  {
    header: "Step 4",
    body: "- Use the skills and knowledge you've acquired to build a life of abundance, independence, and freedom. Whether you're looking to start a new business, build a side hustle, or pursue a fulfilling career, our services can help you get there faster and more efficiently than you ever thought possible.",
  },
];

const Home = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pt-32 max-w-[160rem] m-auto px-40 text-third font-ft-primary">
      <Project />
      <h1 className="py-40 text-8xl">The Red Pill</h1>
      <div className="grid grid-cols-2 gap-24">
        <div>
          <img src={offerImg} />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-ft-secondary">MatirxAIMovement</h1>
          <h1 className="text-6xl">The Ultimate Bundle: 1TB of Paid Courses Worth $200K+</h1>
          <div className="flex items-center justify-center">
            <div className="flex gap-2">
              <Rating type={1} />
              <h1>(14)</h1>
            </div>
          </div>
          <div className="flex gap-4 font-ft-secondary items-center">
            <h1 className="line-through brightness-90">19.003,75</h1>
            <h1 className="t text-4xl">3.799,99</h1>
            <div className="bg-secondary rounded-full text-black text-xl py-1 px-5"><h1>Sale</h1></div>
          </div>
          <div className="brightness-75">
            <h1 className="text-xl font-ft-secondary">Quantity (1 in cart)</h1>
            <div className="flex pt-4">
              <div className="border border-third p-4 grid grid-cols-3 gap-4">
                <div className="flex items-center justify-center">
                  <h1>-</h1>
                </div>
                <div className="k min-w-[3rem] flex justify-center">
                  <h1>11</h1>
                </div>
                <div className="flex items-center justify-center">
                  <h1>+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[44rem] flex flex-col gap-4">
            <div className="border border-red-800 text-red-800 w-full rounded-2xl font-ft-secondary text-center py-4 hover:border-2 cursor-pointer box-border shadow-bs-primary">
              <h1>Add to cart</h1>
            </div>
            <div className="border border-secondary text-primary w-full rounded-2xl font-ft-secondary text-center py-4 hover:border-2 cursor-pointer box-border shadow-bs-primary bg-secondary">
              <h1>Buy it now</h1>
            </div>
          </div>
          <div className="flex justify-between items-center text-red-800 mt-8">
            <h1 className="cursor-pointer hover:underline">Share</h1>
            <h1 className="cursor-pointer hover:underline">View full details →</h1>
          </div>
        </div>
      </div>
      <div className="my-40 grid grid-cols-2 gap-20">
        <div className="k scale-150">
          <img src={discordImg} alt="intro-img" />
        </div>
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="text-7xl leading-[6rem]">Join Our Movement and Unlock Your Potential Today!</h1>
          <h1 className="font-ft-secondary text-3xl leading-[3rem] tracking-[0.2rem]">Join our free agency and get access to exclusive training and job opportunities. Our agency offers free modules and information, as well as all the necessary tools to succeed in the industry. We provide our members with a supportive community and opportunities to earn money without any upfront costs. Don't miss out on this unique chance to build a successful career – join now!</h1>
          <div className="flex">
            <div className="bg-secondary rounded-2xl py-6 px-16 flex items-center justify-center shadow-bs-primary">
              <h1 className="uppercase text-primary font-ft-secondary text-3xl">join now</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="uppercase font-ft-secondary">the way to</h1>
        <h1 className="uppercase text-8xl">escape the matrix</h1>
        <div className="bg-secondary w-[80rem] text-primary p-8">
          <h1 className="text-5xl">Step 1</h1>
        </div>
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
