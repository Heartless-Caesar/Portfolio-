import React from "react";
import { projects } from "../assets/data/projects";

const Projects = () => {
  return (
    <div className="projects-div mx-5 my-5">
      <h4 className="display-5 text-center mt-5">
        Alguns exemplos de projetos que já realizei
      </h4>
      <div className="d-flex justify-content-between align-content-center px-5 mt-4">
        {projects.map((item, i) => {
          const { name, status, role, stack, reference, image } = item;
          return (
            <div
              className="container mt-4 mb-4"
              style={{ width: "35rem" }}
              key={i}
            >
              <div className="card-body  px-1 py-1 ">
                <div className="card-img-top">
                  <a href={reference}>
                    <img
                      src={image.src}
                      alt="image-here"
                      className="project-image"
                    />
                  </a>
                </div>
                <div className="card-title text-center my-3 text-light">
                  <h4 className="lead display-6">{name}</h4>
                </div>
                <div className="card-text" style={{ color: "black" }}>
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
