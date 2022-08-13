import React from "react";

const Body = () => {
  return (
    <div
      className="container body-container "
      style={{ marginBottom: "15%", marginTop: "5%" }}
    >
      <div className="">
        <main>
          <div className="body-div row">
            <h3 className="display-4 mt-3">Welcome!</h3>
            <div className="content-body col-8">
              <p className="lead">
                I'm an aspiring software developer who's got experience in
                projects, of all scopes, as a freelancer.
                <p className="mt-2">
                  In this portfolio you can find samples of noteworthy projects
                  I've participated in aswell as the tools and technologies I
                  utilize in said projects.
                </p>
                <p className="mt-2">
                  If you feel like there's anything missing or that should be
                  explined in further detail, please do not hesitate to get in
                  contact.
                </p>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
