
// import React, { useState } from 'react';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   // Track which link is active
//   const [active, setActive] = useState('home');

//   const navLinks = [
//     { name: 'Home', id: 'home' },
//     { name: 'About Us', id: 'about' },
//     { name: 'Our Services', id: 'services' },
//     { name: 'Contact Us', id: 'contact' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* 1. Logo Section - Combined Image & Name */}
//         <div className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer group">
//           <img 
//             className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
//             src={logo} 
//             alt="VStep Logo" 
//           />
//           <div className="flex flex-col">
//             <span className="font-[Outfit] text-lg font-black text-slate-900 leading-tight">
//               Education & Employment
//             </span>
//             <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
//               Consultancy PVT LTD
//             </span>
//           </div>
//         </div>

//         {/* 2. Navigation Links */}
//         <div className="hidden md:flex items-center space-x-10">
//           {navLinks.map((link) => (
//             <a 
//               key={link.id}
//               href={`#${link.id}`}
//               onClick={() => setActive(link.id)}
//               className={`text-[14px] transition-all duration-300 pb-1 ${
//                 active === link.id 
//                 ? "font-bold text-slate-900 border-b-[3px] border-[#ffbc03]" 
//                 : "font-medium text-slate-500 hover:text-black"
//               }`}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* 3. Action Buttons */}
//         <div className="flex items-center">
//           <button 
//             className="px-6 py-2 bg-slate-900 text-white text-[14px] font-bold rounded-lg hover:bg-black transition-all shadow-sm active:scale-95"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import logo from '../assets/logo.png';



const Navbar = () => {
  const [active, setActive] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Contact Us', id: 'contact' },
  ];

  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          
          <img className="h-10" src={logo} alt="logo" />
          <div>
            <span className="font-[Outfit] text-lg font-black text-slate-900 leading-tight ">
              Vstep Consultancy
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-10 ">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-[14px] transition-all duration-300 pb-1 cursor-pointer ${
                active === link.id
                  ? "font-bold text-slate-900 border-b-[3px] border-[#ffbc03]"
                  : "font-medium text-slate-500 hover:text-black"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Button */}
        <button className="px-6 py-2 bg-slate-900 text-white text-[14px] font-bold rounded-lg cursor-pointer"  onClick={() => window.location.href = "https://vstepconsultancy.com"}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;