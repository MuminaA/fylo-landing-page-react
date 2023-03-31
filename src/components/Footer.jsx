import React from "react";
import logo from "../assets/logo-white.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { RiTwitterFill, RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-Very-Dark-Blue text-Light-Gray p-24">
    <div className="max-w-[1340px] mx-auto flex flex-col gap-5">
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="flex justify-between">
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
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="cursor-pointer">Press</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Terms</li>
            <li className="cursor-pointer">Privacy</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="border rounded-full p-1"><RiFacebookFill /></li>
            <li className="border rounded-full p-1"><RiTwitterFill /></li>
            <li className="border rounded-full p-1"><AiOutlineInstagram /></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
