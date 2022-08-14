import React from "react";

const Body = () => {
  return (
    <div
      className="container text-light body-container "
      style={{ marginBottom: "25%", marginTop: "5%", height: "100%" }}
    >
      <div className="">
        <main>
          <div className="p-5 row">
            <h3 className="display-4 mt-3">John Victor Cesa</h3>
            <div className="content-body col-8">
              <p className="lead">
                I'm an aspiring software developer who's got experience in
                projects, of all scopes, as a freelancer.
                <br />
                I mainly focus on backend development, as such I work with other
                developers to help with the frontend.
                <br />
                The stacks I'm more comfortable with are Next JS + Node JS but
                there are more frameworks I have to practice with.{" "}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Body;
