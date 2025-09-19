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
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">

          {/* Plus Plan */}
          <div className="bg-white rounded-3xl p-12 sm:p-16 md:p-20 w-full sm:w-[28rem] md:w-[30rem] shadow-2xl border border-gray-100 flex flex-col text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-finpayDark mb-6 sm:mb-8">Plus</h3>

            {/* Price and arrow */}
            <div className="mt-auto flex justify-between items-center">
              <div className="text-finpayDark text-2xl sm:text-3xl font-bold">
                £2.99 <span className="text-gray-600 text-base sm:text-xl font-normal">/month</span>
              </div>
              <img 
                src="/icons/arrow2.svg" 
                alt="Arrow Icon" 
                className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
              />
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-finpayPrimary to-teal-600 rounded-3xl p-12 sm:p-16 md:p-20 w-full sm:w-[28rem] md:w-[30rem] text-white relative overflow-hidden flex flex-col text-left shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Premium</h3>

              {/* Price and arrow */}
              <div className="mt-auto flex justify-between items-center">
                <div className="text-2xl sm:text-3xl font-bold">
                  £6.99 <span className="text-white/80 text-base sm:text-xl font-normal">/month</span>
                </div>
                <img 
                  src="/icons/arrow2.svg" 
                  alt="Arrow Icon" 
                  className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;
