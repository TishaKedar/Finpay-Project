import React from "react";

const Hero = () => {
  return (
    <section className="bg-finpayLight min-h-screen relative overflow-x-hidden">
      {/* Decorative Lines */}
      <div className="hidden sm:block absolute top-0 -right-52 h-full w-1/2 pointer-events-none">
        <div className="relative h-full">
          <img
            src="/icons/lines2.svg"
            alt="Decorative background lines"
            className="h-full object-cover"
          />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-finpayLight to-transparent"></div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="px-6 sm:px-10 lg:px-20 pt-32 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-finpayDark leading-relaxed">
              <span className="font-bold block mb-6">Get paid early</span>
              <span className="font-normal block mb-6">save automatically</span>
              <span className="font-normal block">all your pay.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Supports small businesses with simple invoicing,
              <br className="hidden md:block" />
              powerful integrations, and cash flow management tools.
            </p>

            {/* Email Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-finpayPrimary focus:border-transparent text-base bg-white"
              />
              <button className="bg-finpayPrimary text-white font-medium px-6 sm:px-8 py-4 rounded-xl hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 text-base sm:text-base h-full">
                <span>Get Started</span>
                <img
                  src="/icons/arrow2.svg"
                  alt="Arrow Icon"
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* Logos Row */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 pt-8">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-finpayDark">
                Klarna.
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-finpayDark">
                Coinbase
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-finpayDark flex items-center justify-center">
                <span className="text-finpayPrimary mr-1 text-2xl sm:text-3xl md:text-4xl">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
                    <img
                      src="/icons/arrow-i.svg"
                      alt="Instacart Logo Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </span>
                Instacart
              </div>
            </div>
          </div>

          {/* Right Content / Card */}
          <div className="flex justify-center lg:justify-start mt-10 lg:mt-20 relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Overlapping Credit Card */}
              <div
                className="
                  absolute -top-12 right-0 sm:-top-16 sm:-right-6
                  w-28 h-[260px] sm:w-64 sm:h-[300px]
                  rounded-3xl shadow-lg z-20 overflow-hidden text-white font-bold text-3xl
                "
              >
                {/* Green Top Part */}
                <div className="bg-finpayPrimary h-3/4 flex flex-col items-start justify-start p-6 pl-8 sm:pl-10 text-left text-base sm:text-lg md:text-xl">
                  Credit card <br />
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold">
                    234 *** **
                  </span>
                </div>

                {/* Purple Bottom Part */}
                <div className="bg-[#180d39] h-1/4 flex items-center justify-between p-4 sm:p-5 pl-6 sm:pl-8 pr-6 sm:pr-8 text-sm sm:text-lg">
                  <span className="text-lg sm:text-2xl">VISA</span>
                  <img
                    src="/wifi-svgrepo-com.svg"
                    alt="WiFi Payment Symbol"
                    className="h-5 w-5 sm:h-8 sm:w-8"
                  />
                </div>
              </div>

              {/* Main White Box */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 relative z-10 max-h-[28rem] overflow-hidden">
                {/* User Header */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 pt-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-finpayPrimary">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center">
                      <img
                        src="/icons/dlogo.png"
                        alt="Bank Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base text-left">
                      Dipa Inhouse
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      dipainhouse@gmail.com
                    </p>
                  </div>
                </div>

                {/* Invoice Box */}
                <div className="border border-gray-200 rounded-xl p-3 mb-4 bg-white shadow-sm text-left">
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">Invoice</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    $1,876,580
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    April 21, 2024
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-2 sm:space-y-3 mb-4">
                  <div className="flex items-center justify-between p-2 sm:p-3 border-2 border-finpayPrimary rounded-xl bg-finpayLight">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
                        <img
                          src="/icons/cc.svg"
                          alt="Credit Card Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                        Credit Card
                      </span>
                    </div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-finpayPrimary rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-xl">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
                        <img
                          src="/icons/acc.svg"
                          alt="Bank Account Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-semibold text-gray-700 text-xs sm:text-sm">
                        Bank Account
                      </span>
                    </div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Pay Button */}
                <button className="w-full bg-finpayDark text-white font-semibold py-3 rounded-xl hover:bg-opacity-90 transition-colors text-sm sm:text-base">
                  Pay
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
