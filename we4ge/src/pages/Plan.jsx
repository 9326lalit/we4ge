import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Ideal for early-stage startups and growing businesses.",
    features: [
      "Custom Website Development",
      "Responsive UI/UX Design",
      "Basic SEO Optimization",
      "Cloud Deployment",
      "30 Days Support",
    ],
  },
  {
    name: "Growth",
    price: "$6,500",
    description: "Advanced automation & scalable system architecture.",
    popular: true,
    features: [
      "Everything in Starter",
      "AI Workflow Automation",
      "Custom Backend Architecture",
      "Performance Optimization",
      "Analytics Dashboard",
      "90 Days Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale AI infrastructure & enterprise solutions.",
    features: [
      "Dedicated Engineering Team",
      "Enterprise AI Integration",
      "Microservice Architecture",
      "High-Security Deployment",
      "24/7 Monitoring & Support",
      "Long-Term Technical Partnership",
    ],
  },
];

const Plan = () => {
  return (
    <section className="relative py-32 bg-[#0B0F19] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* SECTION INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Pricing Plans
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Flexible Solutions.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Built for Scale.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Transparent pricing designed to match your business growth stage.
            From startup foundations to enterprise AI infrastructure.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl border ${
                plan.popular
                  ? "border-purple-500 bg-white/10 scale-105"
                  : "border-white/10 bg-white/5"
              } backdrop-blur-xl p-10 flex flex-col justify-between`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div>

                <h3 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                <p className="text-4xl font-semibold text-white mb-8">
                  {plan.price}
                </p>

                <ul className="space-y-4 text-sm text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <button
                className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition ${
                  plan.popular
                    ? "bg-white text-black hover:scale-105"
                    : "border border-white/20 text-white hover:bg-white hover:text-black"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                <ArrowUpRight size={16} />
              </button>

            </motion.div>
          ))}

        </div>

        {/* TRUST LINE */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          All plans include deployment, monitoring, and secure cloud hosting.
        </div>

      </div>
    </section>
  );
};

export default Plan;
