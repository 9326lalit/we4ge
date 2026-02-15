import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tell us about your project, goals, and challenges. 
            We’ll get back to you with a clear strategy and next steps.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Business Inquiries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For partnerships, collaborations, or general questions,
                reach out directly.
              </p>
              <p className="mt-4 text-gray-900 font-medium">
                lalit.khairnar.dev@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Office
              </h3>
              <p className="text-gray-600">
                123 Business Avenue <br />
                Suite 400 <br />
                New York, NY 10001
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Monday – Friday <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-10">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-900 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-black transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
