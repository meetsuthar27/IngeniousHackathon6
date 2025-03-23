import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-900 border-t-[1px] border-zinc-800 font-[Manrope] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          {/* Column 1: FinAura AI */}
          <div className="flex items-center mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold text-emerald-500">FinAura AI</h1>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h4 className="text-xl font-semibold text-emerald-500 mb-4">
              About Us
            </h4>
            <p className="text-zinc-400 text-sm">
              We provide exceptional services and solutions to meet your needs,
              ensuring growth and success for your business.
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-emerald-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-emerald-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-xl font-semibold text-emerald-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#consulting" className="hover:text-emerald-500">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#development" className="hover:text-emerald-500">
                  Development
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-emerald-500">
                  Support
                </a>
              </li>
              <li>
                <a href="#ai-solutions" className="hover:text-emerald-500">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div>
            <h4 className="text-xl font-semibold text-emerald-500 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>1234 Ahmedabad</li>
              <li>+91 8870986235</li>
              <li>info@finaura.ai</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-zinc-700 pt-6 mt-12 text-center">
          <p className="text-sm text-zinc-400">
            &copy; 2025 FinAura AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
