import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-32 bg-[#0B0F19] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/20 blur-[180px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Let’s Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Extraordinary.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Tell us about your project, your goals, and your vision.
            We’ll help you turn it into a scalable digital product.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let’s Start a Conversation
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Whether you're launching a startup, scaling operations,
                or building AI-driven systems — our team is ready
                to collaborate and deliver impact.
              </p>
            </div>

            <div className="space-y-6 text-gray-300">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={20} />
                <span>lalit.khairnar.dev@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" size={20} />
                <span>+91 9325443405</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" size={20} />
                <span>Global • Remote First</span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
          >
            <form className="space-y-6">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:scale-105 transition"
              >
                Send Message
                <ArrowUpRight size={16} />
              </button>

            </form>
          </motion.div>

        </div>

        {/* BOTTOM TRUST TEXT */}
        <div className="mt-24 text-center text-gray-500 text-sm">
          We typically respond within 24 hours.
        </div>

      </div>
    </section>
  );
};

export default Contact;
