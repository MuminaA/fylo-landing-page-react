import React from "react";
import illustration1 from "../assets/illustration-1.svg";

const Hero = () => {
  return (
    <div className="max-w-[1340px] mx-auto">
      <div className="flex justify-between items-center">
        <div className=" flex flex-col gap-4">
          <div>
            <h1 className="text-5xl font-semibold font-headings leading-14">All your files in one secure location, accessible anywhere</h1>
          </div>
          <div>
            <p className="text-xl whitespace-normal max-w-[600px]">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className="text-lg flex gap-6">
            <input type="text" placeholder="Enter your email..." className="border border-black rounded-sm ps-4 pe-28 py-2"/>
            <button className="bg-Bright-Blue text-white px-14 rounded">Get Started</button>
          </div>
        </div>
        <div className="">
          <img src={illustration1} alt="illustration"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
