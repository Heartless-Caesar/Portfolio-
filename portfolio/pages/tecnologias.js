import React from "react";
import Navbar from "../components/navbar";
import IDE from "../components/ides";
import Databases from "../components/databases";
//TODO: MAKE ALL BUTTONS SAME WIDTH

const Tecnologias = () => {
  return (
    <>
      <Navbar />
      <IDE />
      <Databases />
    </>
  );
};

export default Tecnologias;
