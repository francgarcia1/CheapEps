import React from "react";
import {
  CardArtContainer,
  CardButton,
  CardNatContainer,
  Cartittle,
  DescSection,
  DescText,
  DescTittle,
  LinkButton,
} from "./Descriptionstyles";

const Description = () => {
  return (
    <DescSection>
      <DescTittle>Edulcorantes</DescTittle>
      <DescText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis <br></br> no strud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat <br></br>Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu
        <br></br>fugiat nulla pariatur.
      </DescText>
      <CardNatContainer>
        <Cartittle>Naturales</Cartittle>
        <CardButton>
          <LinkButton to="/naturales">Conoce mas!!</LinkButton>
        </CardButton>
      </CardNatContainer>
      <CardArtContainer>
        <Cartittle>Artificiales</Cartittle>
        <CardButton>
          <LinkButton to="/artificiales">Conoce mas!!</LinkButton>
        </CardButton>
      </CardArtContainer>
    </DescSection>
  );
};

export default Description;
