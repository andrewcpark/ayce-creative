import React from "react";
import RawJuicery from "../public/assets/projects/rawJuicery.png";
import ShipAid from "../public/assets/projects/ShipAid.png";
import Fleurissent from "../public/assets/projects/fleurissent.png";
import HandsCraftUS from "../public/assets/projects/handsCraftUS.png";
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
            title="Raw Juicery"
            description="Shopify Theme Custom Updates"
            image={RawJuicery}
            url="https://rawjuicery.com/"
          />
          <ProjectItem
            title="Fleurissent"
            description="Shopify Theme Development and Management"
            image={Fleurissent}
            url="https://fleurissentskincare.com/"
          />
          <ProjectItem
            title="ShipAid"
            description="Shopify App Development and Integrations"
            image={ShipAid}
            url="https://www.shipaid.com/"
          />
          <ProjectItem
            title="Hands Craft US"
            description="Shopify Theme Customization"
            image={HandsCraftUS}
            url="https://www.handscraft.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
