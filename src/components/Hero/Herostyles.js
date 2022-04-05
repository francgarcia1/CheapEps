import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSection = styled.section`
  height: 550px;
  width: 100%;
`;
export const ImageHero = styled.img`
  z-index: -1;
  height: 550px;
  width: 100%;
  background: linear-gradient(
      270deg,
      rgba(15, 114, 155, 1) 40%,
      rgba(315, 212, 707, 0.45)
    ),
    url(${(props) => props.imgURL});

  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px; ;
`;

export const ImageTittle = styled.p`
  font-weight: bold;
  font-size: 60px;
  color: white;
  position: absolute;
  top: 25%;
  left: 75%;
  transform: translate(-50%, -50%);
`;

export const ImageText = styled.p`
  font-size: 20px;
  color: white;
  position: absolute;
  top: 40%;
  left: 75%;
  transform: translate(-50%, -50%);
`;

export const Imagelink = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 55%;
  color: white;
  margin-left: 140px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
