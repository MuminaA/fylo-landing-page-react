import React from "react";
import illustration2 from "../assets/illustration-2.svg";

const Testimonial = () => {
  return (
    <div className="w-full h-full mx-auto">
      <div className="bg-desktop bg-no-repeat bg-cover bg-center w-full h-full py-24">
        <div className="max-w-[1340px] mx-auto flex flex-cols justify-between items-center">
          <div>
            <div>
              <h1>Stay productive, wherever you are</h1>
            </div>
            <div>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
            </div>
            <div>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
            </div>
            <div>
              <a href="#">See how Fylo works</a>
            </div>
            <div>
              <div></div>
              <div>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
              </div>
              <div>
                <img></img>
                <div>
                  <p>Kyle Burton</p>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={illustration2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
