import React from "react";
import Navbar from "../components/navbar";

//TODO: MAKE ALL BUTTONS SAME WIDTH

const Tecnologias = () => {
  return (
    <>
      <Navbar />
      <div className="container text-light text-center display-5">
        Essas são as tecnologias que tenho domínio suficiente para produzir
        aplicações
      </div>
      <div className="grid-container text-light text-center mx-5 my-5 tech-div px-4 py-4">
        <div className="row">
          <div className="col">
            <h3 className="display-3 my-5">IDE 's</h3>
            <div className="items-container row">
              <li className="list-item h4 col-6">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block list-btn"
                  >
                    <img
                      className="tech-img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                    />
                  </button>
                </a>
              </li>
              <li className="list-item h4 col-6">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block list-btn"
                  >
                    <img
                      className="tech-img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
                    />
                  </button>
                </a>
              </li>
            </div>
            <div className="row ">
              <li className="list-item h4">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block list-btn"
                  >
                    <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg" />
                  </button>
                </a>
              </li>
            </div>
          </div>
          <div className="col">
            <h3 className="display-3 my-5">Databases</h3>
            <div className="items-container">
              <div className="row">
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
              </div>
              <div className="row">
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="display-3 my-5">Programming Languages</h3>
            <div className="items-container span2">
              <div className="row">
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                      />
                    </button>
                  </a>
                </li>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      />
                    </button>
                  </a>
                </li>
              </div>
              <div className="row">
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      />
                    </button>
                  </a>
                </li>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="display-3 my-5">Frameworks</h3>
            <div className="items-container">
              <div className="row" style={{ marginTop: "122.5px" }}>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
              </div>
              <div className="row">
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
                <li className="list-item h4 col-6">
                  <a
                    href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block list-btn"
                    >
                      <img
                        className="tech-img"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                      />
                    </button>
                  </a>
                </li>
              </div>
              <li className="list-item h4 mt-2">
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-light btn-lg btn-block list-btn"
                  >
                    <img
                      className="tech-img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                    />
                  </button>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecnologias;
