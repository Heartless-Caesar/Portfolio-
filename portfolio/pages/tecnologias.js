import React from "react";
import Navbar from "../components/navbar";
import IDE from "../components/ides";
import Databases from "../components/databases";
import Footer from "../components/footer";
//TODO: MAKE ALL BUTTONS SAME WIDTH

const Tecnologias = () => {
  return (
    <>
      <Navbar />
      <IDE />
      <Databases />
      <Footer />
    </>
  );
};

export default Tecnologias;
