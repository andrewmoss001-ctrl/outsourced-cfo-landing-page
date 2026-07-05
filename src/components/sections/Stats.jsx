// src/components/sections/Stats.jsx
import React from "react";
import TrustBadge from "../ui/TrustBadge";

const statsData = [
  { number: "1,300+", label: "Businesses Supported" },
  { number: "34+", label: "Countries Reached" },
  { number: "$100M+", label: "Capital Raised for Clients" },
  { number: "25+", label: "Industries Served" },
];

const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-navy border-y border-navy-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 cambon">
          {statsData.map((stat, idx) => (
            <TrustBadge key={idx} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
