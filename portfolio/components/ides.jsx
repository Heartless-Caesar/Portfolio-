import React from "react";
import IDES from "../assets/data/IDES";

const IDE = () => {
  return (
    <>
      <div className="text-center display-3 text-light mb-3">IDE 's</div>
      <div className="card-container d-flex justify-content-center">
        {IDES.map((i) => {
          const { img, docs, description } = i;

          return (
            <div className="card project-div bg-light mx-5 p-4 mb-3">
              <div className="card-img-top text-center">
                <img src={img} alt="IDE image" className="tech-img pl-4" />
              </div>
              <div className="card-text">
                <p className="mt-3 lead">
                  You can view the documentation{" "}
                  <a href={docs} target="_blank">
                    here
                  </a>
                </p>
                <p className="lead">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IDE;
