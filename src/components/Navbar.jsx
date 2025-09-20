import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Products", "Customers", "Pricing", "Learn"];

  return (
    <nav className="w-full relative z-50 bg-transparent">
      <div className="flex items-center justify-between h-20 px-6 lg:px-20">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/icons/logo.png"
            alt="Finpay Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 ml-16">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-finpayBlack hover:text-finpayPrimary font-medium text-base transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
{/* Desktop Buttons */}
<div className="hidden md:flex items-center space-x-4 ml-auto">
<button className="flex-1 md:flex-none px-6 py-2 md:px-8 md:py-2 text-finpayBlack font-medium text-base border border-black rounded-2xl hover:bg-black hover:text-white transition-colors min-w-[120px]">
  Login
</button>


  <button className="flex-1 md:flex-none bg-finpayPrimary text-white font-medium px-6 py-2 rounded-2xl hover:bg-opacity-90 transition-colors text-base min-w-[120px]">
    Sign Up
  </button>
</div>



        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="w-6 h-6 text-finpayBlack" />
            ) : (
              <FiMenu className="w-6 h-6 text-finpayBlack" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-finpayLight shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-6 font-medium text-finpayBlack">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-finpayPrimary transition-colors duration-300 cursor-pointer"
            >
              <a href="#">{item}</a>
            </li>
          ))}
          <li>
            <button className="w-full px-6 py-2 text-finpayBlack font-medium rounded-lg hover:bg-finpayPrimary border border-black hover:text-white transition">
              Login
            </button>
          </li>
          <li>
            <button className="w-full px-6 py-2 bg-finpayPrimary text-white rounded-lg font-medium hover:bg-finpayDark transition">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
