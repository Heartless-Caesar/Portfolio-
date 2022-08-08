import React from "react";
import { projects } from "../assets/data/projects";

const Projects = () => {
  return (
    <div className="container  pl-5">
      {projects.map((i) => {
        const { name, status, role, stack, reference } = i;
        return (
          <div className="card  mt-4 mb-4" style={{ width: "35rem" }}>
            <div className="card-body">
              <div className="card-title">{name}</div>
              <p className="card-text" style={{ color: "black" }}>
                <div className="row">
                  <div className="col-9">
                    <h4>Status: {status}</h4>
                  </div>
                  <div className="col-9">
                    <h4>Role: {role}</h4>
                  </div>
                  <div className="col-12">
                    <h4>Stack: {stack}</h4>
                  </div>
                  <div className="col-9">
                    <a href={reference}>
                      <button type="button" className="btn btn-dark">
                        <h4>Reference</h4>
                      </button>
                    </a>
                  </div>
                </div>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
