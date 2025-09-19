import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-left">

        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

          {/* Logo */}
          <div className="col-span-1 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-8">
              <img
                src="/icons/logo.png"
                alt="Finpay Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-4">Solutions</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Small Businesses</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Freelancers</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Teams</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-4">Learn</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Ebooks</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-4">Follow us on</h4>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-finpayPrimary transition-colors">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-4 h-4 sm:w-4 sm:h-4 object-contain" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-finpayPrimary transition-colors">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4 sm:w-4 sm:h-4 object-contain" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-finpayPrimary transition-colors">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-4 h-4 sm:w-4 sm:h-4 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-4 sm:pt-8 text-left">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © Finpay 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
