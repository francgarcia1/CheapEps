import React from "react";
import {
  HeroSection,
  ImageHero,
  ImageText,
  ImageTittle,
} from "../Hero/Herostyles";

const Heroaz = (props) => {
  const { info } = props;
  return (
    <HeroSection>
      <ImageHero
        imgURL={
          "https://static.eldiario.es/clip/6282d32c-a311-41b3-9127-900bbe498a14_16-9-discover-aspect-ratio_default_0.jpg"
        }
      />
      <ImageTittle>{info.titulo}</ImageTittle>
      <ImageText>
        En esta pagina prodras hacer seguimiento
        <br></br>a tus consumos de edulcorantes
      </ImageText>
    </HeroSection>
  );
};

export default Heroaz;
