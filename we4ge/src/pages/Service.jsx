import React from "react";
import {
  Cpu,
  PenTool,
  Bot,
  Settings,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    title: "AI strategy & consulting",
    description:
      "Get a clear roadmap on how AI can drive growth and efficiency for your business.",
    icon: Cpu,
  },
  {
    title: "AI content creation",
    description:
      "Create high-quality AI-powered content that engages your audience and scales your brand.",
    icon: PenTool,
  },
  {
    title: "AI agent development",
    description:
      "Design and deploy AI agents built specifically to solve your unique business challenges.",
    icon: Bot,
  },
  {
    title: "CRM AI automation",
    description:
      "Automate customer interactions and follow-ups to keep relationships strong and organized.",
    icon: Settings,
  },
  {
    title: "AI process automation",
    description:
      "Transform repetitive workflows into smooth, automated systems that save time.",
    icon: RefreshCw,
  },
  {
    title: "CRM AI automation",
    description:
      "Automate customer interactions and follow-ups to keep relationships strong and organized.",
    icon: Settings,
  }
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Our Services
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Automation solutions
            </h2>
          </div>

          <p className="text-gray-600 text-lg max-w-xl">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, and helps your business grow — without extra effort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-sm border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-gray-800 group-hover:text-black transition" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
