import React from "react";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-5 ">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div >
          <ul className="flex gap-7 text-Very-Dark-Blue">
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
