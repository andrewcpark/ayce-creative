import React from "react";
import RawJuicery from "../public/assets/projects/rawJuicery.png";
import ShipAid from "../public/assets/projects/ShipAid.png";
import AYCEHG from "../public/assets/projects/Ayce_Home_and_Garden.png";
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
            title="ShipAid"
            description="Shopify App Development and Integrations"
            image={ShipAid}
            url="https://www.shipaid.com/"
          />
          <ProjectItem
            title="Raw Juicery"
            description="Shopify Theme Custom Updates"
            image={RawJuicery}
            url="https://rawjuicery.com/"
          />
          <ProjectItem
            title="AYCE Home & Garden"
            description="Shopify Store Creation Password: aycecreative"
            image={AYCEHG}
            url="https://ayce-home-and-garden.myshopify.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
