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


      {isShow && <AddCart />}
    </>
  );
};

export default IntroCard;