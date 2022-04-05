import React from "react";
import AjustesAzucar from "../components/AjustesAzucares/AjustesAzucar";
import Hero from "../components/Hero/Hero";

const Naturales = (props) => {
  return (
    <>
      <Hero {...props} />
      <AjustesAzucar {...props}></AjustesAzucar>
    </>
  );
};

export default Naturales;
