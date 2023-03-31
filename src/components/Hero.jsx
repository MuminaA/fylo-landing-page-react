import React from "react";
import illustration1 from "../assets/illustration-1.svg";

const Hero = () => {
  return (
    <div className="max-w-[1340px] mx-auto mb-24">
      <div className="flex justify-between items-center">
        <div className=" flex flex-col gap-4">
          <div className="">
            <h1 className=" text-4xl font-semibold font-headings leading-13 text-Very-Dark-Blue">All your files in one secure
            location, accessible anywhere.</h1>
          </div>
          <div>
            <p className="text-xl whitespace-normal max-w-[500px] text-Very-Dark-Blue">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className="text-lg flex gap-6">
            <input type="text" placeholder="Enter your email..." className="border border-black rounded-sm ps-4 pe-24 py-2"/>
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
