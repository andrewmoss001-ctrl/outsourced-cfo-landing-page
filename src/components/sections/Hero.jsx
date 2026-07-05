// src/components/sections/Hero.jsx
import React from "react";
import Button from "../ui/Button";
import TrustBadge from "../ui/TrustBadge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white text-navy pt-10 pb-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column */}
          <div className="flex-1 text-center md:text-left">
            {/* Logo Container for Alignment */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/outsourced-cfo-landing-page/ofco-logo.svg"
                alt="OFCO logo"
                className="h-14 w-auto mb-6 md:h-16"
              />
            </div>
            <h1 className="cambon text-3xl md:text-5xl font-extrabold leading-tight">
              Build a World-Class Finance Function{" "}
              <span className="text-gold">for Your Growing Business</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mt-4 max-w-xl mx-auto md:mx-0">
              Get strategic insights, cash flow control, and fundraising
              acceleration—
              <strong className="text-gold">
                {" "}
                without the cost of a full-time CFO.
              </strong>
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-8 w-full">
              <a
                href="#book-call"
                className="w-full sm:w-auto text-center md:text-left"
              >
                <Button
                  primary
                  size="large"
                  className="text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center"
                >
                  Book a Free 30-Minute Health Check
                </Button>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto text-center md:text-left text-lg"
              >
                Or take deeper look at what we can offer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 inline-block ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap cambon justify-center md:justify-start gap-6 md:gap-10 mt-5 pt-8 border-t border-white/10">
              <TrustBadge
                className="text-navy"
                number="1,300+"
                label="Companies"
              />
              <TrustBadge
                className="text-navy"
                number="34+"
                label="Countries"
              />
              <TrustBadge
                className="text-navy"
                number="$100M+"
                label="Capital Raised"
              />
              <TrustBadge
                className="text-navy"
                number="25+"
                label="Industries"
              />
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="flex-1 w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-3 border border-white/10 overflow-hidden aspect-[4/4] md:aspect-[2/4] lg:aspect-[2/3] xl:aspect-[3/3]">
              <img
                src="https://mlpwl7hs4ll3.i.optimole.com/cb:Dyfe.5732/w:433/h:557/q:85/dpr:1.3/f:best/https://www.ocfo.com/wp-content/uploads/2024/10/Hiring-the-right-financial-talent.jpg"
                alt="Strategic finance team working together"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
