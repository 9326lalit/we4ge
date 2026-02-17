import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0F19] text-white overflow-hidden">

      {/* ================= TOP CTA SECTION ================= */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12  pb-24">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[160px] -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-10">
              Ready to build scalable
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                AI-powered systems?
              </span>
            </h2>

            <button className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300">
              Get Free Consultation
              <ArrowUpRight size={18} />
            </button>
          </motion.div>

          {/* RIGHT LOGO / VISUAL */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">
              <img
                src="/we4ge_logo.png"
                alt="we4ge logo"
                className="w-60 object-contain opacity-90"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* ================= FOOTER LINKS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* CONTACT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Contact
            </p>

            <div className="space-y-4">
              <p className="text-lg font-medium text-white">
                lalit.khairnar.dev@gmail.com
              </p>
              <p className="text-white/70">
                +91 9325443405
              </p>
              <p className="text-white/50 text-sm">
                Global • Remote First
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Services
            </p>

            <ul className="space-y-4 text-white/70 text-sm">
              {[
                "AI Automation",
                "Web Development",
                "System Architecture",
                "Cloud Deployment",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
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

            <ul className="space-y-4 text-white/70 text-sm">
              {[
                "About Us",
                "Case Studies",
                "Pricing",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
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
              {[
                "LinkedIn",
                "Instagram",
                "Upwork",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col lg:flex-row justify-between items-center text-white/40 text-xs tracking-wide">
          <p>© 2026 we4ge. All rights reserved.</p>
          <p>Built with precision & performance.</p>
        </div>
      </div>

      {/* WATERMARK */}
      <div className="absolute bottom-[-60px] left-0 w-full text-center pointer-events-none select-none">
        <h1 className="text-[120px] sm:text-[220px] lg:text-[320px] font-extrabold tracking-tight text-white/5 leading-none">
          we4ge
        </h1>
      </div>

    </footer>
  );
};

export default Footer;
