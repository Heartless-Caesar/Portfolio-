import React from "react";
import Navbar from "../components/navbar";
import IDE from "../components/ides";
import Databases from "../components/databases";
import Footer from "../components/footer";
import Frameworks from "../components/frameworks";
//TODO: MAKE ALL BUTTONS SAME WIDTH

const Tecnologias = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <IDE />
      <Databases />
      <Frameworks />
      <Footer />
    </div>
  );
};

export default Tecnologias;
