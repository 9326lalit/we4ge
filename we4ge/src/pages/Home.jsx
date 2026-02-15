import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                Web Development • Software Engineering • AI Automation
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
                Engineering Digital Products
                <br />
                That Scale With Your Business
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We build modern websites, scalable software platforms,
                and intelligent automation systems that streamline operations,
                improve efficiency, and drive measurable growth.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">

              <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-4 font-medium hover:bg-black transition">
                Schedule Consultation
                <ArrowUpRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 border border-gray-300 px-7 py-4 font-medium hover:bg-gray-100 transition">
                View Case Studies
                <ArrowUpRight size={18} />
              </button>

            </div>

            {/* TRUST INDICATOR */}
            <div className="">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                Trusted by Growing Companies
              </p>

              <div className="flex flex-wrap items-center gap-10 opacity-70">
                <img src="/public/Bameetech.png" alt="logo" className="h-6" />
                <img src="/public/infinite_uptime.jpg" alt="logo" className="h-6" />
                <img src="/public/tp_logo.webp" alt="logo" className="h-6" />
                <img src="/public/intangles_logo.jpg" alt="logo" className="h-6" />
              </div>
            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-[480px] border border-gray-200 rounded-lg p-10">

              <img
                src="/we4ge_logo.png"
                alt="Company Illustration"
                className="w-full object-contain mb-10"
              />

              <div className="grid grid-cols-3 gap-8 text-center">

                <div>
                  <p className="text-2xl font-semibold text-gray-900">10+</p>
                  <p className="text-sm text-gray-500">
                    Projects Delivered
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-gray-900">5+</p>
                  <p className="text-sm text-gray-500">
                    Industries Served
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-500">
                    System Reliability
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
