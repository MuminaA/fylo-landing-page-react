import React, { useState } from "react";
import illustration1 from "../assets/illustration-1.svg";

const Hero = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    const handleClick = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        setError("Please enter a valid email address");
      } else {
        setError("");
        // console.log("vaild email")
      }
  }
  return (
    <div className="desktop:max-w-[1280px] mx-auto mobile:max-w-[320px] mb-24">
      <div className="flex justify-between items-center desktop:flex-row desktop:text-left mobile:flex-col mobile:text-center mobile:gap-5">
        <div className="desktop:hidden mobile:block mobile:pb-7">
          <img src={illustration1} alt="illustration"></img>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="">
            <h1 className="desktop:text-4xl mobile:text-3xl font-semibold font-headings leading-13 text-Very-Dark-Blue">
              All your files in one secure location, accessible anywhere.
            </h1>
          </div>
          <div>
            <p className="desktop:text-xl whitespace-normal desktop:max-w-[500px] text-Very-Dark-Blue">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className="text-lg flex gap-4 desktop:flex-row mobile:flex-col">
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email..."
                className={`border rounded-sm ps-4 pe-24 py-2 ${error ? 'border-red-500' : 'border-black'}`}
                onChange={handleChange}
              />
              <p id="error" className="text-red-600">{error}</p>
            </div>
            <div>
              <button
                type="button"
                className="bg-Bright-Blue text-white rounded desktop:px-14 desktop:py-2 mobile:py-3 mobile:px-28 hover:bg-Button-Overlay"
                onClick={handleClick}
              >
                Get Started
              </button>
            </div>
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
