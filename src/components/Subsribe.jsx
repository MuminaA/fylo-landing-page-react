import React from "react";

const Subscibe = () => {
  return (
    <div className="text-white bg-Desaturated-Blue p-20">
      <div className="max-w-[1340px] mx-auto flex justify-between items-center ">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-3xl font-semibold font-headings leading-13">Get early access today</h2>
          </div>
          <div className="max-w-[450px] text-Light-Gray">
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <input type="email" placeholder="email@example.com" className="ps-5 pe-80 py-2 rounded-sm shadow-lg"/>
          </div>
          <div>
            <button className="bg-Bright-Blue text-white px-9 py-2 rounded shadow-md">Get Started For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscibe;
