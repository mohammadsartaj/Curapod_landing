import React, { useState } from "react";
import logo from "../assets/curapod_logo.png";
import { ShoppingCart, User2Icon, Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 w-full h-[70px] bg-opacity-50 backdrop-blur-xl shadow-md border-b border-gray-800 flex items-center">
      <section className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="w-[150px] sm:w-[180px]">
          <img src={logo} alt="logo" className="h-auto w-full" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:block text-white text-base font-medium">
          <ul className="flex space-x-6 lg:space-x-10">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">How Curapod Work</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center text-base font-medium text-white gap-4 sm:gap-6">
          {/* Buy Now visible only on md+ */}
          <button className="hidden md:block bg-[#2A2AFF] px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base cursor-pointer">
            Buy Now
          </button>

          {/* Icons (desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <ShoppingCart className="cursor-pointer" />
            <User2Icon className="cursor-pointer" />
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-xl text-white absolute top-[70px] left-0 w-full shadow-md border-b border-gray-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">How Curapod Work</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>

            {/* Buy Now for mobile */}
            <li>
              <button className="bg-[#2A2AFF] px-6 py-2 rounded-full text-base cursor-pointer">
                Buy Now
              </button>
            </li>

            {/* Icons for mobile */}
            <li className="flex items-center gap-6">
              <ShoppingCart className="cursor-pointer" />
              <User2Icon className="cursor-pointer" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
