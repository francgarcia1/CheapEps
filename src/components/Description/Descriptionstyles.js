import { Link } from "react-router-dom";
import styled from "styled-components";

export const DescSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-bottom: 100px;
`;

export const DescTittle = styled.h1`
  grid-column: 1;
  font-weight: bold;
  font-size: 45px;
  color: #096b6b;
  padding-top: 75px;
  margin-left: 120px;
`;

export const DescText = styled.p`
  grid-row: 2;
  font-size: 20px;
  color: black;
  margin-top: 0px;
  margin-left: 60px;
  text-align: justify;
  text-justify: inter-word;
`;

export const CardNatContainer = styled.section`
  grid-column: 2;
  grid-row: 1;
  background-color: black;
  background-color: white;
  width: 500px;
  height: 150px;
  margin-top: 25px;
  margin-left: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px -2px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 3px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  &:hover {
      transform: scale(1.1, 1.1);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 15px rgba(0, 0, 0, 0.22);        
    }
  }
`;

export const CardArtContainer = styled.section`
  grid-column: 2;
  grid-row: 2;
  background-color: black;
  background-color: white;
  width: 500px;
  height: 150px;
  margin-top: 25px;
  margin-left: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px -2px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 3px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  &:hover {
      transform: scale(1.1, 1.1);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 15px rgba(0, 0, 0, 0.22);        
    }
  }
`;

export const Cartittle = styled.h1`
  padding-top: 30px;
  font-weight: bold;
  font-size: 25px;
  margin-left: 20px;
  color: #096b6b;
`;

export const CardButton = styled.button`
  position: relative;
  width: 180px;
  left: 250px;
  bottom: 60px;
  font-weight: bold;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #096b6b;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

export const LinkButton = styled(Link)`
  font-weight: bold;
  font-size: 17px;
  color: white;
  text-decoration: none;
`;
