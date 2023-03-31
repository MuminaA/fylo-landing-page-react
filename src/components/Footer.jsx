import React from "react";
import logo from "../assets/logo-white.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { RiTwitterFill, RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-Very-Dark-Blue text-Light-Gray desktop:p-24 mobile:py-16">
    <div className="desktop:max-w-[1280px] mx-auto mobile:max-w-[320px] flex flex-col gap-5">
      <div> 
        <img src={logo} alt="logo"></img>
      </div>
      <div className="flex justify-between desktop:flex-row mobile:flex-col mobile:gap-9">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <img src={phone} alt="phone"/>
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={email} alt="email"/>
            <p>example@fylo.com</p>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:text-Desaturated-Blue">About Us</li>
            <li className="cursor-pointer hover:text-Desaturated-Blue">Jobs</li>
            <li className="cursor-pointer hover:text-Desaturated-Blue">Press</li>
            <li className="cursor-pointer hover:text-Desaturated-Blue">Blog</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:text-Desaturated-Blue">Contact Us</li>
            <li className="cursor-pointer hover:text-Desaturated-Blue">Terms</li>
            <li className="cursor-pointer hover:text-Desaturated-Blue">Privacy</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 mobile:place-content-center">
            <li className="border rounded-full p-1 hover:text-Bright-Blue hover:border-Bright-Blue"><RiFacebookFill /></li>
            <li className="border rounded-full p-1 hover:text-Bright-Blue hover:border-Bright-Blue"><RiTwitterFill /></li>
            <li className="border rounded-full p-1 hover:text-Bright-Blue hover:border-Bright-Blue"><AiOutlineInstagram /></li>
          </ul>
        </div>
      </div>
      </div>
    </div>

    
  );
};

export default Footer;
