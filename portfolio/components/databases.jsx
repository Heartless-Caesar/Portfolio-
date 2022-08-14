import React from "react";
import databases from "../assets/data/databases";
const Databases = () => {
  return (
    <div className="mb-5">
      <div
        className="text-center display-3 text-light mx-5"
        style={{ marginTop: "10%" }}
      >
        Databases
      </div>
      <div className="d-flex justify-content-center flex-wrap ">
        {databases.map((i) => {
          const { img, docs, description } = i;

          return (
            <div className="card bg-dark border-light text-light p-3 m-5 data-div">
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
    </div>
  );
};

export default Databases;
