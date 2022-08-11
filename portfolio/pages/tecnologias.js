import React from "react";
import Navbar from "../components/navbar";

//TODO: MAKE ALL BUTTONS SAME WIDTH

const Tecnologias = () => {
  return (
    <>
      <Navbar />
      <div className="container text-light text-center">
        A seguir estão minhas tecnologias e ferramentas utilizadas, estão
        listadas de acordo com minha proficiência com a mesma.
      </div>
      <div className="grid-container text-dark text-center mx-5 my-5 tech-div px-4 py-4">
        <div className="row">
          <div className="col">
            <h3 className="display-3 my-5">IDE 's</h3>
            <div className="items-container"></div>
            <li className="list-item h4">VSCodium</li>
            <li className="list-item h4">IntelliJ Idea</li>
            <li className="list-item h4">JetBrains Rider</li>
          </div>
          <div className="col">
            <h3 className="display-3 my-5">Databases</h3>
            <div className="items-container">
              <li className="list-item h4">PostgreSQL</li>
              <li className="list-item h4">MySQL</li>
              <li className="list-item h4">SQL Server</li>
              <li className="list-item h4">MongoDB</li>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="display-3 my-5">Programming Languages</h3>
            <div className="items-container">
              <li className="list-item h4">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button type="button" className="btn btn-dark btn-lg">
                    C#
                  </button>
                </a>
              </li>
              <li className="list-item h4">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button type="button" className="btn btn-dark btn-lg">
                    Javascript
                  </button>
                </a>
              </li>
              <li className="list-item h4">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Java
                  </button>
                </a>
              </li>
            </div>
          </div>
          <div className="col">
            <h3 className="display-3 my-5">Frameworks</h3>
            <div className="items-container">
              <li className="list-item h4">.NET</li>
              <li className="list-item h4">React JS</li>
              <li className="list-item h4">Next JS</li>
              <li className="list-item h4">Node JS</li>
              <li className="list-item h4">Express JS</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecnologias;
