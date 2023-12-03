import React from "react";
import ProfileImg from "../public/assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#008060]">
            {" "}
            About{" "}
          </p>
          <h2 className="py-4"> Who I Am </h2>
          <p className="py-2 text-gray-600 text-xl">
            {" "}
            I specialize in Shopify theme and app development. My journey with
            Ayce Creative started as a freelance food photographer and
            videographer, hence the name "All You Can Eat". Since then, I have
            acquired new skills and my passion for helping entrepreneurs has
            blossomed into Shopify development. I enjoy working with businesses
            from all industries, helping everyone find success on Shopify. In my
            free time, I like to travel, train mixed martial arts, and work
            on personal projects.{" "}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {" "}
              Check out some of my latest projects.{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
