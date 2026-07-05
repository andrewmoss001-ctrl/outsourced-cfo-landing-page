import React from "react";
import { useForm } from "../../hooks/useForm";

const FinalCTA = () => {
  // Mailto submit handler
  const handleMailtoSubmit = (formValues) => {
    const to = "soreta@ocfo.com";
    const cc = "melissa@ocfo.com";
    const subject = encodeURIComponent("New Strategy Session Request");
    const body = encodeURIComponent(
      `Name: ${formValues.name}\n` +
        `Email: ${formValues.email}\n` +
        `Company: ${formValues.company}\n` +
        `Title: ${formValues.title}\n` +
        `Challenge: ${formValues.challenge || "N/A"}`,
    );
    const mailtoLink = `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;
    // Open default email client
    window.location.href = mailtoLink;
  };

  const { values, handleChange, handleSubmit, isSubmitted, errors } = useForm(
    {
      name: "",
      email: "",
      company: "",
      title: "",
      challenge: "",
    },
    handleMailtoSubmit, // <-- pass the mailto function
  );

  return (
    <section className="py-16 md:py-24 bg-white" id="book-call">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="cambon text-3xl md:text-5xl font-bold text-navy">
            Ready to Turn Finance Into Your{" "}
            <span className="text-gold">Competitive Advantage</span>?
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Chat with our team—we love talking to founders.
          </p>
          <span className="inline-block mt-2 bg-white text-green-800 text-sm font-semibold px-4 py-1 rounded-full">
            ✅ No pressure. No hidden fees.
          </span>
        </div>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={values.name}
                  onChange={handleChange}
                  className={`w-full p-4 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-xl text-base focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Company Email *"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full p-4 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-xl text-base focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name *"
                  value={values.company}
                  onChange={handleChange}
                  className={`w-full p-4 border ${errors.company ? "border-red-500" : "border-gray-300"} rounded-xl text-base focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition`}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>
              <div>
                <select
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className={`w-full p-4 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-xl text-base focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition bg-white`}
                >
                  <option value="" disabled>
                    Job Title *
                  </option>
                  <option>Founder / CEO</option>
                  <option>CFO / Finance Director</option>
                  <option>VP of Finance</option>
                  <option>Other</option>
                </select>
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="challenge"
                  placeholder="What's your biggest financial challenge right now? (Optional)"
                  value={values.challenge}
                  onChange={handleChange}
                  rows="2"
                  className="w-full p-4 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-gold hover:bg-gold text-white font-bold py-4 px-6 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/40 hover:-translate-y-0.5"
            >
              Book My Free Strategy Session
            </button>
            <p className="text-center text-slate-400 text-xs mt-4">
              We respect your privacy. We will never share your information.
            </p>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-800">
              Thank you, {values.name}!
            </h3>
            <p className="text-green-700 text-lg mt-2">
              Your strategy session request is confirmed.
            </p>
            <p className="text-green-600 mt-1">
              Check your email for a calendar link to book your time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalCTA;
