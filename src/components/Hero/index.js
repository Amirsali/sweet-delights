import React, { useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroTitle,
  HeroSub,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  // useState
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroTitle>Sweetness That You Always Deserve</HeroTitle>
          <HeroSub>Free Delivery</HeroSub>
          <HeroBtn>Order Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
