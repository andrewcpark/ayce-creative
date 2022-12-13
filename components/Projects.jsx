import React from "react";
import VendOMatic from "../public/assets/projects/vendOMatic.png";
import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#008060]">
          {" "}
          Projects{" "}
        </p>
        <h2 className="py-4"> What I Worked On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Vend-O-Matic"
            description="Vending Machine Web Simulation"
            image={VendOMatic}
            url="/vendOMatic"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
