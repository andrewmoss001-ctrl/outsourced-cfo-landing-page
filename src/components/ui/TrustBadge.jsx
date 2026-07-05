// src/components/ui/TrustBadge.jsx
import React from "react";

const TrustBadge = ({ number, label, className = "" }) => {
  return (
    <div className="text-center md:text-left">
      <span className="block text-2xl md:text-3xl font-extrabold text-gold">
        {number}
      </span>
      <span className={`inter text-sm ${className || "text-white"}`}>
        {label}
      </span>
    </div>
  );
};

export default TrustBadge;
