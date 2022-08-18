import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../assets/data/projects";

const Projects = () => {
  return (
    <div className="projects-div bg-dark mx-5 my-5">
      <h4 className="display-5 text-center mt-5 text-light">
        Here are some major projects I&apos;ve participated in
      </h4>
      <div className="d-flex justify-content-between align-content-center px-5">
        {projects.map((item, i) => {
          const { name, status, role, stack, reference, image } = item;
          return (
            <div className="mt-4 mb-4" style={{ width: "35rem" }} key={i}>
              <div className="card-body px-5">
                <div className="card-img-top imageContainer">
                  <Link href="/projects">
                    <a>
                      <Image
                        src={image.src}
                        alt="image-here"
                        className=" image"
                        height={300}
                        width={300}
                      />
                    </a>
                  </Link>
                </div>
                <div className="card-title text-center my-3 text-light">
                  <h4 className="lead display-6">{name}</h4>
                </div>
                <div
                  className="card-text text-light "
                  style={{ color: "black" }}
                >
                  <div className="row">
                    <div className="col-12 text-center">
                      <h4 className="lead">Status: {status}</h4>
                    </div>
                    <div className="col-12 text-center">
                      <h4 className="lead">Role: {role}</h4>
                    </div>
                    <div className="col-12 text-center">
                      <h4 className="lead">Stack: {stack}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
