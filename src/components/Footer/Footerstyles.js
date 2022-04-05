import styled from "styled-components";

export const FooterCont = styled.section`
  height: 150px;
  width: 100%;
  background-color: #3370a6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const FooterText = styled.p`
  grid-column: 1;
  padding: 10px;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const FooterText1 = styled.p`
  grid-column: 2;
  padding: 10px;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
export const FooterText2 = styled.p`
  grid-column: 3;
  padding: 10px;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
