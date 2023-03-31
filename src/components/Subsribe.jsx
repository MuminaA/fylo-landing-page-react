import React from "react";

const Subscibe = () => {
  return (
    <div className="text-white bg-Desaturated-Blue desktop:p-20 mobile:py-20">
      <div className="desktop:max-w-[1280px] mx-auto mobile:max-w-[320px] flex desktop:flex-row mobile:flex-col mobile:gap-6 justify-between items-center ">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-3xl font-semibold font-headings leading-13 desktop:text-left mobile:text-center">Get early access today</h2>
          </div>
          <div className="text-Light-Gray desktop:max-w-[450px] mobile:max-w-[300px] desktop:text-left mobile:text-center">
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <input type="email" placeholder="email@example.com" className="ps-5 desktop:pe-80 mobile:pe-16 py-2 rounded-sm shadow-lg"/>
          </div>
          <div>
            <button className="bg-Bright-Blue text-white desktop:px-9 mobile:px-16 py-2 rounded shadow-md">Get Started For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscibe;
