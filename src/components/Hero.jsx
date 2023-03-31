import React from "react";
import illustration1 from "../assets/illustration-1.svg";

const Hero = () => {
  return (
    <div className="desktop:max-w-[1280px] mx-auto mobile:max-w-[320px] mb-24">
      <div className="flex justify-between items-center desktop:flex-row desktop:text-left mobile:flex-col mobile:text-center mobile:gap-5">
      <div className="desktop:hidden mobile:block mobile:pb-7">
          <img src={illustration1} alt="illustration"></img>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="">
            <h1 className="desktop:text-4xl mobile:text-3xl font-semibold font-headings leading-13 text-Very-Dark-Blue">All your files in one secure
            location, accessible anywhere.</h1>
          </div>
          <div>
            <p className="desktop:text-xl whitespace-normal desktop:max-w-[500px] text-Very-Dark-Blue">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className="text-lg flex gap-6 desktop:flex-row mobile:flex-col">
            <input type="email" placeholder="Enter your email..." className="border border-black rounded-sm ps-4 pe-24 py-2"/>
            <button className="bg-Bright-Blue text-white px-14 rounded mobile:py-2 hover:bg-Button-Overlay">Get Started</button>
          </div>
        </div>
        <div className="desktop:block mobile:hidden">
          <img src={illustration1} alt="illustration"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
