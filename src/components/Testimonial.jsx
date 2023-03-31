import React from "react";
import illustration2 from "../assets/illustration-2.svg";
import arrow from "../assets/icon-arrow.svg";
import quote from "../assets/icon-quotes.svg";
import avatar from "../assets/avatar-testimonial.jpg";

const Testimonial = () => {
  return (
    <div className="w-full h-full mx-auto">
    <div className="bg-desktop bg-cover bg-center flex items-center justify-center w-screen p-28">
        <div className="max-w-[1340px] mx-auto flex flex-cols justify-between items-center gap-5">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-semibold font-headings whitespace-pre text-Very-Dark-Blue">
                Stay productive, wherever you are
              </h1>
            </div>
            <div className="max-w-[500px] text-Very-Dark-Blue">
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
            </div>
            <div className="max-w-[500px] text-Very-Dark-Blue">
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
            </div>
            <div>
              <a href="#" className="">
                <p className="inline-block pe-2 underline underline-offset-8 decoration-Moderate-Cyan text-Moderate-Cyan">
                  See how Fylo works
                </p>
                <img
                  className="inline-block underline underline-offset-8 decoration-Moderate-Cyan"
                  src={arrow}
                  alt=""
                ></img>
              </a>
            </div>
            <div class="bg-white p-7 max-w-[370px] rounded-lg flex flex-col gap-2 mt-5 shadow-md">
              <div>
                <img src={quote} alt="" />
              </div>
              <div className=" text-Very-Dark-Blue">
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img src={avatar} alt="" className="rounded-full w-12 h-12"/>
                </div>
                <div className="text-Very-Dark-Blue">
                  <p className="font-bold">Kyle Burton</p>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <img src={illustration2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
