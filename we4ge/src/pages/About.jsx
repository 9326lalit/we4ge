import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="relative  bg-[#0A0F1C] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[500px] bg-blue-600/20 blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            About Us
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Leadership Driving
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Innovation & Execution
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We architect intelligent AI-powered systems and scalable digital
            infrastructure for ambitious organizations. Our focus is simple —
            engineer high-performance solutions that deliver measurable
            business growth.
          </p>
        </div>

        {/* CORE PILLARS */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h4 className="text-xl font-semibold text-white mb-4">
              Strategic Engineering
            </h4>
            <p className="text-gray-400 leading-relaxed">
              We design scalable architectures built for long-term growth,
              performance, and operational stability.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h4 className="text-xl font-semibold text-white mb-4">
              AI & Automation
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Intelligent automation systems that reduce inefficiencies,
              optimize workflows, and accelerate revenue performance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
            <h4 className="text-xl font-semibold text-white mb-4">
              Enterprise Execution
            </h4>
            <p className="text-gray-400 leading-relaxed">
              We execute with precision — secure deployments, monitoring,
              and continuous optimization at scale.
            </p>
          </div>

        </div>

        {/* LEADERSHIP SECTION */}
        <div className="border-t border-white/10 pt-20">

          <div className="mb-14">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Leadership Team
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Experienced engineering leadership focused on delivering
              transformative AI-driven digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Founder Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1000"
                alt="Founder"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h4 className="text-xl font-semibold text-white mb-1">
                  Lalit Khairnar
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Founder & Lead Engineer
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Software engineer and AI systems architect focused on
                  building scalable automation platforms and enterprise-grade
                  digital infrastructure.
                </p>
              </div>
            </motion.div>

            {/* Co-Founder / Leader */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000"
                alt="Leadership"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h4 className="text-xl font-semibold text-white mb-1">
                  Strategic Operations Lead
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Operations & Growth
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Drives operational excellence, client strategy, and
                  execution alignment to ensure measurable performance
                  outcomes.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* CTA BLOCK */}
        <div className="mt-24 text-center">
          <h4 className="text-2xl font-semibold text-white mb-6">
            Let’s Build Intelligent Systems That Scale
          </h4>

          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition">
            Start a Conversation
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
