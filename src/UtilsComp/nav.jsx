import React from "react";
import logo from "../assets/curapod_logo.png";
import { ShoppingCart, User2Icon } from "lucide-react";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-20 w-full h-[70px] bg-opacity-50 backdrop-blur-xl shadow-md border-b border-gray-800 flex items-center">
      <section className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="w-[150px] sm:w-[180px]">
          <img src={logo} alt="logo" className="h-auto w-full" />
        </div>

        {/* Nav Links */}
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

        {/* Buttons */}
        <div className="flex items-center text-base font-medium text-white gap-4 sm:gap-6">
          <button className="bg-[#2A2AFF] px-4 sm:px-3 text-[10px] py-1 rounded-full cursor-pointer">
            Buy Now
          </button>
          <div className="flex items-center gap-3">
            <ShoppingCart className="cursor-pointer" />
            <User2Icon className="cursor-pointer" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
