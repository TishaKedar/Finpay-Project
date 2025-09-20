import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-white pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="text-finpayPrimary text-sm font-medium tracking-wider uppercase mb-2">
            CHOOSE PLAN
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">

          {/* Plus Plan */}
          <div className="bg-[#e9f3f4] rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col h-64 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

            {/* Title at top-left */}
            <h3 className="text-4xl sm:text-5xl font-bold text-finpayDark absolute top-6 left-6">
              Plus
            </h3>

            {/* Price at bottom-left, Arrow at bottom-right */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              {/* Price */}
              <div className="text-2xl sm:text-3xl font-bold text-finpayDark left-10">
                £6.99 <span className="text-finpayDark/80 text-base sm:text-xl font-normal">/month</span>
              </div>

              {/* Arrow */}
              <img 
                src="/icons/dark-arr.svg" 
                alt="Arrow Icon" 
                className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
              />
            </div>

          </div>

          {/* Premium Plan */}
<div className="bg-gradient-to-br from-finpayPrimary to-teal-600 rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col h-64 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

  {/* Title at top-left */}
  <h3 className="text-4xl sm:text-5xl font-bold text-white absolute top-6 left-6">
    Premium
  </h3>

  {/* Price at bottom-left, Arrow at bottom-right */}
  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
    {/* Price */}
    <div className="text-2xl sm:text-3xl font-bold text-white left-10">
      £6.99{" "}
      <span className="text-white/80 text-base sm:text-xl font-normal">
        /month
      </span>
    </div>

    {/* Arrow */}
    <img
      src="/icons/arrow2.svg"
      alt="Arrow Icon"
      className="w-8 sm:w-10 h-8 sm:h-10 object-contain relative z-10"
    />
  </div>

  {/* Big Lines Icon covering right half */}
  {/* Big Lines Icon shifted more to right */}
<img
  src="/icons/lines2.svg"
  alt="Lines Icon"
  className="absolute top-0 right-[-40px] w-[60%] h-full object-cover opacity-40"
/>

</div>
</div >
      </div>
    </div>
  );
};

export default StatsSection;
