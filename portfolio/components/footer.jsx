import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer text-dark fixed-bottom">
      <div className="text-center mb-3"></div>
      <div className="direct-contact text-center mb-2">
        <p className="lead">
          Get in contect by email: <b>joaovictorcsatu@gmail.com </b>
          or{" "}
          <button className="btn btn-outline-dark mx-1 ">
            <a href="https://github.com/Heartless-Caesar" target="_blank">
              <AiFillGithub size={20} color="black" />
            </a>
          </button>
          <button className="btn btn-outline-primary mx-1">
            <a
              href="https://www.linkedin.com/in/joaovictorcesaandrade/"
              target="_blank"
            >
              <AiFillLinkedin size={20} />
            </a>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Footer;
