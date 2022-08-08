import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineGithub } from "react-icons/ai";

const Body = () => {
  return (
    <div className="container">
      <div className="body-container">
        <main>
          <div className="container">
            <h3 className="display-5 text-center mt-3">
              Bem vindo a minha página de portfólio
            </h3>
            <div className="mt-5 mb-5 content-body">
              <p className="text-center mt-4 lead">
                Sou um desenvolvedor que tem foco em desenvolver soluções de
                software para diversos escopos.
              </p>
            </div>
            <div className="text-center mb-4">
              <h4 className="display-5">
                Entre em contato por outras plataformas
              </h4>
              <button className="btn btn-outline-dark mx-1">
                <AiFillGithub size={40} />
              </button>
              <button className="btn btn-outline-primary mx-1">
                <AiFillLinkedin size={40} />
              </button>
            </div>
            <div className="direct-contact container text-center">
              Entre em contato por email: <b>joaovictorcsatu@gmail.com</b>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
