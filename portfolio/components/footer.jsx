import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center">
        <h4 className="display-6 lead">
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
        <h5 className="lead">
          Entre em contato por email: <b>joaovictorcsatu@gmail.com</b>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
