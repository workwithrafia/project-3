import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-[#043873] h-[300px] flex-col text-white py-10">
      <div className="container mt-12 mb-[58px] mx-auto px-4 flex items-center pt-4 md:flex md:justify-evenly ">
        {/* Left section */}
        <div className="mb-8 md:mb-0 ">
          <div className="flex items-center mb-2">
            <Image src="/Logo.png" alt="Logo" width={130} height={80} />
          </div>
          <p className="text-[11px]">
            whitepace was created for <br /> the new ways we live and <br />{" "}
            work. We make a better <br /> workspace around the world.
          </p>
        </div>

        {/* Center sections */}
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-24 mr-40">
          <div>
            <h2 className="text-sm font-bold mb-2">Product</h2>
            <ul className=" space-y-1 text-[10px]">
              <li className="text-[#FFE492]">Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>
          <div className="ml-5">
            <h2 className="text-sm font-bold mb-2">Resources</h2>
            <ul className="text-[10px] space-y-1">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className="ml-5">
            <h2 className="text-sm font-bold  mb-2">Company</h2>
            <ul className="text-[10px] space-y-1">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-[#345E8C] pt-2 text-center items-center text-sm">
        ©2021 Whitepace LLC.
      </div>
    </footer>
  );
};

export default Footer;
