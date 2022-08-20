import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark"
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
                  <a className="nav-link">Technologies</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
