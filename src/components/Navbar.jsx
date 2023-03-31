import React from "react";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className="desktop:max-w-[1280px] mx-auto py-11 mobile:max-w-[320px]">
      <div className="flex justify-between items-center">
        <div className="desktop:w-9/12 mobile:w-20">
          <img src={logo} alt="logo" className=""/>
        </div>
        <div >
          <ul className="flex desktop:gap-7 mobile:gap-3 text-Very-Dark-Blue">
            <li>Features</li>
            <li>Team</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
