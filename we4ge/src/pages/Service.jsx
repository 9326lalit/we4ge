import { 
  Globe, 
  Code2, 
  Smartphone, 
  Cpu, 
  Bot, 
  Settings, 
  Database, 
  Cloud 
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites and web applications tailored to your business goals.",
    icon: Globe,
  },
  {
    title: "Custom Software Development",
    description:
      "End-to-end software solutions designed specifically for your workflows, operations, and growth strategy.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications built for performance, usability, and scalability.",
    icon: Smartphone,
  },
  {
    title: "AI Strategy & Automation",
    description:
      "Integrate intelligent automation and AI systems to optimize operations and improve decision-making.",
    icon: Cpu,
  },
  {
    title: "AI Agent & Chatbot Development",
    description:
      "Design and deploy smart AI agents and conversational bots to enhance customer engagement.",
    icon: Bot,
  },
  {
    title: "CRM & Business System Development",
    description:
      "Custom CRM, ERP, and internal management systems to streamline your business processes.",
    icon: Database,
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
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
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
                className="group bg-white p-4 rounded-sm border border-gray-200 hover:shadow-xl transition duration-300"
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
