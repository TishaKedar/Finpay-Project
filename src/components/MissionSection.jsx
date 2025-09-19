const MissionSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-finpayPrimary text-sm font-medium tracking-wider uppercase mb-6">
          OUR MISSION
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-finpayDark mb-6">
          We've helped
          <br />
          innovative companies
        </h2>

        <p className="text-gray-600 mb-16 max-w-md mx-auto text-sm sm:text-base">
          Hundreds of all sizes and across all industries have made big improvements with us.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
          <div className="text-center">
            <div className="text-3xl sm:text-5xl font-bold text-finpayDark mb-2">24%</div>
            <div className="text-gray-600 text-sm">Revenue business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-5xl font-bold text-finpayDark mb-2">180K</div>
            <div className="text-gray-600 text-sm">In annual revenue</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-5xl font-bold text-finpayDark mb-2">10+</div>
            <div className="text-gray-600 text-sm">Months of runway</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
