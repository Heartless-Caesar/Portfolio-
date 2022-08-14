import React from "react";
import Navbar from "../components/navbar";
import IDE from "../components/ides";
import Databases from "../components/databases";
import Footer from "../components/footer";
//TODO: MAKE ALL BUTTONS SAME WIDTH

const Tecnologias = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <IDE />
      <Databases />
      <Footer />
    </div>
  );
};

export default Tecnologias;
