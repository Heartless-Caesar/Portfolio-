import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer mx-5 text-light">
      <div className="text-center mb-3">
        <h4 className="display-6 lead">
          Entre em contato por outras plataformas
        </h4>
        <button className="btn btn-outline-dark mx-1 ">
          <AiFillGithub size={40} color="white" />
        </button>
        <button className="btn btn-outline-primary mx-1">
          <AiFillLinkedin size={40} />
        </button>
      </div>
      <div className="direct-contact text-center mb-2">
        <h5 className="lead">
          Entre em contato por email: <b>joaovictorcsatu@gmail.com</b>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
