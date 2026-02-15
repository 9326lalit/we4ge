import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        <div className="flex items-center justify-between h-20">

          {/* LEFT: Logo */}
          <div className="flex items-center">
            <img
              src="/we4ge_2nd.png"   // replace with your logo
              alt="Sadeva"
              className="h-8 object-contain"
            />
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium text-gray-700 tracking-wide">

            <a href="#casestudy" className="hover:text-gray-900 transition">
              Case Studies
            </a>

            <a href="#services" className="hover:text-gray-900 transition">
              Services
            </a>

            <a href="#about" className="hover:text-gray-900 transition">
              About Us
            </a>

            <a href="#blog" className="hover:text-gray-900 transition">
              Blog
            </a>

            <a href="#contact" className="hover:text-gray-900 transition">
              Contact
            </a>

          </nav>

          {/* RIGHT: CTA Button */}
          <div className="hidden lg:flex">
            <button className="border border-gray-900 text-gray-900 px-5 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition">
              Work with us
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden">
            <button className="text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
