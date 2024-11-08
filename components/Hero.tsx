
import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary text-white h-[555px]  flex flex-col md:flex-row justify-center pt-24 space-y-4 md:space-y-0 md:space-x-8 px-4 md:px-10 py-10">
      <div className=" flex-col mt-14 ">
        <h1 className="text-[43px] font-bold mb-4">
          Get More Done with <br /> Whitepace
        </h1>
        <p className="text-xs mb-6 ">
          Project management software that enables your teams to collaborate,
          plan, <br /> analyze and manage everyday tasks.
        </p>
        <button className="bg-[#4F9CF9] text-white text-xs py-3 px-3 rounded flex items-center">
          Get Started
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="bg-[#C4DEFD] text-black h-[345px] w-[540px] flex justify-center items-center shadow-lg md:mt-24">
      </div>
    </section>
  );
};

export default Hero;
