import React from "react";

const StepsSection = () => {
  return (
    <div className="bg-finpayDark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-finpayPrimary text-sm font-medium tracking-wider uppercase mb-6 text-left">
          STEP
        </div>

        <h2 className="text-4xl font-bold text-white mb-16 max-w-2xl text-left">
          Maximize your returns with a<br />
          Reserve account that generates.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2a1d63] rounded-2xl p-8 shadow-inner flex flex-col items-start text-left bg-gradient-to-b from-[#2a1d63] to-[#1e133d]">
            <div className="text-6xl font-bold text-gray-400 mb-6">1</div>
            <h3 className="text-xl font-bold text-white mb-4">Open your account</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sign up to Finpay and set up your account from the dashboard.
            </p>
          </div>

          <div className="bg-[#2a1d63] rounded-2xl p-8 shadow-inner flex flex-col items-start text-left bg-gradient-to-b from-[#2a1d63] to-[#1e133d]">
            <div className="text-6xl font-bold text-gray-400 mb-6">2</div>
            <h3 className="text-xl font-bold text-white mb-4">Transfer your money</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Move money from another account and start earning instantly.
            </p>
          </div>

          <div className="bg-[#2a1d63] rounded-2xl p-8 shadow-inner flex flex-col items-start text-left bg-gradient-to-b from-[#2a1d63] to-[#1e133d]">
            <div className="text-6xl font-bold text-gray-400 mb-6">3</div>
            <h3 className="text-xl font-bold text-white mb-4">Watch your balance grow</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Access your funds instantly while remaining insulated from market volatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
