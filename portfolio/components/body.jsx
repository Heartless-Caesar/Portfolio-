import React from "react";

const Body = () => {
  return (
    <div className="text-dark bg-light body-container">
      <main>
        <div className="px-5 pt-2">
          <h3 className="display-4 mt-3">John Victor Cesar</h3>
          <div className="content-body col-8">
            <p className="lead about-me">
              I'm an aspiring software developer who's got experience in
              projects, of all scopes, as a freelancer.
              <br />
              I mainly focus on backend development, as such I work with other
              developers to help with the frontend.
              <br />
              The stacks I'm more comfortable with are Next JS & Node JS but
              there are more frameworks I have practice with.{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
