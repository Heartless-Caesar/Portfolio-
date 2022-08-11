import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg  navbar-dark mb-5"
      style={{ backgroundColor: "transparent", color: "white" }}
    >
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href={"/"} aria-current="page">
                <a class="nav-link" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href={"/tecnologias"} aria-current="page">
                <a class="nav-link">Tecnologias</a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Referências
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
