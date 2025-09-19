import React from "react";

const CTASection = () => {
  return (
    <div className="bg-finpayDark py-16 px-4 sm:px-8 md:px-16 mx-4 sm:mx-10 rounded-3xl mb-12">
      <div className="w-full text-left">

        {/* Section label */}
        <div className="text-finpayPrimary text-sm font-medium tracking-wider uppercase mb-6">
          TRY IT NOW
        </div>

        {/* Heading and buttons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            Ready to level up your
            <br />
            payment process?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-finpayPrimary hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
              Get Started Now
            </button>
            <button className="text-white hover:text-finpayPrimary px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 border border-finpayPrimary w-full sm:w-auto justify-center">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Supporting paragraph */}
        <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-md">
          Supports small businesses with simple invoicing, 
          <br />
          powerful integrations, and cash flow management tools.
        </p>
      </div>
    </div>
  );
};

export default CTASection;
