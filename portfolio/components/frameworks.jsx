import React from "react";
import frameworks from "../assets/data/frameworks";
import Image from "next/image";

const Frameworks = () => {
  return (
    <>
      <div className="text-center text-light display-3 mb-4">Frameworks</div>
      <div className="d-flex flex-wrap justify-content-center">
        {frameworks.map((i, idx) => {
          const { img, docs, description } = i;

          return (
            <div className="card m-3 p-3 data-div lead" key={idx}>
              <div className="text-center">
                <Image
                  src={img}
                  alt="img-here"
                  className="tech-img card-img-top"
                  width="100"
                  height="100"
                />
              </div>

              <div className="card-body">
                <p className="card-text">
                  You can view the documentation{" "}
                  <a href={docs} target="_blank" rel="noreferrer">
                    here
                  </a>
                  <br />
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Frameworks;
