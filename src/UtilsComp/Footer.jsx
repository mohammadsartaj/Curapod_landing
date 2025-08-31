import React from "react";
// import { facebook, instagram, youtube } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/curapod_logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 pt-16 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Logo + Text */}
        <div>
          {/* <h2 className="text-2xl font-bold">CURAPOD</h2> */}
          <img src={logo} alt="logo" className="w-[200px] h-[100px]" />
          <p className="text-gray-400 text-sm mt-4 max-w-sm leading-relaxed">
            Litemed is a leader in developing PBM technology for healthcare. We
            are committed to redefining healthcare by offering innovative, safe,
            and accessible solutions that transform lives.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Corporate Gifting</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Right Section - How Curapod Works */}
        <div>
          <h3 className="font-semibold mb-4">HOW CURAPOD WORKS</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#">Neck</a>
            </li>
            <li>
              <a href="#">Lower Back</a>
            </li>
            <li>
              <a href="#">Knee</a>
            </li>
            <li>
              <a href="#">Ankle & Foot</a>
            </li>
            <li>
              <a href="#">Shoulder</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Social Icons */}
      <div className="flex justify-items-start mx-auto text-xl space-x-6 mb-8">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaFacebook />
          {/* <facebook /> */}
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaYoutube />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-800 pt-4">
        <p>© 2025 Litemed.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
