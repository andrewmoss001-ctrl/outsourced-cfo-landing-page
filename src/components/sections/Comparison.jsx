// src/components/sections/Comparison.jsx
import React from "react";

const comparisonData = [
  {
    feature: "Cost",
    diy: "Low, but limited",
    fulltime: "High (Salary + Equity)",
    ocfo: "✅ Flexible & Scalable",
  },
  {
    feature: "Strategic Depth",
    diy: "Shallow",
    fulltime: "Deep",
    ocfo: "✅ Deep",
  },
  {
    feature: "Tech Capability",
    diy: "Basic",
    fulltime: "Depends on individual",
    ocfo: "✅ World-class Stack",
  },
  {
    feature: "Flexibility",
    diy: "None",
    fulltime: "None",
    ocfo: "✅ Scale Up/Down",
  },
];

const Comparison = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="compare">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-navy cambon">
            Why Outsourced CFO?
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            The smartest way to build your finance function.
          </p>
        </div>

        {/* Mobile: Card view, Desktop: Table view */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-2xl border border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-navy text-white">
              <tr>
                <th className="p-5 font-semibold">Dimension</th>
                <th className="p-5 font-semibold">DIY / Bookkeeper</th>
                <th className="p-5 font-semibold">Full-Time CFO</th>
                <th className="p-5  bg-gold text-white uppercase font-bold leading-10">
                  Outsourced CFO
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-5 font-medium text-navy">{row.feature}</td>
                  <td className="p-5 text-gray-600">{row.diy}</td>
                  <td className="p-5 text-gray-600">{row.fulltime}</td>
                  <td className="p-5 font-semibold text-navy">{row.ocfo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-3"
            >
              <p className="font-bold text-navy text-lg">{row.feature}</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-white p-3 rounded-lg text-center border border-gray-100">
                  <span className="block text-xs text-gray-400">DIY</span>
                  <span className="text-gray-700">{row.diy}</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center border border-gray-100">
                  <span className="block text-xs text-gray-400">Full-Time</span>
                  <span className="text-gray-700">{row.fulltime}</span>
                </div>
                <div className="bg-gold/10 p-3 rounded-lg text-center border border-gold/30">
                  <span className="block text-xs text-gold font-bold">
                    OCFO
                  </span>
                  <span className="text-navy font-semibold">
                    {row.ocfo.replace("✅ ", "")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
