import React from "react";

const WhyUsSection = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-finpayPrimary text-sm font-medium tracking-wider uppercase mb-4">
            WHY US
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-finpayDark">
            Why they prefer Finpay
          </h2>
        </div>

        {/* Top Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-12">

          {/* Card 1 */}
          <div className="bg-[#f7fafa] rounded-2xl p-6 sm:p-8 shadow-lg w-full sm:w-[420px] h-64 sm:h-80 flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
            <div className="text-5xl sm:text-8xl font-bold text-finpayPrimary mb-2">
              3k+
            </div>
            <p className="text-finpayDark text-base sm:text-lg font-medium">
              Businesses already running <br className="hidden sm:block" />
              on Finpay
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f7fafa] rounded-2xl p-6 sm:p-8 shadow-lg w-full sm:w-[420px] h-64 sm:h-80 flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg sm:text-2xl font-bold text-finpayDark mb-4 sm:mb-6">
              Instant Withdraw your funds <br className="hidden sm:block" />
              at any time
            </h3>

            {/* Blue + Arrows + Black Circle */}
<div className="flex flex-row items-center justify-center w-full gap-4 sm:gap-6 mt-2">
  {/* Left Blue Box */}
  <div className="w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-finpayPrimary rounded-xl flex items-center justify-center text-white font-bold">
    <img src="/icons/cross.svg" alt="Cross" className="w-4 sm:w-8 md:w-8 h-4 sm:h-8 md:h-8" />
  </div>

  {/* Double Arrows (stacked vertically) */}
  <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24"
      fill="none" stroke="currentColor" strokeWidth={2}
      className="w-12 sm:w-20 md:w-28 h-2 sm:h-4 md:h-6 text-finpayPrimary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M0 12h100m-20-6l20 6-20 6" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24"
      fill="none" stroke="currentColor" strokeWidth={2}
      className="w-12 sm:w-20 md:w-28 h-2 sm:h-4 md:h-6 text-finpayPrimary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M100 12H0m20-6l-20 6 20 6" />
    </svg>
  </div>

  {/* Right Black Circle */}
  <div className="w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
    <img src="/icons/account.svg" alt="Account" className="w-4 sm:w-8 md:w-8 h-4 sm:h-8 md:h-8" />
  </div>
</div>



          </div>
        </div>

        {/* Bottom Full-Width Card with Graph */}
<div className="bg-[#f7fafa] rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-[880px] mx-auto">
  <div className="flex flex-col md:flex-row gap-6 items-center">

    {/* Left side: Text */}
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-lg sm:text-2xl font-bold text-finpayDark mb-2 sm:mb-4">
        No asset volatility
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        Generate returns on your <br className="hidden sm:block" />
        cash reserves without making <br className="hidden sm:block" />
        any investments.
      </p>
    </div>

    {/* Right side: Graph */}
    <div className="flex-1 w-full mt-4 md:mt-0">
      <div className="bg-white rounded-xl p-2 shadow-inner w-full h-auto flex items-center justify-center">
        <img
          src="/icons/graph.png"
          alt="Summary Graph"
          className="w-full h-full max-h-64 sm:max-h-full object-contain"
        />
      </div>
    </div>

  </div>
</div>


      </div>
    </div>
  );
};

export default WhyUsSection;

