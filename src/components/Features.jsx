import React from "react";

const Features = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-10">
      {/* Background split */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-finpayLight"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      <div className="max-w-[90rem] w-full mx-auto relative">
        <div className="bg-white rounded-3xl shadow-xl px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
          {/* Section Header */}
          <div className="mb-16 text-center lg:text-left">
            <div className="text-finpayPrimary text-sm sm:text-base font-semibold tracking-wider uppercase mb-4">
              FUTURE PAYMENT
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-finpayDark leading-snug lg:leading-tight">
                Experience that grows with your scale.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed lg:pt-4">
                Design a financial operating system that works <br className="hidden lg:block" />
                for your business and streamlined cash flow <br className="hidden lg:block" />
                management
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="space-y-4 md:space-y-6 flex flex-col items-start text-left">
              <img
                src="/icons/transfer-svgrepo-com.svg"
                alt="Transfer Icon"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-finpayDark mb-2">
                  Free transfers
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Create a financial experienceday and automate repeat purchases
                  by scheduling recurring payments.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-4 md:space-y-6 flex flex-col items-start text-left">
              <img
                src="/icons/account.svg"
                alt="Account Icon"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-finpayDark mb-2">
                  Multiple account
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Run your operations with cash from your account and generate
                  yield on funds stored in your account.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="space-y-4 md:space-y-6 flex flex-col items-start text-left">
              <img
                src="/icons/security.svg"
                alt="Security Icon"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-finpayDark mb-2">
                  Unmatched security
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Securely manage your finances with organization-wide MFA,
                  card-locking, and account-level controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
