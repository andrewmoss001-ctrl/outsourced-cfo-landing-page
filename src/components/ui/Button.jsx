// src/components/ui/Button.jsx
import React from "react";

const Button = ({
  children,
  primary = false,
  size = "default",
  className = "",
  ...props
}) => {
  const base =
    "font-bold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "bg-gold text-navy hover:shadow-lg hover:shadow-gold/40 hover:-translate-y-0.5",
    secondary:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
  };

  const sizes = {
    small: "px-4 py-2 text-sm min-h-[44px]",
    default: "px-6 py-3 text-base min-h-[54px]",
    large: "px-8 py-4 text-lg min-h-[60px]",
  };

  return (
    <button
      className={`${base} ${variants[primary ? "primary" : "secondary"]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
