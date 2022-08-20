import React from "react";

const ProjectBody = () => {
  return (
    <div className="bg-dark p-3 project-body" style={{ height: "100%" }}>
      <div className="text-light">
        <h5 className="display-5">Kanri ERP</h5>
        <p className="lead">
          This project is privated due to it&apos;s nature. The following will
          describe what I&apos;ve contributed to said project.
        </p>
        <div className="">
          <h6 className="display-6">Stack</h6>
          <ul className="list-unstyled lead">
            <li>- Node JS</li>
            <li>- Express JS</li>
          </ul>
          <p className="">
            The choice of utilizing this specific stack was per request from the
            project management team. This project is focused on producing a MVP
            due to the fact that the company for which this software is for has
            no systems in use, all the day to day work is registered on paper.
          </p>
        </div>
        <div className="">
          <p className="">
            The architecture of the backend is REST, as such Clean Code
            principles were utilized. That coupled with the fact that the
            developers working on the code base are mostly software engineering
            students such as myself it is of utmost importance to keep the code
            as simple as possbible.
          </p>
        </div>
      </div>
      <div className="text-light mt-5">
        <h5 className="display-5">Cleaning service provider</h5>
        <p className="lead">
          This project is privated due to it&apos;s nature. The following will
          describe what I&apos;ve contributed to said project.
        </p>
        <div className="">
          <h6 className="display-6">Stack</h6>
          <ul className="list-unstyled lead">
            <li>- Next JS</li>
            <li>- Sanity IO</li>
          </ul>
          <p className="">
            The utilized stack was chosen due to the necessity of the client in
            relation to the time.
          </p>
        </div>
        <div className="">
          <p className="">
            Similarly to the previous mentioned project the architecture of the
            backend is REST, as such Clean Code principles were utilized.
            <br /> This project was a solo effort, as such there was extensive
            research made into design as my frontend skills aren't the best when
            it comes to innovating visually.
          </p>
          <p>
            You can view the source code{" "}
            <a
              href="https://github.com/Heartless-Caesar/Next_Ecommerce"
              className="link"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
