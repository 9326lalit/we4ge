import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We collaborate with startups, SaaS companies, AI-driven businesses, and enterprises looking to scale digital infrastructure. Our solutions are adaptable across fintech, healthcare, logistics, and tech-enabled services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on complexity. A standard product build ranges between 4–12 weeks, while enterprise-scale AI systems may take longer. We always define clear milestones before development begins.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every project includes post-launch monitoring and support. We also offer long-term technical partnerships for scaling, maintenance, and performance optimization.",
  },
  {
    question: "Can you integrate AI into existing systems?",
    answer:
      "Absolutely. We specialize in AI workflow automation, predictive analytics, and scalable AI architecture that integrates seamlessly with your existing infrastructure.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form. We'll schedule a discovery call to understand your goals and propose a tailored roadmap aligned with your business vision.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative  bg-[#0B0F19] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Everything You
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Need to Know.
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Clear answers to common questions about our services,
            workflow, and technical capabilities.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus className="text-purple-400" size={20} />
                ) : (
                  <Plus className="text-purple-400" size={20} />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-400 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>

        {/* Bottom Support Text */}
        <div className="mt-20 text-center text-gray-500 text-sm">
          Still have questions? Reach out to our team anytime.
        </div>

      </div>
    </section>
  );
};

export default Faq;
