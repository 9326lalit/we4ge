import { ArrowUpRight } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="casestudy" className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Case Studies
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Proven Results for Growing Businesses
            </h2>
          </div>

          <button className="mt-8 lg:mt-0 flex items-center gap-2 text-gray-900 font-medium hover:opacity-70 transition">
            View all case studies
            <ArrowUpRight size={18} />
          </button>

        </div>


        {/* ================= CASE 1 ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 border-t border-gray-200 pt-16">

          {/* CONTENT */}
          <div className="space-y-8">

            <div className="flex justify-between text-sm text-gray-500">
              <span className="uppercase tracking-wide font-medium">
                Nakula Studio
              </span>
              <span>2024</span>
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 leading-snug">
              AI Automation System & Modern Portfolio Platform
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              We implemented intelligent workflow automation to streamline
              internal operations and built a high-performance portfolio
              platform that enhanced client acquisition and engagement.
            </p>

            {/* RESULTS */}
            <div className="grid grid-cols-3 gap-8 pt-6">

              <div>
                <p className="text-2xl font-semibold text-gray-900">+40%</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  ROI Increase
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">3</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  New Retainers
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">2x</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Engagement
                </p>
              </div>

            </div>

          </div>

          {/* IMAGE */}
          <div>
            <img
            src="/public/ai_image.jpg"
              alt="Nakula Case Study"
              className="rounded-lg w-full object-cover"
            />
          </div>

        </div>


        {/* ================= CASE 2 ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center border-t border-gray-200 pt-16">

          {/* IMAGE (LEFT ON DESKTOP) */}
          <div className="order-1 lg:order-1">
            <img
            src="/public/ai2.jpg"
              alt="Obima Case Study"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-8 order-2 lg:order-2">

            <div className="flex justify-between text-sm text-gray-500">
              <span className="uppercase tracking-wide font-medium">
                Obima
              </span>
              <span>2026</span>
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 leading-snug">
              AI Lead Scoring & Intelligent Routing System
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              We developed a custom AI agent that automatically qualifies,
              scores, and routes inbound leads, significantly reducing response
              time and improving overall conversion efficiency.
            </p>

            {/* RESULTS */}
            <div className="grid grid-cols-3 gap-8 pt-6">

              <div>
                <p className="text-2xl font-semibold text-gray-900">2x</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Qualified Leads
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">-35%</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Response Time
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">$1.5M+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Pipeline Growth
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
