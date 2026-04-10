import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="md:pr-12">
            <img 
              src={logo} 
              alt="VStep Logo" 
              className="h-12 mb-2" 
            />
            <span className="text-lg font-bold text-white">
      VStep Consultancy
    </span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-4">
              Empowering students with expert guidance, career counselling, and 
              comprehensive admission support for a brighter future.
            </p>
          </div>

          {/* Column 2: Quick Links - Connected to Section IDs */}
          <div className="md:text-left">
            <h4 className="text-[#ffbc03] font-bold uppercase tracking-widest text-xs mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-slate-300 font-medium">
              <li>
                <a href="#home" className="hover:text-[#ffbc03] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ffbc03] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ffbc03] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ffbc03] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:text-left">
            <h4 className="text-[#ffbc03] font-bold uppercase tracking-widest text-xs mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="leading-relaxed">
                Pallimukku Junction,<br />
                Kollam, Kerala 691019
              </li>
              <li className="font-semibold text-white">
                <a href="" className="hover:text-[#ffbc03] transition-colors">+91 90377 30151</a><br />
                <a href="" className="hover:text-[#ffbc03] transition-colors">+91 8547700351</a>

              </li>
              <li>
                <a href="mailto:vestepconsultancy@gmail.com" className="hover:text-[#ffbc03] transition-colors break-words">
                  vestepconsultancy@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} VStep Consultancy. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;