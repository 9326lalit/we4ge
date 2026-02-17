import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "AI Automation & Workflows",
    description:
      "We design and implement intelligent automation systems that eliminate manual processes and increase operational efficiency.",
    points: [
      "Custom AI Agents",
      "Workflow Automation",
      "Data Processing Pipelines",
      "Predictive Analytics",
    ],
  },
  {
    title: "Full-Stack Product Development",
    description:
      "From idea to scalable deployment — we build high-performance digital products with modern technologies.",
    points: [
      "Frontend & Backend Development",
      "Scalable Architecture",
      "API Integrations",
      "Cloud Deployment",
    ],
  },
  {
    title: "System Architecture & Scaling",
    description:
      "We architect robust, secure, and scalable systems designed for long-term growth and performance.",
    points: [
      "Microservices Design",
      "High-Availability Systems",
      "Database Optimization",
      "Performance Engineering",
    ],
  },
  {
    title: "Technical Consulting & Strategy",
    description:
      "Strategic technical direction aligned with your business goals — from roadmap planning to execution.",
    points: [
      "Technology Audits",
      "Product Roadmapping",
      "AI Strategy",
      "Long-Term Partnerships",
    ],
  },
];

const Services = () => {
  return (
    <section className="relative py-32 bg-[#0B0F19] overflow-hidden">

      {/* Background Glow */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-28"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Intelligent Systems.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Built for Scale.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We combine AI, engineering, and strategic thinking to
            build digital infrastructure that powers modern businesses.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 gap-16">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
className="relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:border-purple-500/50 transition duration-500 group"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 text-gray-300 text-sm">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>

              <button className="mt-10 inline-flex items-center gap-2 text-white hover:text-blue-400 transition">
                Learn More
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-semibold text-white mb-6">
            Let’s build your next scalable system.
          </h3>

          <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition duration-300">
           <span className="relative z-10 flex items-center gap-2">
  Start a Project
  <ArrowUpRight size={18} />
</span>

<span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></span>

          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
