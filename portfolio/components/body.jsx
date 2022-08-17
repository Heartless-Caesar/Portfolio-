import React from "react";
import it from "../assets/images/IT_clip_art.png";

const Body = () => {
  return (
    <div className="text-dark bg-light body-container">
      <main>
        <div className="px-5 pt-2 col row">
          <h3 className="display-4 mt-3">John Victor Cesar</h3>
          <div className="content-body col-8">
            <p className="lead about-me">
              I'm an aspiring software developer who's got experience in
              projects, of all scopes, as a freelancer.
              <br />
              The stacks I'm more comfortable with are Next JS & Node JS but
              there are more frameworks I have practice with.{" "}
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://hdclipartall.com/images/technology-clipart-technology-clipart-infomation-11-335x202.png"
              alt="image-here"
              style={{
                height: "200px",
                marginLeft: "90px",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
