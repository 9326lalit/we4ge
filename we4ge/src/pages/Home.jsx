import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const [stats, setStats] = useState({
    requests: 48291,
    agents: 12,
    response: 94,
    uptime: 99.99,
  });

  // Dynamic Update
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        requests: prev.requests + Math.floor(Math.random() * 5),
        agents: prev.agents,
        response:
          prev.response + (Math.random() > 0.5 ? 1 : -1),
        uptime: 99.99,
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0B0D12] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm text-gray-400 mb-6 tracking-wide">
              AI Infrastructure for Modern Businesses
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Intelligent Automation
              <br />
              <span className="text-gray-400">
                Designed for Scale
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              Deploy AI-powered systems that automate workflows,
              improve productivity, and deliver measurable business impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-lg text-gray-300 hover:bg-white/5 transition">
                View Demo
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="flex gap-12 pt-8 border-t border-white/10 text-sm text-gray-400">
              <div>
                <p className="text-white text-2xl font-semibold">250+</p>
                Clients
              </div>
              <div>
                <p className="text-white text-2xl font-semibold">99.99%</p>
                Uptime
              </div>
              <div>
                <p className="text-white text-2xl font-semibold">3.2x</p>
                Productivity
              </div>
            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >

            <div className="bg-[#11131A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-sm text-gray-400">Live Dashboard</p>
                  <p className="text-white font-medium">
                    System Overview
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Live
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-6">

                  <StatCard
                    label="API Requests"
                    value={stats.requests.toLocaleString()}
                  />

                  <StatCard
                    label="Active Agents"
                    value={stats.agents}
                  />

                  <StatCard
                    label="Response Time"
                    value={`${stats.response} ms`}
                  />

                  <StatCard
                    label="System Uptime"
                    value={`${stats.uptime}%`}
                  />

                </div>

                {/* Animated Performance Bars */}
                <div className="space-y-5">

                  <ProgressBar
                    label="Automation Coverage"
                    value={92}
                  />

                  <ProgressBar
                    label="AI Model Accuracy"
                    value={96}
                  />

                  <ProgressBar
                    label="System Health"
                    value={98}
                  />

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* ================= COMPONENTS ================= */

const StatCard = ({ label, value }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-xl p-5"
    >
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={value}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-semibold"
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

const ProgressBar = ({ label, value }) => {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-white"
        />
      </div>
    </div>
  );
};

export default Home;
