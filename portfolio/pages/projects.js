import React from "react";
import ProjectBody from "../components/projects_body";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Projects = () => {
  return (
    <div className="project-body">
      <Navbar />
      <ProjectBody />
      <Footer />
    </div>
  );
};

export default Projects;
