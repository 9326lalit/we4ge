import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="relative bg-[#0B0F19] text-white overflow-hidden pb-20 pt-10">

      {/* Subtle Background Accent */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-purple-600/10 blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-6">
            Case Studies
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Engineered for Performance.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Proven in Production.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We design and deploy scalable AI systems that deliver measurable
            improvements across enterprise operations, sales automation,
            and data intelligence.
          </p>
        </div>

        {/* ================= FEATURED CASE ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Enterprise AI Infrastructure
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
                Intelligent Automation Platform
                <br />
                for Operational Excellence
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Delivered a robust AI-powered automation framework that
                streamlined workflows, reduced manual dependencies,
                and enabled real-time decision intelligence across departments.
              </p>
            </div>

            {/* Metrics — Cleaner Layout */}
            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/10">
              <Metric value="+47%" label="Efficiency Increase" />
              <Metric value="3.2x" label="Conversion Growth" />
              <Metric value="99.98%" label="Infrastructure Reliability" />
            </div>

            <button className="inline-flex items-center gap-2 mt-4 text-white border border-white/20 px-7 py-3 rounded-lg hover:bg-white hover:text-black transition">
              View Full Case Study
              <ArrowUpRight size={16} />
            </button>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Layer */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-purple-600/20 to-blue-500/20 blur-3xl rounded-3xl" />

            {/* Product Preview */}
            <div className="relative bg-[#11131A] border border-white/10 rounded-3xl shadow-2xl p-8">

              <p className="text-sm text-gray-400 mb-6">
                Platform Overview
              </p>

              <div className="space-y-6">

                <PreviewBar label="Automation Coverage" value={92} />
                <PreviewBar label="AI Model Accuracy" value={96} />
                <PreviewBar label="System Health" value={98} />

              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex justify-between text-sm text-gray-400">
                <span>48,291 Requests Processed</span>
                <span>12 Active AI Agents</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ================= SECONDARY CASES ================= */}
        <div className="space-y-16">

          <HorizontalCase
            title="AI Lead Scoring & Smart Routing"
            description="Built a custom AI model to automatically qualify, prioritize, and route inbound leads, accelerating pipeline velocity."
            stats={["2x Qualification Rate", "-35% Response Time", "$1.5M Pipeline"]}
          />

          <HorizontalCase
            title="Enterprise Analytics Dashboard"
            description="Developed a cloud-native monitoring system delivering actionable insights for executive-level decision making."
            stats={["+60% Productivity", "Cloud Native Architecture", "Enterprise Secure"]}
          />

        </div>

      </div>
    </section>
  );
};

/* ================= SMALL COMPONENTS ================= */

const Metric = ({ value, label }) => (
  <div>
    <p className="text-4xl font-semibold">{value}</p>
    <p className="text-gray-500 text-sm mt-2">{label}</p>
  </div>
);

const PreviewBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-400">{label}</span>
      <span>{value}%</span>
    </div>

    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-full bg-white"
      />
    </div>
  </div>
);

const HorizontalCase = ({ title, description, stats }) => (
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-t border-white/10 pt-12 gap-8">

    <div>
      <h4 className="text-2xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-400 max-w-xl">{description}</p>
    </div>

    <div className="flex flex-wrap gap-8 text-sm text-white">
      {stats.map((stat, i) => (
        <span key={i}>{stat}</span>
      ))}
    </div>

  </div>
);

export default CaseStudy;
