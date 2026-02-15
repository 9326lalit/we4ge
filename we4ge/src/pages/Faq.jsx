import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What types of businesses can use Sadeva’s AI solutions?",
    answer:
      "Our AI solutions are designed for startups, growing companies, and enterprises looking to automate workflows, improve efficiency, and scale operations.",
  },
  {
    question: "Do I need technical knowledge to use your solutions?",
    answer:
      "No technical knowledge is required. We handle setup, deployment, and optimization while ensuring your team can easily use the systems.",
  },
  {
    question: "How long does it take to implement AI automation?",
    answer:
      "Implementation typically takes 2–6 weeks depending on complexity, integrations, and customization requirements.",
  },
  {
    question: "Can you build custom AI agents for my business?",
    answer:
      "Yes. We specialize in building tailored AI agents that fit your workflows, industry, and growth objectives.",
  },
  {
    question: "What if I need ongoing support?",
    answer:
      "We provide continuous optimization, monitoring, and support to ensure your AI systems evolve with your business.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-10">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
              Frequently <br /> Asked <br /> Questions
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-3 py-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>

                  <span className="ml-4">
                    {activeIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {/* Animated Content */}
                <div
                  className={`px-3 transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;
