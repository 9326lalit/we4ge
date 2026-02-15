import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    id: "01",
    name: "Lalit Khairnar",
    role: "Chief Executive Officer",
    image: "/NDP_3395.JPG",
  },
  {
    id: "02",
    name: "Mayuresh Khot",
    role: "Chief Technology Officer",
    image: "/NDP_3395.JPG",
  },
  // {
  //   id: "03",
  //   name: "Gilang Nugroho",
  //   role: "VP of Engineering",
  //   image: "/NDP_3395.JPG",
  // },
  // {
  //   id: "04",
  //   name: "Dinda Kumalasari",
  //   role: "VP of Design",
  //   image: "/NDP_3395.JPG",
  // },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                About Us
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                Leadership Focused on Innovation and Execution
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                We design and deploy intelligent AI systems that help
                organizations operate more efficiently, automate workflows,
                and unlock scalable growth opportunities.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">

              <button className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-3 py-3 font-medium hover:bg-gray-900 hover:text-white transition">
                Learn More
                <ArrowUpRight size={16} />
              </button>

              <button className="inline-flex items-center gap-2 border border-gray-300 px-3 py-3 font-medium hover:bg-gray-100 transition">
                View Careers
                <ArrowUpRight size={16} />
              </button>

            </div>

          </div>


          {/* RIGHT SIDE - TEAM GRID */}
          <div className="grid grid-cols-2 gap-10">

            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group"
              >

                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  <p className="text-xs text-gray-400 tracking-wide">
                    {member.id}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {member.role}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
