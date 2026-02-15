import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">

      {/* ================= CTA SECTION ================= */}
      <div className="max-w-7xl mx-auto px-3 lg:px-12 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-10">
              Ready to implement <br /> AI in your business?
            </h2>

            <button className="inline-flex items-center gap-3 bg-lime-400 text-black px-7 py-4 rounded-sm font-semibold text-sm hover:opacity-90 transition-all duration-300">
              Get Free Consultation
              <span className="bg-black text-white p-2 rounded-md">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/we4ge_logo.png"
              alt="AI Graphic"
              className="w-72 sm:w-80 lg:w-[360px] object-contain"
            />
          </div>

        </div>
      </div>

      {/* Subtle Divider */}
      <div className="border-t border-white/10"></div>

      {/* ================= FOOTER LINKS ================= */}
      <div className="max-w-7xl mx-auto px-3 lg:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* CONTACT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Email
            </p>
            <p className="text-lime-400 text-xl font-semibold mb-8">
              lalit.khairnar.dev@gmail.com
            </p>

            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Phone
            </p>
            <p className="text-white font-medium text-lg">
              +91 9325443405
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Navigation
            </p>
            <ul className="space-y-4 text-white/70 text-sm">
              {["Home", "Services", "Case Studies", "Blog", "Waitlist", "404"].map((item) => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Company
            </p>
            <ul className="space-y-4 text-white/70 text-sm mb-10">
              {["About Us", "Careers", "Contact Us"].map((item) => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Legal
            </p>
            <ul className="space-y-4 text-white/70 text-sm">
              {["Terms of Services", "Privacy Policy"].map((item) => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Follow Us
            </p>
            <ul className="space-y-4 text-white/70 text-sm">
              {["X / Twitter", "Instagram", "Behance", "Telegram", "LinkedIn"].map((item) => (
                <li key={item} className="hover:text-white transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-3 lg:px-12 pb-14 flex flex-col lg:flex-row justify-between items-center text-white/40 text-xs tracking-wide">
        <p>©2026 we4ge. All rights reserved.</p>
        <p className="mt-4 lg:mt-0">Made by we4ge</p>
      </div>

      {/* ================= LARGE BACKGROUND WATERMARK ================= */}
      <div className="absolute bottom-[-40px] left-0 w-full text-center pointer-events-none select-none">
        <h1 className="text-[120px] sm:text-[200px] lg:text-[300px] font-extrabold tracking-tight text-white/5 leading-none">
          we4ge
        </h1>
      </div>

    </footer>
  );
};

export default Footer;
