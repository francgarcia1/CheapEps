import styled from "styled-components";

export const Tittle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #338cf6;
  padding-left: 140px;
`;

export const InfoExtra = styled.article`
  font-weight: bold;
  font-size: 20px;
  color: black;
  padding-left: 140px;
  padding-right: 140px;
`;

export const AzContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const AzSelectorBox = styled.section`
  height: 300px;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  box-shadow: 0px 0px 13px 2px rgba(51, 140, 246, 0.95);
  border-radius: 15px;

  & > h2 {
    grid-column: 2;
  }
  & > button {
    grid-column: 2 /3;
    grid-row: 3;
    background-color: green;
    color: white;
  }
`;

export const InputValores = styled.input`
  margin-top: 35px;
  margin-left: 65px;
  border-radius: 15px;
  width: 200px;
  height: 50px;
  grid-column: 2 / 3;
  grid-row: 2;
`;

export const Menu = styled.ul`
  list-style-type: none;
  width: 200px;
  grid-column: 1;
  grid-row: 2;
  background-color: #338cf6;
  border-radius: 15px;

  /* main LI */
  & > li {
    & > div {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      font-weight: bold;

      &:hover {
        background-color: green;
        border-radius: 15px;
      }
    }
  }
  /* dropdown LI */
  & > .dropdown {
    display: inline-block;

    & > .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

      & > div {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }

    &:hover .dropdown-content {
      display: block;
    }
  }
`;
