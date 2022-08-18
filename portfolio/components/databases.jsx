import React from "react";
import databases from "../assets/data/databases";
import Image from "next/image";

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
        {databases.map((i, idx) => {
          const { img, docs, description } = i;

          return (
            <div
              className="card bg-light border-dark text-dark p-3 m-5 data-div"
              key={i}
            >
              <div className="card-img-top text-center">
                <Image
                  src={img}
                  alt="IDE image"
                  className="tech-img pl-4"
                  width="100"
                  height="100"
                />
              </div>
              <div className="card-text">
                <p className="mt-3 lead">
                  You can view the documentation{" "}
                  <a href={docs} target="_blank" rel="noreferrer">
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
