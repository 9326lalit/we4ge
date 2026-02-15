import React, { useState } from "react";
import { Check } from "lucide-react";

const Plan = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Ideal for small businesses getting started",
      monthly: 999,
      yearly: 799,
      features: [
        "AI strategy session",
        "Basic workflow automation",
        "Monthly performance report",
        "Email support",
      ],
    },
    {
      name: "Growth",
      description: "Best for scaling businesses",
      monthly: 2499,
      yearly: 1999,
      popular: true,
      features: [
        "Everything in Starter",
        "Custom AI agent development",
        "CRM automation setup",
        "Bi-weekly optimization",
      ],
    },
    {
      name: "Enterprise",
      description: "Advanced solutions for large teams",
      contact: true,
      features: [
        "Everything in Growth",
        "Full process automation",
        "Dedicated AI consultant",
        "Advanced analytics dashboard",
      ],
    },
  ];

  return (
    <section id="plan" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-3 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">
            Choose the Right Plan
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-14">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-3 py-2 text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-3 py-2 text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg border transition hover:shadow-lg ${
                plan.popular
                  ? "border-gray-900 shadow-md"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 text-xs font-medium bg-gray-900 text-white px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                {plan.contact ? (
                  <span className="text-3xl font-semibold text-gray-900">
                    Contact Us
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold text-gray-900">
                      ${billing === "monthly" ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {" "}
                      /{billing}
                    </span>
                  </>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <Check size={18} className="mt-1 text-gray-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md font-medium transition ${
                  plan.popular
                    ? "bg-gray-900 text-white hover:bg-black"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.contact ? "Request Quote" : `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;
