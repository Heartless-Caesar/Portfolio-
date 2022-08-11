import React from "react";
import Navbar from "../components/navbar";

const Tecnologias = () => {
  return (
    <>
      <Navbar />
      <div className="container text-light text-center">
        A seguir estão minhas tecnologias e ferramentas utilizadas, estão
        listadas de acordo com minha proficiência com a mesma.
      </div>
      <div className="grid-container text-light text-center mx-5 my-5">
        <div className="row">
          <div className="col">
            <h3>IDE 's</h3>
            <li className="list-item">VSCodium</li>
            <li className="list-item">JetBrains Rider</li>
            <li className="list-item">IntelliJ Idea</li>
          </div>
          <div className="col">
            <h3>Databases</h3>
            <li className="list-item">PostgreSQL</li>
            <li className="list-item">MySQL</li>
            <li className="list-item">SQL Server</li>
            <li className="list-item">MongoDB</li>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Programming Languages</h3>
            <li className="list-item">C#</li>
            <li className="list-item">Javascript</li>
            <li className="list-item">Java</li>
          </div>
          <div className="col">
            <h3>Frameworks</h3>
            <li className="list-item">.NET</li>
            <li className="list-item">React JS</li>
            <li className="list-item">Next JS</li>
            <li className="list-item">Node JS</li>
            <li className="list-item">Express JS</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecnologias;
