import React, { useState } from 'react';
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger menu

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#043873] tracking-normal text-white py-3 px-6 flex justify-between items-center lg:pl-36 lg:pr-36">
      {/* Logo */}
      <div className="flex space-x-2">
        <Image className="text-7xl" src="/Logo.png" alt="Logo" width={138} height={160} />
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Items */}
      <ul className={`flex-col lg:flex-row lg:flex space-x-6 ${isOpen ? 'flex' : 'hidden'} lg:space-x-6 items-center lg:items-center absolute lg:static top-16 right-6 lg:top-0 bg-[#043873] lg:bg-transparent w-3/4 lg:w-auto rounded-lg lg:rounded-none shadow-md lg:shadow-none p-6 lg:p-0`}>
        <li className="text-xs py-2">Products</li>
        <li className="text-xs py-2">Solutions</li>
        <li className="text-xs py-2">Resources</li>
        <li className="text-xs py-2 lg:pr-28">Pricing</li>
        <li>
          <button className="text-xs bg-secondary text-black px-7 py-3 rounded">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
