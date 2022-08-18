import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="direct-contact footer text-dark  text-center p-2">
      <div className="">
        Get in contect by email: <b>joaovictorcsatu@gmail.com </b>
        or{" "}
        <button className="btn btn-outline-dark mx-1 ">
          <a
            href="https://github.com/Heartless-Caesar"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={20} color="black" />
          </a>
        </button>
        <button className="btn btn-outline-primary mx-1">
          <a
            href="https://www.linkedin.com/in/joaovictorcesaandrade/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={20} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
