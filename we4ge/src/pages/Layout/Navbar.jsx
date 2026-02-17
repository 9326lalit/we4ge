import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#casestudy" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "backdrop-blur-xl bg-[#0B0F19]/90 border-b border-white/10 h-16"
      : "backdrop-blur-xl bg-[#0B0F19]/70 h-20"
  }`}
>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold tracking-tight text-white"
          >
            we4ge
          </motion.a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium text-white/70">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative hover:text-white transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition duration-300"
            >
              Let’s Talk
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B0F19] border-t border-white/10"
          >
            <div className="flex flex-col items-center py-10 space-y-8 text-white/80 text-sm">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition duration-300"
              >
                Let’s Talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
