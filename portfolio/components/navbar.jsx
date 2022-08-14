import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-dark mb-2"
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href={"/"} aria-current="page">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/tecnologias"} aria-current="page">
                  <a className="nav-link">Tecnologias</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Referências
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
