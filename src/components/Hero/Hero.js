import React from "react";
import {
  HeroSection,
  ImageHero,
  Imagelink,
  ImageText,
  ImageTittle,
} from "./Herostyles";

const Hero = (props) => {
  return (
    <HeroSection>
      <ImageHero imgURL={props.info.img} />
      <ImageTittle>{props.info.titulo}</ImageTittle>
      <ImageText>{props.info.descripcion}</ImageText>
      <Imagelink to="login">Registrate Aqui!!</Imagelink>
    </HeroSection>
  );
};

export default Hero;
