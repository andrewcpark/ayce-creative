import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, description, image, url }) => {
  return (
    <div
      id="projectitem"
      className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#64943E] to-[#95BF47]"
    >
      <Image
        className="rounded-xl object-cover group-hover:opacity-10"
        src={image}
        width="600"
        height="300"
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {" "}
          {title}{" "}
        </h3>
        <p className="pb-4 pt-2 text-white text-center"> {description} </p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            {" "}
            View Site
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
