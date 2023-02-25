import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import offerImg from "../assets/img/offer.png";
import introImg from "../assets/img/intro-img.png";
import discordImg from "../assets/img/discord.png";
import IntroCard from "../components/common/IntroCard";
import EscapeStep from "../components/common/EscapeStep";

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
    <div className="home bg-[#0d1245] ">
      <IntroCard
        Img={offerImg}
        setQuantity={setQuantity}
        quantity={quantity}
        title="Best Seller"
        content="Transform Your Life with Andrew Tate's OG Courses"
      />
      <div className="flex items-center justify-center pt-[60px]">
        <div className="intro  w-[50%] pl-[140px] pr-[30px]">
          <div className="intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]">
            The Creatus Marketing Agency: Join the Revolution and Transform the
            Internet
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/store";
            }}
            variant="filled"
            className="bg-[#a4ef7d] text-[#0d1245] font-thin"
          >
            SHOP NOW
          </Button>
        </div>
        <div className="intro-img  w-[50%] pr-[70px]">
          <img src={introImg} alt="intro-img" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="intro-img  w-[50%] pr-[70px]">
          <img src={discordImg} alt="intro-img" />
        </div>
        <div className="intro  w-[50%] pl-[30px] pr-[140px]">
          <div className="intro-title text-[#c471f5] text-[30px] font-bold pb-[15px]">
            Join Our Movement and Unlock Your Potential Today!
          </div>
          <div className="intro-content text-[#7f4db2] text-[15px]">
            Join our free agency and get access to exclusive training and job
            opportunities. Our agency offers free modules and information, as
            well as all the necessary tools to succeed in the industry. We
            provide our members with a supportive community and opportunities to
            earn money without any upfront costs. Don't miss out on this unique
            chance to build a successful career – join now!
            <br />
            <br />
          </div>
          <Button
            variant="filled"
            className="bg-[#a4ef7d] text-[#0d1245] font-thin"
          >
            JOIN NOW
          </Button>
        </div>
      </div>
      <div className="escape flex flex-col items-center justify-center ">
        <div className="text-[12px] text-[#7f4db2] ">THE WAY TO</div>
        <div className="text-[53px] text-[#c471f5] font-bold ">
          ESCAPE THE MATRIX
        </div>
        <div className="w-[50%]">
          {escapeData.map((data) => {
            return (
              <EscapeStep
                header={data.header}
                body={data.body}
                className="p-2.5;"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
