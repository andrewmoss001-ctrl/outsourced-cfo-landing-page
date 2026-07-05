// src/components/sections/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    quote:
      "Outsourced CFO helped us scale from $5M to $50M ARR with clear financial visibility. They are the reason we closed our Series B.",
    name: "Sarah Chen",
    title: "CEO, CloudSaaS Inc.",
    avatar: "SC",
  },
  {
    quote:
      "We finally have board-ready reports that our investors actually trust. The team's strategic insight is worth 10x their fee.",
    name: "Michael Torres",
    title: "Founder, HealthTech Innovations",
    avatar: "MT",
  },
  {
    quote:
      "They don't just report the numbers—they operate as a true partner. The interim CFO they placed saved us from a major cash crisis.",
    name: "David Okafor",
    title: "Co-Founder, FinPay Solutions",
    avatar: "DO",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-navy cambon">
            What Founders Say
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Real stories from{" "}
            <span className="text-gold font-bold">real leaders</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-1 text-gold text-lg mb-4">
                {"★".repeat(5)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
