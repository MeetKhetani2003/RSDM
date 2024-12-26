import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h1 className="text-xl font-bold">RSDM</h1>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} My Company. All Rights Reserved.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="About"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Contact"
            >
              Contact us
            </Link>
          </div>

          {/* Right Section */}
          <div className="text-center sm:text-right">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
