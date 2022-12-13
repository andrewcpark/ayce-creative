import React from "react";
import Image from "next/image";
import Javascript from "../public/assets/skills/javascript.png";
import CustomDesign from "../public/assets/icons/customDesign.png";
import Maintenance from "../public/assets/icons/maintenance.png";
import AppDevelopment from "../public/assets/icons/appDevelopment.png";
import ThemeDevelopment from "../public/assets/icons/themeDevelopment.png";

const Expertise = () => {
  return (
    <div id="expertise" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#008060]">
          {" "}
          Expertise{" "}
        </p>
        <h2 className="py-4"> What I know </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ThemeDevelopment}
                  alt="/"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> Theme Development </h3>
                <p className="p-2 text-center mt-8 text-gray-600">
                  {" "}
                  I help clients set up stores from scratch and develop highly
                  responsive themes that are compatible across browsers and
                  devices.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={AppDevelopment}
                  alt="/"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> App Development </h3>
                <p className="p-2 text-center mt-8 text-gray-600">
                  {" "}
                  Whether developing from scratch or building upon existing
                  features, I'm experienced in building and scaling Shopify
                  apps across the tech stack.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Maintenance} alt="/" width="150px" height="150px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> Store Maintenance </h3>
                <p className="p-2 text-center mt-8 text-gray-600">
                  {" "}
                  From fixing bugs to implenting new features, I'm here to
                  provide clients support for their live online businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={CustomDesign}
                  alt="/"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> Custom Development </h3>
                <p className="p-2 text-center mt-8 text-gray-600">
                  {" "}
                  Have an idea for your store or app? Let me help you bring your
                  ideas to life.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
