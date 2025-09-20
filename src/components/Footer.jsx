// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-finpayLight py-6 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start text-center sm:text-left">
          
          {/* Logo Column */}
          <div className="col-span-1 flex flex-col items-center sm:items-start">
            <div className="h-8 mb-4">
              <img
                src="/icons/logo.png"
                alt="Finpay Logo"
                className="h-8 w-auto object-contain object-top"
              />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-2">Solutions</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Small Businesses</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Freelancers</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Teams</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-2">Learn</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Ebooks</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-finpayPrimary transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-finpayDark mb-2">Follow us on</h4>
            <div className="flex justify-center sm:justify-start gap-3">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-finpayPrimary transition-colors">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-4 h-4 object-contain" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-finpayPrimary transition-colors">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4 object-contain" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-finpayPrimary transition-colors">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-4 h-4 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            © Finpay 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
