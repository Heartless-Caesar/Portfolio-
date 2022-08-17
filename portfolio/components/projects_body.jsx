import React from "react";

const ProjectBody = () => {
  return (
    <div
      className="bg-dark p-3 project-body mt-5"
      style={{ height: "100%", marginBottom: "143px" }}
    >
      <div className="text-light">
        <h5 className="display-5">Kanri ERP</h5>
        <p className="lead">
          This project is privated due to it's nature. The following will
          describe what I've contributed to said project.
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
            such as myself it is of utmost importance to keep the code as simple
            as possbible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;